export interface Author {
  name: string;
  lastname: string;
}

export interface PathFromRoot {
  id: string;
  name: string;
}

export interface FilterValues {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: FilterValues[];
}

export interface ItemPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface ItemShipping {
  free_shipping: boolean;
}

export interface ItemPayload {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  thumbnail: string;
  shipping: ItemShipping;
}

export interface ItemResponse {
  id: string;
  title: string;
  price: ItemPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
}
