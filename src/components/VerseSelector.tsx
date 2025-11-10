import React from "react";
import { getUniqueBooks, getChaptersForBook, getVersesForChapter, findVerse } from "../data/bibleVerses";
import { BibleVerse } from "../pages/Index";

interface Props {
  onVerseSelect: (verse: BibleVerse) => void;
  bibleVerses: BibleVerse[];
  selectedBook: string;
  selectedChapter: number;
  selectedVerseNum: number;
  onBookChange: (book: string) => void;
  onChapterChange: (chapter: number) => void;
  onVerseNumChange: (verseNum: number) => void;
}

export const VerseSelector: React.FC<Props> = ({
  onVerseSelect,
  bibleVerses,
  selectedBook,
  selectedChapter,
  selectedVerseNum,
  onBookChange,
  onChapterChange,
  onVerseNumChange,
}) => {
  const handleSelect = () => {
    const found = findVerse(bibleVerses, selectedBook, selectedChapter, selectedVerseNum);
    if (found) onVerseSelect(found);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex gap-4 justify-center items-center bg-white/80 rounded-xl shadow px-6 py-4 mt-8">
        {/* Book Dropdown */}
        <select
          value={selectedBook}
          onChange={e => onBookChange(e.target.value)}
          className="bg-transparent border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500 text-lg"
        >
          {getUniqueBooks(bibleVerses).map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        {/* Chapter Dropdown */}
        <select
          value={selectedChapter}
          onChange={e => onChapterChange(Number(e.target.value))}
          className="bg-transparent border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500 text-lg"
        >
          {getChaptersForBook(bibleVerses, selectedBook).map(ch => (
            <option key={ch} value={ch}>{ch}</option>
          ))}
        </select>

        {/* Verse Dropdown */}
        <select
          value={selectedVerseNum}
          onChange={e => onVerseNumChange(Number(e.target.value))}
          className="bg-transparent border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500 text-lg"
        >
          {getVersesForChapter(bibleVerses, selectedBook, selectedChapter).map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>

        <button
          onClick={handleSelect}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow transition"
        >
          Go
        </button>
      </div>
    </div>
  );
};