import {
  Author,
  Filter,
  FilterValues,
  ItemPayload,
  ItemResponse,
} from '../types/search.types';

const getAuthor = (): Author => ({
  name: 'Name',
  lastname: 'LastName',
});

const getCategories = (data: any): string[] | [] => {
  const categoryFilter = data.filters.find(
    (filter: Filter) => filter.id === 'category',
  );

  return categoryFilter
    ? categoryFilter.values.map((filter: FilterValues) => filter.name)
    : [];
};

const getItems = (item: ItemPayload): ItemResponse => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: Math.floor(item.price),
    decimals: parseFloat((item.price % 1).toFixed(2)),
  },
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
});

const searchMapper = (data: any) => ({
  author: getAuthor(),
  categories: getCategories(data),
  items: data.results.map((d: ItemPayload) => getItems(d)),
});

export default searchMapper;
