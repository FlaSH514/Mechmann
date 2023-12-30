import HomeHeroSection from "@/components/HomeHeroSection";
import Navbar from "../components/Navbar";
import Image from "next/image";
import ProductsHeading from "@/components/ProductsHeading";
import ProductCard from "@/components/ProductCard";
import products from "./products";
import BgVideo from "@/components/BgVideo";
import ViewAllCard from "@/components/ViewAllCard";
export default function Home() {
  const displayedProducts = products.slice(0, 7);
  return (
    <>
      <main className="">
        <Navbar />
        <BgVideo />
        <ProductsHeading />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-24">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.pid}
              pid={product.pid}
              pname={product.pname}
              pimage={product.pimage}
            />
          ))}
          {<ViewAllCard />}
        </div>
      </main>
    </>
  );
}
