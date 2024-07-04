import { Author } from './name.types';

export interface SearchItemResult {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  };
  sold_quantity: number;
  permalink: string;
}

export interface SearchItemResponse {
  id: string;
  title: string;
  price: {
    amount: number;
    currency: string;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  permalink: string;
}

export interface DetailsDescriptionResult {
  plain_text: string;
}

export type DetailsItemResult = SearchItemResult & DetailsDescriptionResult;

export interface DetailsItemResponse {
  author: Author;
  item: { sold_quantity: number; description: string };
}
