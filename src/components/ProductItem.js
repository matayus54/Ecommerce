import { useState } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ prodObj }) => {
  let [hovering, setIsHovering] = useState(false);
  const hover = (e) => {
    setIsHovering(!hovering);
  };
  return (
    <Link to={`/shop/${prodObj.id}`} className="cCeleste mar">
      <img
        style={{ height: "15vw" }}
        className={`b-radius-S `}
        src={prodObj.images[!hovering ? 0 : 1].url}
        alt=""
        onMouseOver={hover}
        onMouseOut={hover}
      />
      <div>{prodObj.name}</div>
      <div>{prodObj.price}</div>
    </Link>
  );
};

export default ProductItem;
