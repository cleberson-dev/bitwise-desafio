import React, { useState, KeyboardEventHandler } from 'react';
import './styles.scss';
import search from '../../img/search.svg';
import octocat from '../../img/octocat.svg';

interface SearchBarProps {
  hideButton?: boolean;
  onSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  hideButton = false, 
  onSearch = () => {}
}) => {
  const [text, setText] = useState('');

  const keyUpHandler: KeyboardEventHandler = (e) => {
    if (e.key !== 'Enter') return;
    onSearch(text);
    setText('');
  }

  return (
    <div className="search-bar">
      <img src={search} alt="Search icon" className="search-icon" />
      <input
        type="text"
        placeholder="Buscar usuário"
        className="search-input"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyUp={keyUpHandler}
      />
      {!hideButton && (
        <button className="search-btn" onClick={() => onSearch(text)}>
          <img src={octocat} alt="Octocat icon"  />  
        </button>
      )}
    </div>
  );
}

export default SearchBar;