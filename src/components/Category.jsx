import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get("http://localhost:3001/categoryes");
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);
  return (
    <div className="p-4">
      <div className="flex flex-col mb-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl text-white font-bold">Все товары</p>
          <p className="text-[#EDB216]">Посмотреть все</p>
        </div>
        <div className="flex overflow-x-auto space-x-2">
          {category.map((cat) => (
            <button className="flex items-center justify-start w-28 h-16 bg-[#333] rounded p-2" key={cat.id}>
              <img
                src={cat.imageCategory}
                alt="Бургеры"
                className="w-8 h-8 mr-2"
              />
              <span className="text-white">{cat.categoryName}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
