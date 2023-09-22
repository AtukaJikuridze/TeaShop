import Item from "../../components/Items/Item";
import Product from "./Product";
import { ProductsAPI } from "../../API/ProductsAPI";

export default function SuggestProducts() {
  const RandomArray = () => {
    let randomArray: any[] = [];
    for (let index = 0; index < 3; index++) {
      let randomNumber = Math.floor(Math.random() * ProductsAPI.length);
      if (randomArray.includes(randomNumber)) index = index - 1;
      else {
        randomArray.push(randomNumber);
      }
    }
    return randomArray;
  };

  return (
    <div className="suggest-products">
      <h1>You May Also Like</h1>
      <div className="suggest-products-flex">
        {RandomArray().map((e: number) => (
          <Product
            image={ProductsAPI[e].img}
            species={ProductsAPI[e].species}
            price={ProductsAPI[e].price}
            servingSize={ProductsAPI[e].servingSize}
          />
        ))}
      </div>
    </div>
  );
}
