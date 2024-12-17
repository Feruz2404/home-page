import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import url1 from "@/assets/images/November_outfits.png";
import url2 from "@/assets/images/Cashmere_set.png";
import url3 from "@/assets/images/The_new_nordic.png";
import url4 from "@/assets/images/The_leather.png";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "November Outfit",
    url: url1,
    collection: "Collection",
  },
  {
    id: 2,
    title: "Cashmere Set",
    url: url2,
    collection: "Collections",
  },
  {
    id: 3,
    title: "The New Nordic",
    url: url3,
    collection: "Collections",
  },
  {
    id: 4,
    title: "The Leather",
    url: url4,
    collection: "Collections",
  },
];

const Collection = () => {
  return (
    <div className="py-12 container grid grid-cols-2 gap-6">
      {data.map((item) => (
        <div key={item.id} className="h-[664px] border relative">
          <img src={item.url} className="absolute w-full h-full" alt="" />
          <div className="absolute left-12 bottom-12 text-white">
            <p className="text-[34px] font-medium mb-3">November Outfit</p>
            <Link
              className="flex gap-1 items-center border-b w-[100px]"
              to={"/"}
            >
              <span className="font-medium">{item.collection}</span>
              <IoArrowForwardOutline />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
