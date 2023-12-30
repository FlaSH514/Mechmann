import React from "react";
import products from "../app/products";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

interface ProductCardProps {
  pid: number;
  pname: string;
  pimage: string;
}
const ProductCard = ({ pid, pname, pimage }: ProductCardProps) => {
  return (
    <div className="relative mb-4 cursor-pointer transition duration-500 hover:scale-[1.025]">
      <div
        // style={{ boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)" }}
        className="w-fit px-2 text-center border-gray-200 border-[1px] hover:shadow-custom transition duration-500"
      >
        <div className="h-[18.665em] w-[14em] ">
          <div className="w-[15em] h-[15em] mb-2 relative transition-transform hover:scale-105">
            <Image fill alt="Product Image" className="" src={pimage} />
          </div>
          <p className="mb-2 font-medium hover:text-foreground text-sm">
            {pname}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
