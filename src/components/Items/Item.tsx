import { useContext } from "react";
import { MyContext } from "../../API/Context";
import { ProductsAPI } from "../../API/ProductsAPI";
import { useEffect } from "react";
import "./Item.css";
interface teas {
  index: number;
  img: string;
  price: number;
  servingSize: number;
  species: string;
}

const Item = () => {
  const context = useContext(MyContext);
  const addToBagHandler = (index: number) => {
    if (!context?.bagList.includes(index)) {
      context?.setBagList([...context?.bagList, index]);
    }
  };
  const items = ProductsAPI.map((e: teas, idx: number) => (
    <div className="item-container__tea" key={idx}>
      <div className="img-wrapper">
        <div className="img-wrapper__details">
          <button className="img-wrapper__details-button">
            <p className="img-wrapper__details-button-details">details</p>
          </button>
          <button className="img-wrapper__details-button">
            <p
              className="img-wrapper__details-button-details"
              onClick={() => {
                addToBagHandler(e.index);
              }}
            >
              Add To Bag
            </p>
          </button>
        </div>

        <img className="item-container__tea-img" src={e.img} />
      </div>
      <p className="item-container__tea-name">{e.species}</p>
      <div className="price-container">
        <p className="item-container__tea-price">${e.price}</p>
        <p className="item-container__tea-serving">/{e.servingSize}g</p>
      </div>
    </div>
  ));

  return <div className="item-container">{items}</div>;
};

export default Item;
