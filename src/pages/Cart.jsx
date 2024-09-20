import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";

const Cart = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const selectProduct = localStorage.getItem("selectedProducts");

    if (selectProduct) {
      const parsedProducts = JSON.parse(selectProduct).map((product) => ({
        ...product,
        quantity: 1,
      }));
      setProducts(parsedProducts);
    }
  }, []);

  const handleIncreaseQuantity = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;
    setProducts(updatedProducts);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      setProducts(updatedProducts);
    }
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
  };

  return (
    <>
      <HeaderMain />
      <div className="p-4 bg-[#22222A] min-h-screen flex flex-col items-center">
        <div className="w-full max-w-3xl bg-[#333] rounded-lg p-6">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={index}
                className="bg-[#444] rounded-lg p-4 mb-4 flex items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div className="flex-1 text-white">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-lg mb-2">{product.price} ₸</p>
                  <div className="flex items-center mb-2">
                    <button
                      className="bg-custom-gradient text-black px-4 py-2 rounded-lg mr-2"
                      onClick={() => handleDecreaseQuantity(index)}
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">
                      {product.quantity}
                    </span>
                    <button
                      className="bg-custom-gradient text-black px-4 py-2 rounded-lg ml-2"
                      onClick={() => handleIncreaseQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-xl">Корзина пуста</p>
          )}
        </div>
        {products.length > 0 && (
          <div className="w-full max-w-3xl bg-[#333] rounded-lg p-6 mt-4">
            <div className="flex justify-between text-white text-xl font-bold">
              <span>Итого:</span>
              <span>
                ₸
                {products.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )}
              </span>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-custom-gradient text-black px-8 py-4 rounded-lg font-bold hover:bg-[#dba10b] transition duration-300"
                onClick={() => navigate("/checkout")}
              >
                Перейти к оформлению
              </button>
              <button
                className="bg-custom-gradient text-white px-8 py-4 rounded-lg font-bold hover:bg-[#dba10b] transition duration-300"
                onClick={() => navigate("/home")}
              >
                Вернуться назад
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
