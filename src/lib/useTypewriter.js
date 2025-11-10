import { useState, useEffect } from 'react';

export function useTypewriter({ text, speed = 100, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(typingInterval);
        }
      }, speed);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
}
