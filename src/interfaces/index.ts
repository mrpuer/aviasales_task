export interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export interface Ticket {
  price: number;
  carrier: string;
  segments: Segment[];
}

export interface Stops {
  all: boolean;
  none: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
  [key: string]: boolean;
}
