import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const ImageGallery = () => {
  const products = useLoaderData();
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get("https://fakestoreapi.com/products");
    //       setProducts(response.data);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };

    //   fetchData();
    // }, []);

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 text-center font-mono bold">
        Product Image Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="border  p-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

export const productInfoLoader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
}