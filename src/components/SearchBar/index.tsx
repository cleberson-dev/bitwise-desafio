import React from 'react';
import './styles.scss';
import search from '../../img/search.svg';
import octocat from '../../img/octocat.svg';

function SearchBar() {
  return (
    <div className="search-bar">
      <img src={search} alt="Search icon" className="search-icon" />
      <input
        type="text"
        placeholder="Buscar usuário"
        className="search-input"
      />
      <button className="search-btn">
        <img src={octocat} alt="Octocat icon"  />  
      </button>
    </div>
  );
}

export default SearchBar;