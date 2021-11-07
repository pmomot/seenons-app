import { route } from "@/services/driver_route_sample";
import { Id, Status, Stop } from "@/types";

export interface ProcessStopParams {
  stop_id: Id;
  orders: { order_id: Id; quantity: number }[];
}

// simulates backend call which returns the same Stop object but with status: Completed everywhere
export function processStop(params: ProcessStopParams): Promise<Stop> {
  return new Promise((resolve) => {
    const wait = setTimeout(() => {
      clearTimeout(wait);

      // this is needed for pure simulation
      // we need to get full `stop` list to find relevant stop
      // then to override status and orders' statuses
      // and return new object to the store
      // in real life backend will return full new `stop` object with all nesting
      const cachedStop = route.stops.find(
        ({ stop_id }) => String(stop_id) === String(params.stop_id)
      );
      const updatedOrdersSet = params.orders.reduce((set, order) => {
        set[order.order_id] = order;
        return set;
      }, {} as Record<Id, { order_id: Id; quantity: number }>);
      const updatedStop = {
        ...cachedStop,
        ...stop,
        status: Status.Completed,
        orders:
          cachedStop?.orders.map((order) => ({
            ...order,
            ...updatedOrdersSet[order.order_id],
            status: Status.Completed,
          })) || [],
      };

      resolve(updatedStop as Stop);
    }, 1000);
  });
}
