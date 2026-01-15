import { VocabularyWord, ErrorBookItem } from '../types';

const KEYS = {
  STRENGTHEN_SET: 'french_app_strengthen_set',
  KNOWN_WORDS: 'french_app_known_words',
  WRONG_ANSWERS: 'french_app_wrong_answers',
  ERROR_BOOK: 'french_app_error_book',
  ACCESS_GRANTED: 'french_access_granted',
  ACCESS_CODE: 'french_access_code'
};

const safeGet = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
};

const safeSet = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {}
};

const safeRemove = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {}
};

export const hasAccess = (): boolean => {
  const code = safeGet(KEYS.ACCESS_CODE);
  // REVOCATION KILL-SWITCH: Specific codes permanently disabled
  const REVOKED_CODES = ['FM-2507-9FZL', 'FM-2507-WM8T', 'FM-2507-C7AQ', 'FM-2507-AK8Z', 'FM-2507-Q7LX'];
  if (code && REVOKED_CODES.includes(code)) {
    return false;
  }
  return safeGet(KEYS.ACCESS_GRANTED) === 'true';
};

export const saveAccess = (code: string) => {
  safeSet(KEYS.ACCESS_GRANTED, 'true');
  safeSet(KEYS.ACCESS_CODE, code);
};

export const clearAccess = () => {
  safeRemove(KEYS.ACCESS_GRANTED);
  safeRemove(KEYS.ACCESS_CODE);
};

export const addToStrengthenSet = (word: VocabularyWord) => {
  const set = getStrengthenSet();
  if (!set.find(w => w.word === word.word)) {
    safeSet(KEYS.STRENGTHEN_SET, JSON.stringify([...set, word]));
  }
};

export const removeFromStrengthenSet = (wordStr: string) => {
  const set = getStrengthenSet();
  safeSet(KEYS.STRENGTHEN_SET, JSON.stringify(set.filter(w => w.word !== wordStr)));
};

export const getStrengthenSet = (): VocabularyWord[] => {
  const data = safeGet(KEYS.STRENGTHEN_SET);
  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const markAsKnown = (wordStr: string) => {
  const known = getKnownWords();
  if (!known.includes(wordStr)) {
    safeSet(KEYS.KNOWN_WORDS, JSON.stringify([...known, wordStr]));
  }
};

export const getKnownWords = (): string[] => {
  const data = safeGet(KEYS.KNOWN_WORDS);
  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const recordWrongAnswer = (question: any) => {
  const wrong = getWrongAnswers();
  safeSet(KEYS.WRONG_ANSWERS, JSON.stringify([...wrong, { ...question, date: new Date().toISOString() }]));
};

export const getWrongAnswers = (): any[] => {
  const data = safeGet(KEYS.WRONG_ANSWERS);
  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const getErrorBook = (): ErrorBookItem[] => {
  const data = safeGet(KEYS.ERROR_BOOK);
  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const manualAddToErrorBook = (word: VocabularyWord) => {
  const book = getErrorBook();
  const index = book.findIndex(item => item.word.word === word.word);
  if (index === -1) {
    book.push({ word, errorCount: 1, correctStreak: 0 });
    safeSet(KEYS.ERROR_BOOK, JSON.stringify(book));
  }
};

export const updateErrorBookStreak = (word: VocabularyWord, isCorrect: boolean) => {
  const book = getErrorBook();
  const index = book.findIndex(item => item.word.word === word.word);

  if (index !== -1) {
    if (isCorrect) {
      book[index].correctStreak += 1;
      if (book[index].correctStreak >= 3) {
        book.splice(index, 1);
      }
    } else {
      book[index].errorCount += 1;
      book[index].correctStreak = 0;
    }
    safeSet(KEYS.ERROR_BOOK, JSON.stringify(book));
  }
};