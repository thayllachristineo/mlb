interface DetailsResponse {
  item: {
    condition: string;
    description: string;
    free_shipping: boolean;
    id: string;
    picture: string;
    price: {
      amount: number;
      currency: string;
      decimals: number;
    };
    sold_quantity: number;
    title: string;
    permalink: string;
  };
}

const options = { method: 'GET' };

const url = `${import.meta.env.VITE_API_BASE_URL}/api/items`;

const detailsProduct = async (id: string) => {
  try {
    const response = await fetch(`${url}/${id}`, options);

    const { item } = (await response.json()) as DetailsResponse;   
    return item;
  } catch (error) {
    console.error(error);
  }
};

export default detailsProduct;
