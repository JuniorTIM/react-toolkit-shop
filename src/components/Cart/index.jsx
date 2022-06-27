import React, { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Cart = () => {
  const [opened, setOpened] = useState(false);
  const cartItems = useSelector((state) => state.cartItems);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch()

  function handleCloseCart() {
    setOpened(false);
  }

  function handleDelete (id) {
    dispatch({
      type: 'delete',
      payload: id
    })
  }

  function handlePlus (id, left) {
    if (left > 0) {
    dispatch({
      type: 'plus',
      payload: id
    })
  }
  }

  function handleMinus (id, amount) {
    if (amount > 0) {
    dispatch({
      type: 'minus',
      payload: id
    })
  }
  }

  return (
    <>
      <div className={styles.cartButton} onClick={() => setOpened(true)}>
        <img src={bagIcon} alt="" />
        <span>{cartItems.length}</span>
      </div>
      {opened === true && (
        <div className={styles.openCart}>
          <tbody className={styles.table}>
            <tr className={styles.headerTr}>
              <td>#</td>
              <td>Товар</td>
              <td>Остаток</td>
              <td>Кол-во</td>
              <td className={styles.tdBtn}>
                <button onClick={handleCloseCart} className={styles.closeCart}>
                  закрыть
                </button>
              </td>
            </tr>
            {cartItems.map((element) => {
              return products.map((product, index) => {
                if (product.id === element.productId) {
                  return (
                    <tr>
                      <td>{element.id}</td>
                      <td className={styles.nameTd}>
                        <img
                          className={styles.productImg}
                          alt=""
                          src={product.image}
                        ></img>
                        <div className={styles.productName}>{product.name}</div>
                      </td>
                      <td className={styles.leftTd}>{product.left}</td>
                      <button onClick={() => handlePlus(product.id, product.left)} className={styles.plus}>+</button>
                      <td className={styles.amount}>{element.amount}</td>
                      <button onClick={() => handleMinus(product.id, element.amount)} className={styles.minus}>-</button>
                      <button onClick={() => handleDelete(element.productId)} className={styles.delBtn}>x</button>
                    </tr>
                  );
                }
              });
            })}
          </tbody>
        </div>
      )}
    </>
  );
};

export default Cart;
