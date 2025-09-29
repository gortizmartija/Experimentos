import { useEffect, useState } from 'react';

export function useCatImage({ fact }) {
  const [imageURL, setImageURl] = useState();

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(' ')[0];
    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImageURl(data.url);
      });
  }, [fact]);

  return { imageURL };
}
