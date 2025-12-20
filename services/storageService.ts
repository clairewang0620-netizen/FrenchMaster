
import { VocabularyWord, ErrorBookItem } from '../types';

const KEYS = {
  STRENGTHEN_SET: 'french_app_strengthen_set',
  KNOWN_WORDS: 'french_app_known_words',
  WRONG_ANSWERS: 'french_app_wrong_answers',
  ERROR_BOOK: 'french_app_error_book',
  ACCESS_GRANTED: 'french_access_granted',
  ACCESS_CODE: 'french_access_code'
};

// Access Control Logic
export const hasAccess = (): boolean => {
  return localStorage.getItem(KEYS.ACCESS_GRANTED) === 'true';
};

export const saveAccess = (code: string) => {
  localStorage.setItem(KEYS.ACCESS_GRANTED, 'true');
  localStorage.setItem(KEYS.ACCESS_CODE, code);
};

export const clearAccess = () => {
  localStorage.removeItem(KEYS.ACCESS_GRANTED);
  localStorage.removeItem(KEYS.ACCESS_CODE);
};

export const addToStrengthenSet = (word: VocabularyWord) => {
  const set = getStrengthenSet();
  if (!set.find(w => w.word === word.word)) {
    localStorage.setItem(KEYS.STRENGTHEN_SET, JSON.stringify([...set, word]));
  }
};

export const removeFromStrengthenSet = (wordStr: string) => {
  const set = getStrengthenSet();
  localStorage.setItem(KEYS.STRENGTHEN_SET, JSON.stringify(set.filter(w => w.word !== wordStr)));
};

export const getStrengthenSet = (): VocabularyWord[] => {
  const data = localStorage.getItem(KEYS.STRENGTHEN_SET);
  return data ? JSON.parse(data) : [];
};

export const markAsKnown = (wordStr: string) => {
  const known = getKnownWords();
  if (!known.includes(wordStr)) {
    localStorage.setItem(KEYS.KNOWN_WORDS, JSON.stringify([...known, wordStr]));
  }
};

export const getKnownWords = (): string[] => {
  const data = localStorage.getItem(KEYS.KNOWN_WORDS);
  return data ? JSON.parse(data) : [];
};

export const recordWrongAnswer = (question: any) => {
  const wrong = getWrongAnswers();
  localStorage.setItem(KEYS.WRONG_ANSWERS, JSON.stringify([...wrong, { ...question, date: new Date().toISOString() }]));
};

export const getWrongAnswers = (): any[] => {
  const data = localStorage.getItem(KEYS.WRONG_ANSWERS);
  return data ? JSON.parse(data) : [];
};

// Error Book Logic for Dictation
export const getErrorBook = (): ErrorBookItem[] => {
  const data = localStorage.getItem(KEYS.ERROR_BOOK);
  return data ? JSON.parse(data) : [];
};

// Manual entry into Error Book
export const manualAddToErrorBook = (word: VocabularyWord) => {
  const book = getErrorBook();
  const index = book.findIndex(item => item.word.word === word.word);
  if (index === -1) {
    book.push({ word, errorCount: 1, correctStreak: 0 });
    localStorage.setItem(KEYS.ERROR_BOOK, JSON.stringify(book));
  }
};

// Update existing items (for streak management)
export const updateErrorBookStreak = (word: VocabularyWord, isCorrect: boolean) => {
  const book = getErrorBook();
  const index = book.findIndex(item => item.word.word === word.word);

  if (index !== -1) {
    if (isCorrect) {
      book[index].correctStreak += 1;
      if (book[index].correctStreak >= 3) {
        book.splice(index, 1); // Remove after 3 correct streaks
      }
    } else {
      book[index].errorCount += 1;
      book[index].correctStreak = 0;
    }
    localStorage.setItem(KEYS.ERROR_BOOK, JSON.stringify(book));
  }
};
