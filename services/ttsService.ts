
/**
 * Standard Web Speech API implementation.
 * Optimized for natural intonation, neural voice selection, and site-wide mutual exclusion.
 */

let currentNativeAudio: HTMLAudioElement | null = null;

/**
 * Finds the highest quality French voice available on the device.
 * Prioritizes neural and premium voices for realistic liaisons and intonation.
 */
const getFrenchVoice = (): SpeechSynthesisVoice | null => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Prioritize Neural/Premium/Enhanced voices which sound like humans, not robots
  const frVoices = voices.filter(v => v.lang.replace('_', '-') === 'fr-FR');
  
  let bestVoice = frVoices.find(v => 
    v.name.toLowerCase().includes('neural') || 
    v.name.toLowerCase().includes('premium') || 
    v.name.toLowerCase().includes('enhanced') ||
    v.name.toLowerCase().includes('google')
  );
  
  if (!bestVoice) bestVoice = frVoices[0];
  if (!bestVoice) bestVoice = voices.find(v => v.lang.toLowerCase().startsWith('fr'));
  
  return bestVoice || null;
};

/**
 * Site-wide stop function for ALL audio sources (TTS and Native Audio).
 */
export const stopAllAudio = () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  if (currentNativeAudio) {
    currentNativeAudio.pause();
    currentNativeAudio.currentTime = 0;
    currentNativeAudio = null;
  }
};

/**
 * Play a native audio URL (e.g., user recording) with mutual exclusion.
 */
export const playNativeAudio = (url: string) => {
  stopAllAudio();
  const audio = new Audio(url);
  currentNativeAudio = audio;
  audio.play().catch(e => console.warn('Audio playback prevented:', e));
};

/**
 * Natural TTS speech function with immediate cancellation of existing audio.
 */
export const speak = (text: string, rate: number = 1.0, onEnd?: () => void) => {
  if (!window.speechSynthesis) {
    if (onEnd) onEnd();
    return;
  }

  try {
    // FORCE STOP any current audio activity immediately
    stopAllAudio();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    
    const voice = getFrenchVoice();
    if (voice) {
      utterance.voice = voice;
    }

    // Parameters for natural, non-robotic flow
    utterance.rate = rate; 
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.error('TTS Runtime Error:', e);
    if (onEnd) onEnd();
  }
};

export const pauseSpeech = () => {
  if (window.speechSynthesis) window.speechSynthesis.pause();
};

export const resumeSpeech = () => {
  if (window.speechSynthesis) window.speechSynthesis.resume();
};

// Keeping stopSpeech for backward compatibility, mapping to stopAllAudio
export const stopSpeech = stopAllAudio;
