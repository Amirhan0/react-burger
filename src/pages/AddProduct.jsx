import axios from "axios";
import { useState } from "react";
const AddProducts = () => {
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/categoryes", {
        categoryName: category,
        imageCategory: image
      });

      console.log("Категория добавлена", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
          <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add Category</button>
      </form>
    </>
  );
};

export default AddProducts;
