import fetch from 'node-fetch';

import searchMapper from '../mappers/search.mapper';

export const getSearch = async (query: string) => {
  const endpoint = `${process.env.BASE_API_URL}/sites/MLA/search`;

  const response = await fetch(`${endpoint}?q=${query}`);
  const result = await response.json();

  const mapperResult = searchMapper(result);

  return mapperResult;
};
