import { Author } from './name.types';

interface ItemShipping {
  free_shipping: boolean;
}

export interface SearchItemPayload {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  thumbnail: string;
  shipping: ItemShipping;
}

export interface ItemPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface SearchItemResponse {
  id: string;
  title: string;
  price: ItemPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface DetailsItemPayload extends SearchItemPayload {
  sold_quantity: number;
  plain_text: string;
  author: Author;
}

interface DetailsItem {
  sold_quantity: number;
  description: string;
}

export interface DetailsItemResponse {
  author: Author;
  item: DetailsItem;
}
