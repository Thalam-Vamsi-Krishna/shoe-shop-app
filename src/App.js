import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddShoe from "./components/Shoes/AddShoe";
import ShoeList from "./components/Shoes/ShoeList";
import Header from "./components/Layout/Header";
import CartProvider from "./components/Store/CartProvider";

const App = () => {
  const [shoes, setShoes] = useState([]);
  const addtShoeHandler = (shoe) => {
    setShoes((prevShoes) => [...prevShoes, shoe]);
  };
  return (
    <CartProvider>
      <Header />
      <AddShoe onAddShoe={addtShoeHandler} />
      <ShoeList shoes={shoes} />
    </CartProvider>
  );
};

export default App;
