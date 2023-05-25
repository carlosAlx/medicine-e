import { AiOutlineClose } from "react-icons/ai";

export const CardItens = ({
  cover,
  name,
  price,
  qunatity,
  totalPrice,
}) => {
  return (
    <div className="cardList">
      <div className="cardContent">
        <div className="img">
          <img src={cover} alt="" />
          <button className="remove flexContent">
            <AiOutlineClose />
          </button>
        </div>
        <div className="details">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
