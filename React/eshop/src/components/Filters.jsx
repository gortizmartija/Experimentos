import { useState } from 'react';
import './Filters.css';

export function Filters() {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Precio Minimo:</label>
        <input
          id='price'
          type='range'
          min='0'
          max='1000'
          value={minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>€{minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Categoria:</label>
        <select id='category'>
          <option value='all'>Todas</option>
          <option value='beauty'>Belleza</option>
          <option value='fragrances'>Fragancias</option>
        </select>
      </div>
    </section>
  );
}
