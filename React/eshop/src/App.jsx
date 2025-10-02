import { Products, Header, Footer, Cart } from './components/';
import { products as initialProducts } from './mocks/products.json';
import { useFilters } from './hooks/useFilter';

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
