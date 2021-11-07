import { createStore } from "vuex";
import {Route, Status, Stop} from "@/types";
import { getDriverRoute } from "@/services";

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
      state.stops = route.stops;
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
