import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/cart/Cart";
import Collections from "./pages/Collections/Collections";

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <Collections />
      <Footer />
    </>
  );
}

export default App;
