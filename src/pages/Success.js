import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div>
      <h1 className="mar">Gracias por tu compra</h1>
      <Link to={"/shop"}>
        <p className="cRed">seguir comprando</p>
      </Link>
    </div>
  );
};

export default Success;
