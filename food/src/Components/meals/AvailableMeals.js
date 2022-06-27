import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import axios from "axios";
import React, { useState } from "react";

const API_URL = "https://api.shilpimultiplex.com/api/Product/Index/";

const AvailableMeals = (props) => {
  const [data, setData] = useState([]);
  axios.get(API_URL + props.Uid).then(function (result) {
    setData(result.data);
    //console.log(data);
  });

  const mealsList = data.map((meal) => (
    <>
    <br />
        <Card>
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.productName}
      image = {meal.imagePath}
      description={meal.desc}
      price={meal.price}
    />
    </Card>
    <br />
    </>

  ));

  return (
    <section className={classes.meals}>
      {mealsList}
    </section>
  );
};

export default AvailableMeals;
