
import React from 'react';
import { BibleVerse } from '../pages/Index';

interface VersesGridProps {
  verses: BibleVerse[];
  onVerseSelect: (verse: BibleVerse) => void;
  searchTerm: string;
}

export const VersesGrid: React.FC<VersesGridProps> = ({ verses, onVerseSelect, searchTerm }) => {
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  if (verses.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📖</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No verses found</h3>
        <p className="text-gray-500">Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {verses.map((verse, index) => (
        <div
          key={verse.id}
          onClick={() => onVerseSelect(verse)}
          className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-white/90 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full">
                {verse.reference}
              </span>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">{verse.verse}</span>
              </div>
            </div>
            
            <blockquote className="text-gray-700 leading-relaxed mb-4 line-clamp-4">
              "{highlightText(verse.text, searchTerm)}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <cite className="text-sm font-medium text-gray-500 not-italic">
                — {verse.book} {verse.chapter}:{verse.verse}
              </cite>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-xs text-blue-600 font-medium">Click to zoom</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
