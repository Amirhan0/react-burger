import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="bg-[#22222A] p-4 rounded-lg shadow-lg flex flex-col justify-between">
              <img
                src={product.image}
                alt={product.nameProduct}
                className="w-full h-48 rounded-lg mb-4"
              />
              <div className="text-white flex flex-col flex-grow">
                <h1 className="text-xl font-bold mb-2">
                  {product.nameProduct}
                </h1>
                <p className="text-[#6A6A6E] mb-2 text-sm">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xl font-semibold">
                    ₸{product.price}
                  </span>
                  <span className="text-sm text-[#6A6A6E] font-semibold">
                    {product.weight}g
                  </span>
                  <div className="bg-custom-gradient rounded-full p-2">
                    <img src="/plus.svg" alt="" className="w-6" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
