import { useEffect, useState } from "react";
import "./App.css";
import Gallery from "./components/gallery/Gallery";
import data from "../data.json";
import Cart from "./components/cart/Cart";
import OrderModal from "./components/order-modal/OrderModal";
import { useCart } from "./hooks/useCart";
import Modal from "./components/modal/Modal";

function App() {
  const { isModalOpen, products } = useCart();

  return (
    <main>
      {products.length > 0 ? (
        <Gallery products={products} />
      ) : (
        <h3>There are no products available</h3>
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
