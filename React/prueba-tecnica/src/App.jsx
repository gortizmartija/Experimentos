import './App.css';
import { useCatImage, useFact } from './hooks/';

function App() {
  const { fact, generateFact } = useFact();
  const { imageURL } = useCatImage({ fact });

  return (
    <>
      <button onClick={generateFact}>Cambiar Fact</button>
      <h1>Random Cat Facts</h1>
      {fact && <p>{fact}</p>}
      {imageURL && (
        <img
          src={imageURL}
          alt='{`Imagen sacada de la primera palabra ${fact}`}'
        />
      )}
    </>
  );
}

export default App;
