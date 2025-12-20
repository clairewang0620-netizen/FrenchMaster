
/**
 * Standard Web Speech API implementation.
 * Provides stable pronunciation for Desktop and iOS.
 */

let currentUtterance: SpeechSynthesisUtterance | null = null;

export const speak = (text: string, onEnd?: () => void) => {
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  utterance.onend = () => {
    if (onEnd) onEnd();
    currentUtterance = null;
  };

  utterance.onerror = (event) => {
    console.error('SpeechSynthesis error:', event);
    if (onEnd) onEnd();
    currentUtterance = null;
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
};

export const pauseSpeech = () => {
  window.speechSynthesis.pause();
};

export const resumeSpeech = () => {
  window.speechSynthesis.resume();
};

export const stopSpeech = () => {
  window.speechSynthesis.cancel();
  currentUtterance = null;
};
