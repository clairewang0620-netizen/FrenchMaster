
// Keep a global reference to the current utterance to prevent garbage collection
// which is a common cause of 'onend' events not firing.
let currentUtterance: SpeechSynthesisUtterance | null = null;

export const speak = (text: string, onEnd?: () => void) => {
  if (!('speechSynthesis' in window)) {
    console.error('Speech synthesis not supported in this browser.');
    return;
  }

  // Always cancel any existing speech before starting a new one 
  // to ensure the internal queue is clean.
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.9;
  utterance.pitch = 1.0;

  // Track the utterance globally
  currentUtterance = utterance;

  const handleEnd = () => {
    if (currentUtterance === utterance) {
      currentUtterance = null;
    }
    if (onEnd) onEnd();
  };

  utterance.onend = handleEnd;

  // Improved error logging to catch specific error codes (interrupted, canceled, etc.)
  utterance.onerror = (event) => {
    // 'interrupted' and 'canceled' are often normal behaviors when user stops/skips
    if (event.error !== 'interrupted' && event.error !== 'canceled') {
      console.error(`SpeechSynthesisUtterance error: ${event.error}`, event);
    }
    handleEnd();
  };

  const setVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    // Prioritize high-quality natural French voices
    const frVoice = voices.find(v => v.lang === 'fr-FR' && (v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Natural'))) || 
                    voices.find(v => v.lang === 'fr-FR') || 
                    voices.find(v => v.lang.startsWith('fr-')) || 
                    voices[0];
    
    if (frVoice) {
      utterance.voice = frVoice;
    }
  };

  // Wait for voices to be loaded if necessary
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      setVoice();
      window.speechSynthesis.speak(utterance);
    };
  } else {
    setVoice();
    window.speechSynthesis.speak(utterance);
  }
};

export const pauseSpeech = () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
  }
};

export const resumeSpeech = () => {
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
};

export const stopSpeech = () => {
  window.speechSynthesis.cancel();
  currentUtterance = null;
};
