import { BibleVerse } from '../pages/Index';

export async function loadBibleVerses(): Promise<BibleVerse[]> {
  const response = await fetch('/verses-1769.json');
  const data = await response.json();
  return Object.entries(data).map(([ref, text], idx) => {
    const match = ref.match(/^(.+?) (\d+):(\d+)$/);
    if (!match) return null;
    const [, book, chapter, verse] = match;
    return {
      id: idx + 1,
      book,
      chapter: Number(chapter),
      verse: Number(verse),
      text: text as string,
      reference: ref
    };
  }).filter(Boolean) as BibleVerse[];
}