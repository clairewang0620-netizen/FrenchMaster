
/**
 * Standard Web Speech API implementation.
 * Provides stable pronunciation for Desktop and iOS.
 * Fixed: Explicitly binding French voice to prevent English fallback on mobile.
 */

let currentUtterance: SpeechSynthesisUtterance | null = null;

/**
 * Finds the best available French voice on the current device.
 */
const getFrenchVoice = (): SpeechSynthesisVoice | null => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Attempt to find exact match for France French
  let voice = voices.find(v => v.lang === 'fr-FR' || v.lang === 'fr_FR');
  
  // Fallback: search for any French language variant (e.g., fr-CA, fr-BE)
  if (!voice) {
    voice = voices.find(v => v.lang.toLowerCase().startsWith('fr'));
  }
  
  return voice || null;
};

export const speak = (text: string, onEnd?: () => void) => {
  if (!window.speechSynthesis) {
    console.warn('SpeechSynthesis is not supported on this device/browser.');
    if (onEnd) onEnd();
    return;
  }

  try {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Mandatory language setting
    utterance.lang = 'fr-FR';
    
    // Explicitly bind a French voice to prevent mobile OS from defaulting to English
    const frenchVoice = getFrenchVoice();
    if (frenchVoice) {
      utterance.voice = frenchVoice;
    }

    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      if (onEnd) onEnd();
      currentUtterance = null;
    };

    utterance.onerror = (event) => {
      // Log error but attempt to continue
      console.warn('SpeechSynthesis error:', event);
      if (onEnd) onEnd();
      currentUtterance = null;
    };

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.error('Speech Synthesis Runtime Error:', e);
    if (onEnd) onEnd();
  }
};

export const pauseSpeech = () => {
  if (window.speechSynthesis) window.speechSynthesis.pause();
};

export const resumeSpeech = () => {
  if (window.speechSynthesis) window.speechSynthesis.resume();
};

export const stopSpeech = () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
};
