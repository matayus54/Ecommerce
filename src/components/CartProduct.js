import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCartProductThunk } from "../redux/actions";

const CartProduct = ({ prodObj }) => {
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (deleteId) {
      dispatch(deleteCartProductThunk(deleteId));
    }
  }, [dispatch, deleteId]);

  return (
    <div className="cColumns cColumns5L">
      <button className="boton mar3" onClick={() => setDeleteId(prodObj.id)}>
        X
      </button>
      <img
        className="image10 b-radius-S"
        src={prodObj.product.images[0].url}
        alt=""
      />
      <h1>{prodObj.product.name}</h1>
      <h3>Cantidad: {prodObj.quantity} </h3>
      <h3>Total: ${prodObj.product.price * prodObj.quantity}</h3>
    </div>
  );
};

export default CartProduct;
