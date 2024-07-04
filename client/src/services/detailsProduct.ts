const options = { method: 'GET' };

const url = `${import.meta.env.VITE_API_BASE_URL}/api/items`;

const detailsProduct = async (id: string) => {
  try {
    const response = await fetch(`${url}/${id}`, options);

    const { item } = await response.json();

    return item;
  } catch (error) {
    console.error(error);
  }
};

export default detailsProduct;
