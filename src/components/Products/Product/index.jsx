import { useDispatch, useSelector } from "react-redux";
import style from "./product.module.css";

function Product({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const isAvailable = product.left === 0;
  const onCart = cartItems.find((element) => product.id === element.productId);

  function handleAdd() {
    dispatch({
      type: "add",
      payload: { id: cartItems.length + 1, productId: product.id, amount: 1 },
    });
  }

  return (
    <>
      <div className={style.product}>
        <div className={style.inner}>
          <div className={style.image}>
            <img alt="" src={product.image}></img>
          </div>
          <div className={style.price}>
            <h4>
              {product.discount !== ""
                ? (product.price * (100 - product.discount)) / 100
                : ""}{" "}
              ₽
            </h4>
            <strike>{product.discount ? product.price + " ₽" : ""}</strike>
          </div>
          <div className={style.name}>{product.name}</div>
          <button
            disabled={isAvailable || onCart}
            onClick={handleAdd}
            className={isAvailable ? style.noBuy : style.buy}
          >
            {(isAvailable ? "Нет в наличии" : "uuu") && (onCart ? 'В корзине' : 'Купить')}
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
