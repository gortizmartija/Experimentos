import { useEffect, useState } from 'react';
import { getRandomFact } from '../services/facts';

export function useFact() {
  const [fact, setFact] = useState();

  const generateFact = () => {
    getRandomFact().then(setFact);
  };

  useEffect(() => {
    generateFact();
  }, []);

  return { fact, generateFact };
}
