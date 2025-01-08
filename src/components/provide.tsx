// Import necessary dependencies
import React from "react";
import Image from "next/image";

const BakeryFeatures = () => {
  return (
    <div className="bg-black text-white py-16 px-8 " id="provide">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What we provide in our product?</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our bakery and handcrafted pastries are of the highest quality. Come and enjoy our organic bakery items.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Image src="/pro1.svg" alt="Super yummy" className="h-16 w-16"
            width={16}
            height={16}></Image>
          </div>
          <h3 className="text-xl font-semibold mb-2">Super yummy</h3>
          <p>Our bakery and handcrafted pastries are of the highest quality. Come and enjoy.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Image src="/pro2.svg" alt="Fresh product" className="h-16 w-16"  width={16}
            height={16}></Image>
          </div>
          <h3 className="text-xl font-semibold mb-2">Fresh product</h3>
          <p>Our bakery and handcrafted pastries are of the highest quality. Come and enjoy.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Image src="/pro3.svg" alt="No preservatives" className="h-16 w-16" width={16}
            height={16}></Image>
          </div>
          <h3 className="text-xl font-semibold mb-2">No preservatives</h3>
          <p>Our bakery and handcrafted pastries are of the highest quality. Come and enjoy.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Image src="/pro4.svg" alt="100% Organic" className="h-16 w-16"  width={16}
            height={16}></Image>
          </div>
          <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
          <p>Our bakery and handcrafted pastries are of the highest quality. Come and enjoy.</p>
        </div>
      </div>
    </div>
  );
};

export default BakeryFeatures;
