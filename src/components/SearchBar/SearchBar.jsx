import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';
import { searchProducts, getProduct } from '../../api/fetchProducts';
import { getInventoryByCode } from '../../api/fetchInventories';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const { setProducts, setLoading, setOnlyProduct, setInventories } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {

    event.preventDefault();

    setLoading(true);

    const product = await getProduct(searchValue);

    if (product.length === 0 || product.length > 1){
      const productsFetch = await searchProducts(searchValue);
      setProducts(productsFetch);
      setOnlyProduct(false);
    }
    else{
      const inventory = await getInventoryByCode(searchValue);
      setProducts(product);
      setInventories(inventory);
      setOnlyProduct(true);
    }
    
    setLoading(false);
    setSearchValue('');
  };

  return (

    <form className="search-bar" onSubmit={handleSearch}>

      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
