import { getStatus } from "@/utils";
import { OrderType, Stop } from "@/types";

export function parseStop(stop: Stop): Stop {
  return {
    ...stop,
    parsedStatus: getStatus(stop.status),
    address: {
      ...stop.address,
      link: `https://maps.google.com/?ll=${stop.address.lat},${stop.address.lon}`,
    },
    ordersPick: stop.orders.filter((order) => order.type === OrderType.Pickup),
    ordersDrop: stop.orders.filter((order) => order.type === OrderType.Dropoff),
  };
}
