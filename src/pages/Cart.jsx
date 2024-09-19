import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderMain from "../components/HeaderMain";

const Cart = () => {
  



  return (
    <>
      <HeaderMain />
      <div className="p-4 bg-[#22222A] min-h-screen flex flex-col items-center">
        <div className="w-full max-w-3xl bg-[#333] rounded-lg p-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-[#444] rounded-lg p-4 mb-4 flex items-center"
              >
                <img
                  src={product.image}
                  alt={product.nameProduct}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div className="flex-1 text-white">
                  <h2 className="text-xl font-bold mb-2">
                   {product.nameProduct}
                  </h2>
                  <p className="text-lg mb-2">₸{product.price}</p>
                  <div className="flex items-center mb-2">
                    <button
                      className="bg-custom-gradient text-black px-4 py-2 rounded-lg mr-2"
                      onClick={() => {
                        /* Handle decrement */
                      }}
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">
                      {product.quantity}
                    </span>
                    <button
                      className="bg-custom-gradient text-black px-4 py-2 rounded-lg ml-2"
                      onClick={() => {
                        /* Handle increment */
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2"
                    onClick={() => {
                      /* Handle remove */
                    }}
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
              onClick={() => navigate("/checkout")}
              className="bg-custom-gradient text-black px-8 py-4 rounded-lg font-bold hover:bg-[#dba10b] transition duration-300"
            >
              Перейти к оформлению
            </button>
            <button
              onClick={() => navigate("/home")}
              className="bg-custom-gradient text-white px-8 py-4 rounded-lg font-bold hover:bg-[#dba10b] transition duration-300"
            >
              Вернуться назад
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
