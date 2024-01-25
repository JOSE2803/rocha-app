const fetchProducts = async (query) => {
  //const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const response = await fetch(`http://localhost:3001/product/search?term=${query}`);
  const data = await response.json();

  console.log(data);

  return data;

};

export default fetchProducts;
