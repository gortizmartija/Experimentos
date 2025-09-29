import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact';
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`;

function App() {
  const [fact, setFact] = useState();
  const [factError, setFactError] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT)
      .then((res) => {
        if (!res.ok) throw new Error('No se ha encontrado el fact');
        return res.json();
      })
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      })
      .catch((error) => {
        setFactError(error);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(' ')[0];

    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);
      });
  }, [fact]);

  return (
    <>
      <h1>Hola</h1>
      {factError && <p>{factError}</p>}

      {fact && <p>{fact}</p>}
      {image && (
        <img
          src={image}
          alt='{`Imagen sacada de la primera palabra ${fact}`}'
        />
      )}
    </>
  );
}

export default App;
