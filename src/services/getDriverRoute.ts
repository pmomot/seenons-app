import { route } from "@/services/driver_route_sample";
import { Route } from "@/types";

// simulates backend call
export function getDriverRoute(): Promise<Route> {
  return new Promise((resolve) => {
    const wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(route);
    }, 1000);
  });
}
