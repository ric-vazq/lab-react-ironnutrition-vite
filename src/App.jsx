import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";

function App() {
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
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {foodsData.map((food) => {
        return <FoodBox food={food} key={food.id} deleteFood={deleteFood} />;
      })}

      <AddFoodForm addFood={addNewFood}/>
    </div>
  );
}

export default App;
