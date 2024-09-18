import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import HeaderMain from "../components/HeaderMain";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        setError("Ошибка при получении данных о продукте");
        console.error("Ошибка при получении данных о продукте:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (loading) return <div className="text-white">Загрузка...</div>;

  if (error) return <div className="text-white">{error}</div>;

  if (!product) return <div className="text-white">Продукт не найден</div>;

  return (
    <>
      <HeaderMain />
      <div className="p-4 bg-[#22222A] min-h-screen flex flex-col items-center">
        <div className="w-full max-w-2xl rounded-lg p-6">
          <img
            src={product.image}
            alt={product.nameProduct}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="text-white mt-28">
            <h1 className="text-3xl font-bold mb-4">{product.nameProduct}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">Общая стоимость:</span>
              <span className="text-2xl font-semibold">₸{product.price}</span>
            </div>
          </div>
        </div>
        <button className="bg-custom-gradient text-black px-14 py-6 mt-15 rounded-lg font-bold hover:bg-[#dba10b] transition duration-300">
          <img src="/Basket.svg" className="inline w-6 mr-2" />
          Добавить в корзину
        </button>
        <button
          onClick={() => navigate("/home")}
          className="bg-custom-gradient flex items-center px-14 py-6 mt-4 font-bold rounded-lg text-white gap-1"
        >
          Вернуться назад
          <img src="/CaretLeft.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
