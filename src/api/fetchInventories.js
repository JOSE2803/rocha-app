const getInventoryByCode = async (query) => {
  //const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const response = await fetch(`http://localhost:3001/inventory?code=${query}`);
  const data = await response.json();

  return data;

};

export {
  getInventoryByCode,
};
