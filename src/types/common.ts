export enum Status {
  New,
  Pending,
  Scheduled,
  InProgress,
  Completed,
}

export enum OrderType {
  Pickup,
  Dropoff,
}

export enum Issue {
  Other,
  WrongQuantity,
  WrongContainer,
  ContainerNotAccessible,
}

export type Timestamp = string;
export type Id = string;

export interface Address {
  house_number: string;
  street: string;
  town: string;
  postal_code: string;
  country: string;
  lat: number;
  lon: number;
  link?: string;
}

export interface Order {
  order_id: Id;
  stream_product_id: number;
  stream_type: string; // probably enum on the backend
  quantity: number;
  size: number;
  status: Status;
  type: OrderType;
}

export interface CommonStop {
  status: Status;
  name: string;
  avatar: string | null;
  telephone: string | null;
  address: Address;
  time_start: Timestamp;
  time_end: Timestamp;
  orders: Order[];
  // client side props
  parsedStatus?: string;
  ordersPick?: number;
  ordersDrop?: number;
}
