const options = { method: 'GET' };

const url = `${import.meta.env.VITE_API_BASE_URL}/api/items`;
const searchProducts = async (name: string) => {
  try {
    const response = await fetch(`${url}?q=${name}`, options);

    const { items, categories } = await response.json();

    return { products: items.slice(0, 4), breadcrumbs: categories };
  } catch (error) {
    console.error(error);
  }
};

export default searchProducts;
