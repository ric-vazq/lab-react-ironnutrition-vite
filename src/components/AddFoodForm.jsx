import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddFoodForm(props) {
  const { addFood } = props;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings, id: uuidv4() };

    addFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(1);
  };

  return (
    <div>
      <h4>Add a Food</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />

        <label htmlFor="">Image: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        />

        <label htmlFor="">Calories: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label htmlFor="">Servings: </label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
