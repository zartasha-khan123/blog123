// Import necessary dependencies
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BakeryShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Birch Log Cake",
      image: "/cardblog1.jpg",
      description: "A delicious birch log-shaped cake for all occasions.",
    },
    {
      id: 2,
      name: "Chocolate Gingerbread Cupcakes",
      image: "/cardblog2.jpg",
      description: "Tasty gingerbread cupcakes with a chocolate twist.",
    },
    {
      id: 3,
      name: "Hot Chocolate Cake",
      image: "/cardblog3.jpg",
      description: "Rich chocolate cake inspired by your favorite hot drink.",
    },
  ];

  return (
    // Main Container
    <div className="py-16 px-8 bg-black text-white pt-52 " id="products">
      {/* Heading Section */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Delicious Products</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our variety of handcrafted cakes and cupcakes made with love and the finest ingredients.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 hover:scale-105 transition-transform">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              {/* <Link href={`/products/${product.id}`}> */}
                <Link href={`/blogcards/${product.id}}`} className="text-yellow-500 hover:underline">View Details</Link>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>
</div>
     
  );
};

export default BakeryShowcase;
