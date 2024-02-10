
import foods from "../foods.json";
import FoodBox from "./FoodBox";
import { useState } from "react";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
  const [foodsData, setfoodsData] = useState(foods);

  const deleteFood = (id) => {
    let filtArray = foodsData.filter((food) => {
      return food.id !== id;
    });
    setfoodsData(filtArray);
  };

  const addNewFood = (newFood) => {
    const updatedFoodsData = [...foodsData, newFood];
    setfoodsData(updatedFoodsData);
  };

  return (
    <div>
      {foodsData.map((food) => {
        return <FoodBox food={food} key={food.id} deleteFood={deleteFood} />;
      })}

      <AddFoodForm addFood={addNewFood}/>
    </div>
  );
}

export default FoodList;
