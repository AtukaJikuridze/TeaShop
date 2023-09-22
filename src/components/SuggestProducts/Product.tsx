import "./SuggestProducts.css";
interface productInterface {
  image: string;
  species: string;
  price: number;
  servingSize: number;
}
export default function Product({
  image,
  species,
  price,
  servingSize,
}: productInterface) {
  return (
    <div>
      <div className="item-container__tea">
        <div className="img-wrapper">
          <div className="img-wrapper__details">
            <button className="img-wrapper__details-button">
              <p className="img-wrapper__details-button-details">details</p>
            </button>
            <button className="img-wrapper__details-button">
              <p
                className="img-wrapper__details-button-details"
                onClick={() => {
                  //   addToBagHandler(e.index);
                }}
              >
                Add To Bag
              </p>
            </button>
          </div>

          <img className="item-container__tea-img" src={image} />
        </div>
        <p className="item-container__tea-name">{species}</p>
        <div className="price-container">
          <p className="item-container__tea-price">${price}</p>
          <p className="item-container__tea-serving">/{servingSize}g</p>
        </div>
      </div>
    </div>
  );
}
