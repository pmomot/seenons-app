import { Id, Timestamp, Status, CommonStop, Order } from "./common";

export interface Stop extends CommonStop {
  stop_id: number;
  comment: string | null;
  eta: Timestamp;
  ordersPick?: Order[];
  ordersDrop?: Order[];
}

interface Depo extends CommonStop {
  orgloc_id: Id;
  dropoff: boolean;
}

interface Garage extends Depo {
  stop_id: number;
  eta: Timestamp;
}

export interface Route {
  name: string;
  orglog_id: Id;
  vehicle_id: Id;
  driver_id: Id;
  time_start: Timestamp;
  time_end: Timestamp;
  status: Status;
  stops: Stop[];
  depots: Depo[];
  garage?: Garage;
  _created?: Timestamp;
  _modified?: Timestamp;
  _active?: boolean;
}
