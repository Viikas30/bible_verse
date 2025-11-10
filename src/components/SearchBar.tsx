
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search verses, books, or references..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-transparent bg-white/80 backdrop-blur-sm shadow-lg focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200"
        />
      </div>
      {searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-md">
          <p className="text-sm text-gray-600">
            Found {searchTerm ? 'results' : 'all verses'} for "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
};
