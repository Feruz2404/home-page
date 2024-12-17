import React, { useEffect, useState } from "react";
import { request } from "@/api/index";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";

const Detail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await request.get(`/product/get/${id}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[80vh] bg-gray-100">
        <p className="text-lg font-medium text-gray-700 animate-pulse">
          Ma'lumot yuklanmoqda...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[80vh] bg-gray-50">
        <p className="text-red-500 text-lg font-semibold">
          {error.message || "Xatolik yuz berdi!"}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto min-h-screen py-10 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-center bg-white p-5">
          <img
            src={data?.image}
            alt={data?.title || "Mahsulot rasmi"}
            className="w-full max-w-[500px] h-auto object-contain rounded-lg"
          />
        </div>
        <div className="p-5">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {data?.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">{data?.description}</p>
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md shadow hover:bg-blue-700 transition duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
