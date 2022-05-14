import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setInfoProductThunk, setProductThunk } from "../redux/actions";
import { addProductToCart } from "../services";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productInfo);
  const filterProducts = useSelector((state) => state.products);

  const [quantity, setQuantity] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [filtProd, setFiltProd] = useState([]);

  useEffect(() => {
    dispatch(setInfoProductThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (quantity && confirm) {
      addProductToCart({
        product: id,
        quantity: quantity,
      }).then((res) => {
        console.log(res);
        setConfirm(false);
      });
    }
  }, [quantity, confirm, id]);

  useEffect(() => {
    if (product.category) {
      dispatch(setProductThunk(product.category.id));
    }
    console.log(product);
  }, [dispatch, product]);

  const decrement = () => {
    setConfirm(false);
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const increment = () => {
    setConfirm(false);
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <div>
        <button className="boton" onClick={decrement}>
          -
        </button>
        {quantity}
        <button className="boton" onClick={increment}>
          +
        </button>
        <br />
        <button className="boton" onClick={() => setConfirm(true)}>
          Add To Cart
        </button>
      </div>
      <p>{product.description}</p>
      {product.images?.map((item) => (
        <img
          className="b-radius-S"
          src={item.url}
          width="200px"
          alt=""
          key={item.id}
        />
      ))}
      <h2>Productos Relacionados</h2>
      <div className="cColumns cColumns4 ">
        {filterProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <img
              className="b-radius-S"
              width="200px"
              src={product.images[0].url}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
