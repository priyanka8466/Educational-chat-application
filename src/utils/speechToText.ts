// src/utils/speechToText.ts
export const startSpeechToText = (onResult: (text: string) => void) => {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      console.error('SpeechRecognition is not supported in this browser.');
      return;
    }
  
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
  
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };
  
    recognition.onerror = (event: Event) => {
      console.error('Speech recognition error:', event);
    };
  
    recognition.start();
  };