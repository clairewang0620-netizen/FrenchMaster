export type ProficiencyLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type VocabularyCategory = '情绪类' | '日常生活类' | '食物类' | '其他类' | '时间类' | '餐饮消费';

export interface VocabularyWord {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  level: ProficiencyLevel;
  category: VocabularyCategory;
  examples: {
    sentence: string;
    ipa?: string; // Phonetic transcription for the example sentence
    translation: string;
  }[];
}

export interface ConversationSentence {
  id: string;
  sentence: string;
  phonetic: string;
  meaning: string;
}

export interface GrammarPoint {
  id: string;
  title: string;
  level: ProficiencyLevel;
  explanation: string;
  explanationZh: string;
  examples: {
    sentence: string;
    ipa: string;
    translation: string;
  }[];
}

export interface ErrorBookItem {
  word: VocabularyWord;
  errorCount: number;
  correctStreak: number;
}

export interface ReadingParagraph {
  fr: string;
  ipa?: string;
  zh: string;
}

export interface ReadingKeyword {
  word: string;
  ipa: string;
  zh: string;
}

export interface ReadingArticle {
  id: string;
  level: ProficiencyLevel;
  title: {
    fr: string;
    zh: string;
  };
  paragraphs: ReadingParagraph[];
  keywords: ReadingKeyword[];
}

export interface DailySentence {
  sentence: string;
  phonetic: string;
  meaning: string;
  category: string;
}

export type ExamQuestionType = 'multiple_choice' | 'fill_in_blank' | 'listening';

export interface ExamDetailedExplanation {
  analysis: string;        // Why the correct answer is correct
  grammarPoint: string;   // The specific grammar or vocabulary rule
  whyWrong?: string;      // Optional specific reason for common mistakes
  example: {
    fr: string;           // Example sentence in French
    zh: string;           // Example translation in Chinese
  };
}

export interface ExamQuestion {
  id: string;
  type: ExamQuestionType;
  question: string;
  question_cn_hint?: string; // New field for Chinese translation/hint of the question
  options?: string[];
  answer: string;
  audio?: string;
  explanation?: string; // Fallback text
  detailedExplanation?: ExamDetailedExplanation; // Structured feedback
  
  // Metadata for mistakes tracking
  selectedAnswer?: string;
  date?: string;
  level?: ProficiencyLevel;
}

export enum AppRoute {
  HOME = 'home',
  VOCABULARY = 'vocabulary',
  DAILY_CONVERSATION = 'daily-conversation',
  GRAMMAR = 'grammar',
  READING = 'reading',
  DICTATION = 'dictation',
  TEST = 'test',
  MISTAKES = 'mistakes'
}