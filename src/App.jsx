import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./components/gallery/Gallery";
import data from "../data.json";
import Cart from "./components/cart/Cart";
import OrderModal from "./components/order-modal/OrderModal";
import { useCart } from "./hooks/useCart";
import Modal from "./components/modal/Modal";

function App() {
  const [products, setProducts] = useState([]);
  const { isModalOpen } = useCart();

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
      {isModalOpen && (
        <Modal>
          <OrderModal />
        </Modal>
      )}
    </main>
  );
}

export default App;
