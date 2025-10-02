import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { FiltersProvider } from './context/FilterProvider.jsx';
import { CartProvider } from './context/CartProvider.jsx';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </CartProvider>
);
