
import { GoogleGenAI, Type } from "@google/genai";
import { ProficiencyLevel, VocabularyWord, GrammarPoint, ReadingArticle, DailySentence, ExamQuestion } from '../types';

// Use process.env.API_KEY directly for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVocabulary = async (level: ProficiencyLevel): Promise<VocabularyWord[]> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate 15 authentic French vocabulary words for level ${level}. 
    Requirements:
    1. Focus on high-frequency nouns, verbs, and adjectives.
    2. Include standard IPA phonetic transcription.
    3. Meaning must be concise Chinese (简体中文).
    4. Provide exactly 2 natural, daily-use French example sentences with Chinese translations.
    5. Ensure level appropriateness (A1 is simple, C1 is sophisticated).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            word: { type: Type.STRING },
            phonetic: { type: Type.STRING },
            meaning: { type: Type.STRING },
            examples: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  sentence: { type: Type.STRING },
                  translation: { type: Type.STRING }
                },
                required: ["sentence", "translation"]
              },
              minItems: 2,
              maxItems: 2
            }
          },
          required: ["word", "phonetic", "meaning", "examples"]
        }
      }
    }
  });

  try {
    // Access response.text directly (not a method) and trim it
    const text = response.text?.trim() || '[]';
    const words: VocabularyWord[] = JSON.parse(text).map((w: any, idx: number) => ({
      ...w,
      id: `${level}-${idx}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      level
    }));
    return words;
  } catch (err) {
    console.error("Failed to parse Gemini response", err);
    return [];
  }
};

export const generateGrammar = async (level: ProficiencyLevel, topic?: string): Promise<GrammarPoint> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Explain the French grammar topic "${topic || 'A common ' + level + ' topic'}" for level ${level}. Provide explanation in Chinese and 2 examples with French sentences and Chinese translations.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          explanation: { type: Type.STRING },
          examples: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                sentence: { type: Type.STRING },
                translation: { type: Type.STRING }
              }
            }
          }
        },
        required: ["title", "explanation", "examples"]
      }
    }
  });
  
  // Access response.text directly and trim before parsing
  const jsonStr = response.text?.trim() || '{}';
  return { ...JSON.parse(jsonStr), level };
};

export const generateReading = async (level: ProficiencyLevel): Promise<ReadingArticle> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Write a French reading article (300-500 words) for level ${level}. Topic: French culture or daily life. Include a title, full Chinese translation, and 5 key vocabulary words with Chinese meanings.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          text: { type: Type.STRING },
          translation: { type: Type.STRING },
          keywords: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                word: { type: Type.STRING },
                meaning: { type: Type.STRING }
              }
            }
          }
        },
        required: ["title", "text", "translation", "keywords"]
      }
    }
  });
  
  // Access response.text directly and trim before parsing
  const jsonStr = response.text?.trim() || '{}';
  return JSON.parse(jsonStr);
};

export const generateDailySentences = async (category: string): Promise<DailySentence[]> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate 10 daily French sentences for the category "${category}". Include phonetic and Chinese meaning.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            sentence: { type: Type.STRING },
            phonetic: { type: Type.STRING },
            meaning: { type: Type.STRING }
          },
          required: ["sentence", "phonetic", "meaning"]
        }
      }
    }
  });
  
  // Access response.text directly and trim before parsing
  const jsonStr = response.text?.trim() || '[]';
  return JSON.parse(jsonStr).map((s: any) => ({ ...s, category }));
};

export const generateExam = async (level: ProficiencyLevel): Promise<ExamQuestion[]> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate 10 multiple-choice questions for French level ${level}. Cover vocabulary and grammar. Each question should have 4 options and 1 correct answer. Include a Chinese explanation.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            options: { type: Type.ARRAY, items: { type: Type.STRING } },
            correctAnswer: { type: Type.STRING },
            explanation: { type: Type.STRING }
          },
          required: ["question", "options", "correctAnswer", "explanation"]
        }
      }
    }
  });
  
  // Access response.text directly and trim before parsing
  const jsonStr = response.text?.trim() || '[]';
  return JSON.parse(jsonStr);
};
