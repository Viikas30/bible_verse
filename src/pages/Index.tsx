import React, { useState, useEffect } from 'react';
import { VerseSelector } from '../components/VerseSelector';
import { ZoomedVerse } from '../components/ZoomedVerse';
import { loadBibleVerses } from '../data/loadBibleVerses';
import { getUniqueBooks, getChaptersForBook, getVersesForChapter, findVerse, canonicalBookOrder } from '../data/bibleVerses';
import { BibleView } from '../components/BibleView';

export interface BibleVerse {
  id: number;
  book: string;
  chapter: number;
  verse: number;
  text: string;
  reference: string;
}

const Index = () => {
  const [bibleVerses, setBibleVerses] = useState<BibleVerse[]>([]);
  const [selectedVerse, setSelectedVerse] = useState<BibleVerse | null>(null);
  const [showBibleView, setShowBibleView] = useState(false);

  // 🔹 Separate selection state for each mode
  const [singleVerseState, setSingleVerseState] = useState({
    book: canonicalBookOrder[0],
    chapter: 1,
    verseNum: 1,
  });

  const [fullBibleState, setFullBibleState] = useState({
    book: canonicalBookOrder[0],
    chapter: 1,
    verseNum: 1,
  });

  useEffect(() => {
    loadBibleVerses().then(verses => {
      setBibleVerses(verses);
    });
  }, []);

  // Famous verses
  const famousVerses: BibleVerse[] = [
    findVerse(bibleVerses, "John", 3, 16),
    findVerse(bibleVerses, "Genesis", 1, 1),
    findVerse(bibleVerses, "Psalm", 23, 1),
    findVerse(bibleVerses, "Romans", 8, 28),
    findVerse(bibleVerses, "Philippians", 4, 13),
  ].filter(Boolean) as BibleVerse[];

  // Handlers for each mode
  const handleSingleVerseChange = (type: 'book' | 'chapter' | 'verseNum', value: string | number) => {
    setSingleVerseState(prev => ({ ...prev, [type]: value }));
  };

  const handleFullBibleChange = (type: 'book' | 'chapter' | 'verseNum', value: string | number) => {
    setFullBibleState(prev => ({ ...prev, [type]: value }));
  };

  const handleVerseSelect = (verse: BibleVerse) => {
    setSelectedVerse(verse);
  };

  const handleCloseZoom = () => {
    setSelectedVerse(null);
  };

  // 🔹 New: navigation handlers for ZoomedVerse
  const handlePrevVerse = () => {
    if (!selectedVerse || bibleVerses.length === 0) return;

    const currentIndex = bibleVerses.findIndex(v => v.reference === selectedVerse.reference);
    if (currentIndex > 0) {
      setSelectedVerse(bibleVerses[currentIndex - 1]);
    }
  };

  const handleNextVerse = () => {
    if (!selectedVerse || bibleVerses.length === 0) return;

    const currentIndex = bibleVerses.findIndex(v => v.reference === selectedVerse.reference);
    if (currentIndex < bibleVerses.length - 1) {
      setSelectedVerse(bibleVerses[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Bible Verse Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select specific verses by book, chapter, and verse number below, or explore a few famous verses.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              className={`px-4 py-2 rounded ${!showBibleView ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setShowBibleView(false)}
            >
              Single Verse Mode
            </button>
            <button
              className={`px-4 py-2 rounded ${showBibleView ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setShowBibleView(true)}
            >
              Full Bible Mode
            </button>
          </div>
        </header>

        {showBibleView ? (
          <BibleView
            bibleVerses={bibleVerses}
            selectedBook={fullBibleState.book}
            selectedChapter={fullBibleState.chapter}
            selectedVerseNum={fullBibleState.verseNum}
            onBookChange={book => handleFullBibleChange('book', book)}
            onChapterChange={chapter => handleFullBibleChange('chapter', chapter)}
            onVerseNumChange={verseNum => handleFullBibleChange('verseNum', verseNum)}
            onVerseSelect={handleVerseSelect}
          />
        ) : (
          <>
            <VerseSelector
              bibleVerses={bibleVerses}
              selectedBook={singleVerseState.book}
              selectedChapter={singleVerseState.chapter}
              selectedVerseNum={singleVerseState.verseNum}
              onBookChange={book => handleSingleVerseChange('book', book)}
              onChapterChange={chapter => handleSingleVerseChange('chapter', chapter)}
              onVerseNumChange={verseNum => handleSingleVerseChange('verseNum', verseNum)}
              onVerseSelect={handleVerseSelect}
            />

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                Famous Verses
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {famousVerses.map(v => (
                  <div
                    key={v.reference}
                    onClick={() => handleVerseSelect(v)}
                    className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
                  >
                    <h4 className="font-bold text-lg mb-2">{v.reference}</h4>
                    <p className="text-gray-700">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* 🔹 Zoomed Verse with Prev/Next Navigation */}
        {selectedVerse && (
          <ZoomedVerse
            verse={selectedVerse}
            onClose={handleCloseZoom}
            onPrev={handlePrevVerse}
            onNext={handleNextVerse}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
