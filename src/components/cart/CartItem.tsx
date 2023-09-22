import "./CartItem.css";
import { MyContext } from "../../API/Context";
import { useContext } from "react";
import { ProductsAPI } from "../../API/ProductsAPI";

const CartItem = () => {
  const context = useContext(MyContext);
  const BagItem = context?.bagList.map((element) => (
    <div className="cart-item">
      <img src={ProductsAPI[element].img} />
      <div className="cart-item__content">
        <div>
          <p>{ProductsAPI[element].species}</p>
          <p>Chai Tea / 50g</p>
          <button className="cart-item__content-button">REMOVE</button>
          <p className="cart-item__content-span">
            ${ProductsAPI[element].price}
          </p>
        </div>
        <div className="cart-item__content-actions">
          <button className="cart-item__content-actions-button">-</button>
          <p>1</p>
          <button className="cart-item__content-actions-button">+</button>
        </div>
      </div>
    </div>
  ));
  return BagItem ? BagItem.length : <div>Sorry</div>;
};

export default CartItem;
