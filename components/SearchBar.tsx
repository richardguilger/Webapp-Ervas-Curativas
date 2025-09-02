
import React from 'react';
import { SearchIcon } from './Icon';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-brand-muted" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-11 pr-4 py-3 bg-white border border-black/5 rounded-xl focus:ring-2 focus:ring-brand-primary focus:outline-none transition duration-200 text-brand-text placeholder-brand-muted"
      />
    </div>
  );
};

export default SearchBar;