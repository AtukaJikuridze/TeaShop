import "./Cart.css";
import CartItem from "./CartItem";

interface CartProps {
  style?: React.CSSProperties;
  onClose?: () => void;
}

const Cart: React.FC<CartProps> = ({ style, onClose }) => {
  return (
    <div onClick={onClose} className="cart-container" style={style}>
      <div
        //this makes sure not to close cart modal on clicking cart
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="cart-container__cart"
      >
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div>
          <h1 className="my-bag">My Bag</h1>
        </div>
        <div className="items-wrapper">
          <CartItem />
        </div>
        <section className="amount-section1">
          <p className="amount-section1__subtotal">
            subtotal
            <span className="amount-section1__subtotal-amount">$3.90</span>
          </p>
          <p className="amount-section1__fee">
            delivery<span className="amount-section1__fee-amount">$3.95</span>
          </p>
        </section>
        <section className="amount-section2">
          <p className="amount-section2__total">
            total<span>$7.85</span>
          </p>
          <button className="amount-section2__button">purchase</button>
        </section>
      </div>
    </div>
  );
};

export default Cart;
