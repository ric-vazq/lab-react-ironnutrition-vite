import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Divider, Input, Button } from "antd";

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
    <form onSubmit={handleSubmit}>
      <Divider>Add a Food</Divider>

      <label htmlFor="">Name: </label>
      <Input type="text" name="name" value={name} onChange={handleNameInput} />

      <label htmlFor="">Image: </label>
      <Input
        type="text"
        name="image"
        value={image}
        onChange={handleImageInput}
      />

      <label htmlFor="">Calories: </label>
      <Input
        type="number"
        name="calories"
        value={calories}
        onChange={handleCaloriesInput}
      />

      <label htmlFor="">Servings: </label>
      <Input
        type="number"
        name="servings"
        value={servings}
        onChange={handleServingsInput}
      />

      <Button type="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;
