import React from 'react';
import { BibleVerse } from '../pages/Index';
import { canonicalBookOrder, getChaptersForBook, getVersesForChapter } from '../data/bibleVerses';

interface BibleViewProps {
  bibleVerses: BibleVerse[];
  selectedBook: string;
  selectedChapter: number;
  selectedVerseNum: number;
  onBookChange: (book: string) => void;
  onChapterChange: (chapter: number) => void;
  onVerseNumChange: (verseNum: number) => void;
  onVerseSelect?: (verse: BibleVerse) => void;
}

export const BibleView: React.FC<BibleViewProps> = ({
  bibleVerses,
  selectedBook,
  selectedChapter,
  selectedVerseNum,
  onBookChange,
  onChapterChange,
  onVerseNumChange,
  onVerseSelect
}) => {
  const chapters = getChaptersForBook(bibleVerses, selectedBook);
  const verses = getVersesForChapter(bibleVerses, selectedBook, selectedChapter);

  // Chapter navigation handlers
  const handlePrevChapter = () => {
    const chapterIdx = chapters.indexOf(selectedChapter);
    if (chapterIdx > 0) {
      const prevChapter = chapters[chapterIdx - 1];
      onChapterChange(prevChapter);
      const firstVerse = getVersesForChapter(bibleVerses, selectedBook, prevChapter)[0];
      onVerseNumChange(firstVerse);
    }
  };

  const handleNextChapter = () => {
    const chapterIdx = chapters.indexOf(selectedChapter);
    if (chapterIdx < chapters.length - 1) {
      const nextChapter = chapters[chapterIdx + 1];
      onChapterChange(nextChapter);
      const firstVerse = getVersesForChapter(bibleVerses, selectedBook, nextChapter)[0];
      onVerseNumChange(firstVerse);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Fixed Left Arrow */}
      <button
        onClick={handlePrevChapter}
        disabled={selectedChapter === chapters[0]}
        className="fixed left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-blue-600 rounded-full shadow-lg p-3 transition disabled:opacity-30 z-50"
        aria-label="Previous Chapter"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Fixed Right Arrow */}
      <button
        onClick={handleNextChapter}
        disabled={selectedChapter === chapters[chapters.length - 1]}
        className="fixed right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-blue-600 rounded-full shadow-lg p-3 transition disabled:opacity-30 z-50"
        aria-label="Next Chapter"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Selectors */}
      <div className="flex gap-4 mb-8 justify-center items-center bg-white/80 rounded-xl shadow px-6 py-4 mt-8">
        <select value={selectedBook} onChange={e => onBookChange(e.target.value)} className="bg-transparent border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500 text-lg">
          {canonicalBookOrder.map(book => (
            <option key={book} value={book}>{book}</option>
          ))}
        </select>
        <select value={selectedChapter} onChange={e => onChapterChange(Number(e.target.value))} className="bg-transparent border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500 text-lg">
          {chapters.map(ch => (
            <option key={ch} value={ch}>{ch}</option>
          ))}
        </select>
        <select value={selectedVerseNum} onChange={e => onVerseNumChange(Number(e.target.value))} className="bg-transparent border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-blue-500 text-lg">
          {verses.map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      {/* Only show selected book/chapter */}
      <div className="mb-8 text-center w-full max-w-2xl mx-auto bg-white/80 rounded-2xl shadow-lg px-6 py-8">
        <h2 className="text-3xl font-bold mb-2 text-blue-700">{selectedBook}</h2>
        <h3 className="text-xl font-semibold mb-6 text-indigo-600">Chapter {selectedChapter}</h3>
        <div>
          {bibleVerses
            .filter(v => v.book === selectedBook && v.chapter === selectedChapter)
            .sort((a, b) => a.verse - b.verse)
            .map(v => (
              <p
                key={v.id}
                className={`mb-6 text-lg leading-relaxed transition-all duration-200 ${v.verse === selectedVerseNum ? 'bg-blue-100 font-bold text-blue-700 rounded-xl px-2 py-1 shadow' : 'text-gray-800'}`}
                style={{
                  cursor: onVerseSelect ? 'pointer' : 'default',
                  textAlign: 'center'
                }}
                onClick={onVerseSelect ? () => onVerseSelect(v) : undefined}
              >
                <span className="text-blue-400 font-semibold">{v.verse}</span> {v.text}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};