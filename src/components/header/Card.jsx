import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { product } from "../../assets/data/data";
import { CardItens } from "./CardItens";

export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const closedCard = () => {
    setCardOpen(null);
  };
  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">2</span>
      </div>
      <div className={cardOpen ? "cardOpen" : "nooverlay"}></div>
      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Card</h2>
          <button onClick={closedCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {product.slice(0, 2).map((item) => (
          <CardItens
            key={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            qunatity={item.qunatity}
            totalPrice={item.totalPrice}
          />
        ))}
        <div className="chekOut">
          <button>
            <span>Priceed to Checkout</span>
            <label htmlFor="">$240</label>
          </button>
        </div>
      </div>
    </>
  );
};
