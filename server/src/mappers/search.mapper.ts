import { getAuthor } from './name.mapper';
import { getItems } from './items.mapper';

import { Filter, FilterValues } from '../types/search.types';
import { SearchItemResult } from '../types/items.types';

const getCategories = (filters: Filter[]): string[] | [] => {
  const categoryFilter = filters?.find(
    (filter: Filter) => filter?.id === 'category',
  );

  return categoryFilter
    ? categoryFilter?.values?.map((filter: FilterValues) => filter?.name)
    : [];
};

const searchMapper = (data: {
  results: SearchItemResult[];
  filters: Filter[];
}) => {
  return {
    author: getAuthor(),
    categories: getCategories(data?.filters),
    items: data?.results?.map((d: SearchItemResult) => getItems(d)),
  };
};

export default searchMapper;
