import fetch from 'node-fetch';
import detailsMapper from '../mappers/details.mapper';
import {
  DetailsDescriptionResult,
  SearchItemResult,
} from '../types/items.types';

export const getDetails = async (id: string) => {
  try {
    const endpoint = `${process.env.BASE_API_URL}/items`;
    const endpointWithId = `${endpoint}/${id}`;

    const responseProduct = await fetch(endpointWithId);
    const resultProduct = (await responseProduct.json()) as SearchItemResult;

    const responseDescription = await fetch(`${endpointWithId}/description`);
    const resultDescription =
      (await responseDescription.json()) as DetailsDescriptionResult;

    const mapperResult = detailsMapper({
      ...resultProduct,
      ...resultDescription,
    });

    return mapperResult;
  } catch (error) {
    console.error(error);
  }
};
