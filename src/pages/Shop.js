import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { setCategoriesThunk, setProductThunk } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();
  const productArr = useSelector((state) => state.products);
  const categoriesArr = useSelector((state) => state.categories);
  const navigate = useNavigate();

  const [currentCategory, setCurrentCategory] = useState("");

  const handleCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    dispatch(setProductThunk(currentCategory));
    dispatch(setCategoriesThunk());
  }, [dispatch, currentCategory]);

  const list = productArr.map((item) => (
    <ProductItem key={item.id} prodObj={item} />
  ));
  const categoriesList = categoriesArr.map((item) => (
    <button
      className={`boton mar`}
      key={item.id}
      onClick={() => setCurrentCategory(item.id)}
    >
      {item.name}
    </button>
  ));

  return (
    <div>
      <br />

      <img className="img30" src={`https://i.imgur.com/OtAadeF.jpg`} alt="" />
      <div className=" cFilas cColumns cColumns3R">
        <div>
          <button onClick={() => setCurrentCategory("")} className="boton">
            All Products
          </button>
          {categoriesList}
        </div>
        <div className="tA-right">
          <FontAwesomeIcon icon={faCartArrowDown} onClick={handleCart} />
        </div>
      </div>
      <div className="cColumns cColumns4 ">{list}</div>
    </div>
  );
};
export default Shop;
