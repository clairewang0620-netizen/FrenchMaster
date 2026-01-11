/**
 * Standard Web Speech API implementation.
 * Optimized for natural intonation, neural voice selection, and forced completion.
 */

let heartbeatTimer: number | null = null;

/**
 * Finds the highest quality French voice available on the device.
 * Prioritizes fr-FR native voices and high-quality neural engines.
 */
const getFrenchVoice = (): SpeechSynthesisVoice | null => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Strictly filter for French (France)
  const frVoices = voices.filter(v => v.lang.toLowerCase().replace('_', '-') === 'fr-fr');
  
  // Scoring priority: Neural > Premium > Enhanced > Google > First French
  let bestVoice = frVoices.find(v => 
    v.name.toLowerCase().includes('neural') || 
    v.name.toLowerCase().includes('premium') || 
    v.name.toLowerCase().includes('enhanced')
  );
  
  if (!bestVoice) {
    bestVoice = frVoices.find(v => v.name.toLowerCase().includes('google'));
  }
  
  // Fallback to any fr-FR voice, then any French voice
  if (!bestVoice) bestVoice = frVoices[0];
  if (!bestVoice) bestVoice = voices.find(v => v.lang.toLowerCase().startsWith('fr'));
  
  return bestVoice || null;
};

/**
 * Site-wide stop function for ALL speech synthesis.
 */
export const stopAllAudio = () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer);
      heartbeatTimer = null;
    }
  }
};

/**
 * Natural TTS speech function.
 * MANDATORY: Enforces fr-FR and provides high-quality native prosody.
 * FIXED: Added "Heartbeat" mechanism to prevent long text cut-off.
 */
export const speak = (text: string, rate: number = 1.0, onEnd?: () => void) => {
  if (!window.speechSynthesis) {
    if (onEnd) onEnd();
    return;
  }

  try {
    // 1. Clear existing instances for global mutual exclusion
    stopAllAudio();

    // 2. Setup Utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // MANDATORY PARAMETER: FORCED fr-FR
    utterance.lang = 'fr-FR'; 
    
    const voice = getFrenchVoice();
    if (voice) {
      utterance.voice = voice;
    }

    // Performance Tuning
    utterance.rate = rate; 
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // --- HEARTBEAT FIX FOR LONG TEXT ---
    // Chrome and some mobile browsers stop speaking after ~15s. 
    // This keep-alive ensures the utterance completes 100% of the text.
    heartbeatTimer = window.setInterval(() => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 10000);

    // Callbacks
    utterance.onend = () => { 
      if (heartbeatTimer) {
        clearInterval(heartbeatTimer);
        heartbeatTimer = null;
      }
      if (onEnd) onEnd(); 
    };

    utterance.onerror = (e) => { 
      if (heartbeatTimer) {
        clearInterval(heartbeatTimer);
        heartbeatTimer = null;
      }
      console.warn('TTS Error:', e);
      if (onEnd) onEnd(); 
    };

    // 3. Fire
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

export const stopSpeech = stopAllAudio;