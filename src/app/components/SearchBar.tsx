// "use client";

// import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";

// export default function Product({ products }) {
//   const [searchQuery, setSearchQuery] = useState(""); // Search input value
//   const [filteredProducts, setFilteredProducts] = useState(products); // Filtered product list

//   // Handle search input changes
//   const handleSearch = (event: { target: { value: string; }; }) => {
//     const value = event.target.value.toLowerCase();
//     setSearchQuery(value);

//     // Filter products based on search query
//     if (value) {
//       setFilteredProducts(
//         products.filter(
//           (product: { productCardHeading: string; productCardPrice: { toString: () => string; }; }) =>
//             product.productCardHeading.toLowerCase().includes(value) ||
//             product.productCardPrice.toString().toLowerCase().includes(value)
//         )
//       );
//     } else {
//       setFilteredProducts(products); // Reset to all products if the search bar is empty
//     }
//   };

//   return (
//     <div className="max-w-[1440px] bg-white text-[#2A254B]">
//       {/* Search Bar */}
//       <div className="px-6 py-4">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearch}
//           placeholder="Search for products..."
//           className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-gray-500"
//         />
//       </div>

//       {/* Product Cards */}
//       <div className="container max-w-full px-6 sm:px-12 md:px-16 lg:px-32 mb-6">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product: { productCardId: Key | null | undefined; productCardImage: string | StaticImport; productCardHeading: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined; productCardPrice: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; }) => (
//               <div
//                 key={product.productCardId}
//                 className="text-center w-full sm:mb-8 lg:mb-10"
//               >
//                 <Link href={`/product/${product.productCardId}`}>
//                   <div>
//                     <Image
//                       src={product.productCardImage}
//                       alt={product.productCardHeading}
//                       width={280}
//                       height={280}
//                       className="mb-4 mx-auto cursor-pointer"
//                     />
//                     <h3 className="text-lg text-start">
//                       {product.productCardHeading}
//                     </h3>
//                     <p className="text-[#2A254B] text-start">
//                       £{product.productCardPrice}
//                     </p>
//                   </div>
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 w-full col-span-4">
//               No products found.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Mock Products Data
// export async function getStaticProps() {
//   const products = await client.fetch(
//     `*[_type == 'productPage'][0].sections[0].productCards[]{
//         'productCardHeading': productCardHeading,
//         'productCardId': productCardId,
//         'productCardPrice': productCardPrice,
//         'productCardImage': productCardImage.asset->url
//       }`
//   );

//   return {
//     props: {
//       products,
//     },
//   };
// }

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { client } from "@/sanity/lib/client";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await client.fetch(`
        *[_type == 'productPage'][0].sections[0].productCards[]{
          'productCardHeading': productCardHeading,
          'productCardId': productCardId
        }
      `);
      setProducts(res || []);
    };
    fetchProducts();
  }, []);

  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const results = products.filter((product) =>
        product.productCardHeading.toLowerCase().includes(query)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="relative w-full max-w-[400px]">
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <IoSearch className="text-gray-500 text-xl mx-3" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for products..."
          className="w-full   focus:outline-none"
        />
      </div>
      {/* Dropdown for search results */}
      {filteredProducts.length > 0 && (
        <div className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full max-h-60 overflow-y-auto shadow-lg z-50">
          {filteredProducts.map((product) => (
            <Link
              href={`/product/${product.productCardId}`}
              key={product.productCardId}
            >
              <div className="p-2 hover:bg-gray-100 cursor-pointer">
                {product.productCardHeading}
              </div>
            </Link>
          ))}
        </div>
      )}
      {/* Show "No results found" if no matching product */}
      {searchQuery && filteredProducts.length === 0 && (
        <div className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full shadow-lg z-50">
          <div className="p-2 text-gray-500">No results found</div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

