import fetch from 'node-fetch';

import searchMapper from '../mappers/search.mapper';
import { SearchItemResult } from '../types/items.types';
import { Filter } from '../types/search.types';

export const getSearch = async (query: string) => {
  try {
    const endpoint = `${process.env.BASE_API_URL}/sites/MLA/search`;

    const response = await fetch(`${endpoint}?q=${query}`);
    const result = (await response.json()) as {
      results: SearchItemResult[];
      filters: Filter[];
    };

    const mapperResult = searchMapper(result);

    return mapperResult;
  } catch (error) {
    console.log(error);
  }
};
