import { getAuthor } from './name.mapper';
import { getItems } from './items.mapper';

import { Filter, FilterValues } from '../types/search.types';
import { SearchItemPayload } from '../types/items.types';

const getCategories = (data: any): string[] | [] => {
  const categoryFilter = data.filters.find(
    (filter: Filter) => filter.id === 'category',
  );

  return categoryFilter
    ? categoryFilter.values.map((filter: FilterValues) => filter.name)
    : [];
};

const searchMapper = (data: any) => ({
  author: getAuthor(),
  categories: getCategories(data),
  items: data.results.map((d: SearchItemPayload) => getItems(d)),
});
export default searchMapper;
