
// import { BibleVerse } from '../pages/Index';

// export const bibleVerses: BibleVerse[] = [
//   // John Chapter 3
//   {
//     id: 1,
//     book: "John",
//     chapter: 3,
//     verse: 16,
//     text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
//     reference: "John 3:16"
//   },
//   {
//     id: 2,
//     book: "John",
//     chapter: 3,
//     verse: 17,
//     text: "For God did not send his Son into the world to condemn the world, but to save the world through him.",
//     reference: "John 3:17"
//   },
//   {
//     id: 3,
//     book: "John",
//     chapter: 3,
//     verse: 18,
//     text: "Whoever believes in him is not condemned, but whoever does not believe stands condemned already because they have not believed in the name of God's one and only Son.",
//     reference: "John 3:18"
//   },
  
//   // Jeremiah Chapter 29
//   {
//     id: 4,
//     book: "Jeremiah",
//     chapter: 29,
//     verse: 11,
//     text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
//     reference: "Jeremiah 29:11"
//   },
//   {
//     id: 5,
//     book: "Jeremiah",
//     chapter: 29,
//     verse: 12,
//     text: "Then you will call on me and come and pray to me, and I will listen to you.",
//     reference: "Jeremiah 29:12"
//   },
//   {
//     id: 6,
//     book: "Jeremiah",
//     chapter: 29,
//     verse: 13,
//     text: "You will seek me and find me when you seek me with all your heart.",
//     reference: "Jeremiah 29:13"
//   },

//   // Romans Chapter 8
//   {
//     id: 7,
//     book: "Romans",
//     chapter: 8,
//     verse: 28,
//     text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
//     reference: "Romans 8:28"
//   },
//   {
//     id: 8,
//     book: "Romans",
//     chapter: 8,
//     verse: 29,
//     text: "For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters.",
//     reference: "Romans 8:29"
//   },

//   // Philippians Chapter 4
//   {
//     id: 9,
//     book: "Philippians",
//     chapter: 4,
//     verse: 13,
//     text: "I can do all this through him who gives me strength.",
//     reference: "Philippians 4:13"
//   },
//   {
//     id: 10,
//     book: "Philippians",
//     chapter: 4,
//     verse: 6,
//     text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
//     reference: "Philippians 4:6"
//   },
//   {
//     id: 11,
//     book: "Philippians",
//     chapter: 4,
//     verse: 7,
//     text: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
//     reference: "Philippians 4:7"
//   },

//   // Psalm Chapter 23
//   {
//     id: 12,
//     book: "Psalm",
//     chapter: 23,
//     verse: 1,
//     text: "The Lord is my shepherd, I lack nothing.",
//     reference: "Psalm 23:1"
//   },
//   {
//     id: 13,
//     book: "Psalm",
//     chapter: 23,
//     verse: 2,
//     text: "He makes me lie down in green pastures, he leads me beside quiet waters.",
//     reference: "Psalm 23:2"
//   },
//   {
//     id: 14,
//     book: "Psalm",
//     chapter: 23,
//     verse: 3,
//     text: "He refreshes my soul. He guides me along the right paths for his name's sake.",
//     reference: "Psalm 23:3"
//   },

//   // Matthew Chapter 28
//   {
//     id: 15,
//     book: "Matthew",
//     chapter: 28,
//     verse: 19,
//     text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.",
//     reference: "Matthew 28:19"
//   },
//   {
//     id: 16,
//     book: "Matthew",
//     chapter: 28,
//     verse: 20,
//     text: "And teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.",
//     reference: "Matthew 28:20"
//   },

//   // 1 Corinthians Chapter 13
//   {
//     id: 17,
//     book: "1 Corinthians",
//     chapter: 13,
//     verse: 4,
//     text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
//     reference: "1 Corinthians 13:4"
//   },
//   {
//     id: 18,
//     book: "1 Corinthians",
//     chapter: 13,
//     verse: 5,
//     text: "It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.",
//     reference: "1 Corinthians 13:5"
//   },
//   {
//     id: 19,
//     book: "1 Corinthians",
//     chapter: 13,
//     verse: 13,
//     text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
//     reference: "1 Corinthians 13:13"
//   },

//   // Isaiah Chapter 40
//   {
//     id: 20,
//     book: "Isaiah",
//     chapter: 40,
//     verse: 31,
//     text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
//     reference: "Isaiah 40:31"
//   },

//   // Proverbs Chapter 3
//   {
//     id: 21,
//     book: "Proverbs",
//     chapter: 3,
//     verse: 5,
//     text: "Trust in the Lord with all your heart and lean not on your own understanding.",
//     reference: "Proverbs 3:5"
//   },
//   {
//     id: 22,
//     book: "Proverbs",
//     chapter: 3,
//     verse: 6,
//     text: "In all your ways submit to him, and he will make your paths straight.",
//     reference: "Proverbs 3:6"
//   }
// ];

// export const getUniqueBooks = (): string[] => {
//   const books = [...new Set(bibleVerses.map(verse => verse.book))];
//   return books.sort();
// };

// export const getChaptersForBook = (book: string): number[] => {
//   const chapters = [...new Set(bibleVerses.filter(verse => verse.book === book).map(verse => verse.chapter))];
//   return chapters.sort((a, b) => a - b);
// };

// export const getVersesForChapter = (book: string, chapter: number): number[] => {
//   const verses = bibleVerses.filter(verse => verse.book === book && verse.chapter === chapter).map(verse => verse.verse);
//   return verses.sort((a, b) => a - b);
// };

// export const findVerse = (book: string, chapter: number, verse: number): BibleVerse | undefined => {
//   return bibleVerses.find(v => v.book === book && v.chapter === chapter && v.verse === verse);
// };
import { BibleVerse } from '../pages/Index';
export const canonicalBookOrder = [
  "Genesis","Exodus","Leviticus","Numbers","Deuteronomy",
  "Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles",
  "Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Solomon",
  "Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel",
  "Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi",
  "Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians",
  "1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"
];
export const getUniqueBooks = (bibleVerses: BibleVerse[]): string[] => {
  const booksSet = new Set(bibleVerses.map(verse => verse.book));
  return canonicalBookOrder.filter(book => booksSet.has(book));
};

export const getChaptersForBook = (bibleVerses: BibleVerse[], book: string): number[] => {
  const chapters = [
    ...new Set(
      bibleVerses.filter(verse => verse.book === book).map(verse => verse.chapter)
    ),
  ];
  return chapters.sort((a, b) => a - b);
};

export const getVersesForChapter = (bibleVerses: BibleVerse[], book: string, chapter: number): number[] => {
  const verses = bibleVerses
    .filter(verse => verse.book === book && verse.chapter === chapter)
    .map(verse => verse.verse);
  return verses.sort((a, b) => a - b);
};

export const findVerse = (bibleVerses: BibleVerse[], book: string, chapter: number, verse: number): BibleVerse | undefined => {
  return bibleVerses.find(
    v => v.book === book && v.chapter === chapter && v.verse === verse
  );
};
