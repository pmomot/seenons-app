import { createStore } from "vuex";
import { Route, Status, Stop } from "@/types";
import { getDriverRoute, ProcessStopParams, processStop } from "@/services";
import { parseStop } from "./parseStop";

export default createStore<Route>({
  state: {
    stops: [] as Stop[],
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
      state.stops = route.stops.map(parseStop);
      state.time_end = route.time_end;
    },
    setStop(state, updatedStop: Stop) {
      state.stops = state.stops.map((stop) => {
        if (stop.stop_id === updatedStop.stop_id) {
          return parseStop(updatedStop);
        }
        return stop;
      });
    },
  },
  actions: {
    getRoute({ commit }) {
      getDriverRoute().then((route) => {
        commit("setRouteInfo", route);
      });
    },
    processStop({ commit }, stopParams: ProcessStopParams) {
      processStop(stopParams).then((updatedStop) => {
        commit("setStop", updatedStop);
      });
    },
  },
  modules: {},
});
