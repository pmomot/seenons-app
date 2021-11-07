import { createStore } from "vuex";
import { OrderType, Route, Status } from "@/types";
import { getDriverRoute } from "@/services";
import { getStatus } from "@/utils";

export default createStore<Route>({
  state: {
    stops: [],
    name: "",
    orglog_id: "",
    vehicle_id: "",
    driver_id: "",
    time_start: "",
    time_end: "",
    status: Status.New,
    depots: [],
  },
  mutations: {
    setRouteInfo(state, route: Route) {
      state.name = route.name;
      state.orglog_id = route.orglog_id;
      state.vehicle_id = route.vehicle_id;
      state.driver_id = route.driver_id;
      state.stops = route.stops.map((stop) => {
        return {
          ...stop,
          parsedStatus: getStatus(stop.status),
          address: {
            ...stop.address,
            link: `https://maps.google.com/?ll=${stop.address.lat},${stop.address.lon}`,
          },
          ordersPick: stop.orders.filter(
            (order) => order.type === OrderType.Pickup
          ).length,
          ordersDrop: stop.orders.filter(
            (order) => order.type === OrderType.Dropoff
          ).length,
        };
      });
      state.time_end = route.time_end;
    },
  },
  actions: {
    getRoute({ commit }) {
      getDriverRoute().then((route) => {
        commit("setRouteInfo", route);
      });
    },
  },
  modules: {},
});
