import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/cart/Cart";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <Product />
      <Footer />
    </>
  );
}

export default App;
