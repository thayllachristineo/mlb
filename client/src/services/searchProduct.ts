const options = { method: 'GET' };

const searchProducts = async (name: string) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/items?q=${name}`,
      options,
    );

    const { items, categories } = await response.json();

    return { products: items.slice(0, 4), breadcrumbs: categories };
  } catch (error) {
    console.error(error);
  }
};

export default searchProducts;
