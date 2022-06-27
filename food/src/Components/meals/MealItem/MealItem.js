import { useContext } from "react";
import axios from "axios";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import { useState } from "react";

const API_URL = "https://api.shilpimultiplex.com/api/Cart/AddToCart/";

const MealItem = (props) => {

    const [uniqueUser, setUniqueUser] = useState();
    const [productId, setProductId] = useState();
    const [qty, setQty] = useState();

  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });

    setUniqueUser(props.Uid);
    setProductId(props.id);
    setQty(amount);
    let item = {
      uniqueUser : 'USer',
      productId : props.id,
      qty : amount,
    };
    console.log("iterm", uniqueUser, productId, qty);
    axios.post(API_URL + props.Uid, item).then((result) => {
      console.log(result);
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <img src={props.image} alt="..." />
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
