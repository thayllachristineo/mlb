import { SearchItemResult, SearchItemResponse } from '../types/items.types';

export const getItems = (item: SearchItemResult): SearchItemResponse => ({
  id: item?.id,
  title: item?.title,
  price: {
    currency: item?.currency_id,
    amount: Math.floor(item?.price),
    decimals: parseInt(((item?.price % 1) * 1000).toFixed(2)),
  },
  picture: item?.thumbnail,
  condition: item?.condition,
  free_shipping: item?.shipping?.free_shipping,
});
