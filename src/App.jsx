import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./components/gallery/Gallery";
import data from "../data.json";
import Cart from "./components/cart/Cart";
import OrderModal from "./components/order-modal/OrderModal";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const list = await data;
      setProducts(list);
    };
    getData();
  }, []);

  return (
    <main>
      {products.length > 0 ? (
        <Gallery products={products} />
      ) : (
        <h3>No hay productos disponibles</h3>
      )}
      <Cart />
      {<OrderModal />}
    </main>
  );
}

export default App;
