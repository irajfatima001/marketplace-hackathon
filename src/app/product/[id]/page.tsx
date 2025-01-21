import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// const products = [
//   {
//     id: 1,
//     name: "The Dandy Chair",
//     price: "£250",
//     description:
//       "A timeless design, with premium materials features as one of our most popular and iconic pieces. The Dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
//     image: "/c1.png",
//     dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
//     features: [
//       "Premium material",
//       "Handmade upholstery",
//       "Quality timeless classic",
//     ],
//   },
//   {
//     id: 2,
//     name: "Rustic Vase Set",
//     price: "£155",
//     description:
//       "A beautifully crafted rustic vase set that brings a touch of nature into your home. Perfect for both modern and traditional interiors.",
//     image: "/c2.png",
//     dimensions: { height: "30cm", width: "20cm", depth: "20cm" },
//     features: ["Rustic charm", "Handcrafted design", "Durable materials"],
//   },
//   {
//     id: 3,
//     name: "The Silky Vase",
//     price: "£125",
//     description:
//       "A sleek and stylish vase with a silky smooth finish. An elegant addition to any decor theme.",
//     image: "/c3.png",
//     dimensions: { height: "25cm", width: "15cm", depth: "15cm" },
//     features: ["Elegant design", "Smooth finish", "Premium craftsmanship"],
//   },
//   {
//     id: 4,
//     name: "The Lucy Lamp",
//     price: "£399",
//     description:
//       "An iconic lamp design that combines modern aesthetics with classic functionality. Brighten up your space with the Lucy Lamp.",
//     image: "/c4.png",
//     dimensions: { height: "60cm", width: "25cm", depth: "25cm" },
//     features: ["Energy-efficient", "Modern design", "Adjustable brightness"],
//   },
//   {
//     id: 5,
//     name: "The Dandy Chair",
//     price: "£250",
//     description:
//       "A timeless design, with premium materials features as one of our most popular and iconic pieces. The Dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
//     image: "/l1.png",
//     dimensions: { height: "110cm", width: "75cm", depth: "50cm" },
//     features: [
//       "Premium material",
//       "Handmade upholstery",
//       "Quality timeless classic",
//     ],
//   },
//   {
//     id: 6,
//     name: "Rustic Vase Set",
//     price: "£155",
//     description:
//       "A beautifully crafted rustic vase set that brings a touch of nature into your home. Perfect for both modern and traditional interiors.",
//     image: "/l2.png",
//     dimensions: { height: "30cm", width: "20cm", depth: "20cm" },
//     features: ["Rustic charm", "Handcrafted design", "Durable materials"],
//   },
//   {
//     id: 7,
//     name: "The Silky Vase",
//     price: "£125",
//     description:
//       "A sleek and stylish vase with a silky smooth finish. An elegant addition to any decor theme.",
//     image: "/l3.png",
//     dimensions: { height: "25cm", width: "15cm", depth: "15cm" },
//     features: ["Elegant design", "Smooth finish", "Premium craftsmanship"],
//   },
//   {
//     id: 8,
//     name: "The Lucy Lamp",
//     price: "£399",
//     description:
//       "An iconic lamp design that combines modern aesthetics with classic functionality. Brighten up your space with the Lucy Lamp.",
//     image: "/l4.png",
//     dimensions: { height: "60cm", width: "25cm", depth: "25cm" },
//     features: ["Energy-efficient", "Modern design", "Adjustable brightness"],
//   },
//   {
//     id: 9,
//     name: "Outdoor Patio Set",
//     price: "£650",
//     description:
//       "A durable and stylish patio set that includes a table and chairs, perfect for outdoor relaxation and gatherings.",
//     image: "/patio.png",
//     dimensions: { height: "75cm", width: "180cm", depth: "90cm" },
//     features: ["Weather-resistant", "Stylish design", "Comfortable seating"],
//   },
//   {
//     id: 10,
//     name: "Ceramic Dinnerware Set",
//     price: "£220",
//     description:
//       "A premium ceramic dinnerware set for elegant dining. Includes plates, bowls, and serving dishes.",
//     image: "/dinnerware.png",
//     dimensions: { height: "Varies", width: "Varies", depth: "Varies" },
//     features: ["Microwave-safe", "Elegant finish", "Durable material"],
//   },
//   {
//     id: 11,
//     name: "Minimalist Floor Lamp",
//     price: "£199",
//     description:
//       "A modern minimalist floor lamp that enhances any room's ambiance with soft lighting and a sleek design.",
//     image: "/floorlamp.png",
//     dimensions: { height: "160cm", width: "30cm", depth: "30cm" },
//     features: ["Soft lighting", "Minimalist design", "Energy-efficient"],
//   },
//   {
//     id: 12,
//     name: "Luxury Bed Frame",
//     price: "£1200",
//     description:
//       "A luxurious bed frame with a modern design and premium materials. Offers ultimate comfort and style.",
//     image: "/bedframe.png",
//     dimensions: { height: "120cm", width: "220cm", depth: "160cm" },
//     features: ["Premium materials", "Modern design", "Sturdy construction"],
//   },
// ];

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  // Fetch product details based on the productCardId
  const product = await client.fetch(
    `
      *[_type == 'productPage'][0].sections[0].productCards[productCardId == $id][0]{
        productCardHeading,
        productCardPrice,
        'productCardImage': productCardImage.asset->url,
        description,
        dimensions,
        features
      }
    `,
    { id: params.id }
  );

  // const [wishlist, setWishlist] = useState([]);

  // const toggleWishlist = () => {
  //   if (wishlist.some(item => item.id === product.productCardId)) {
  //     setWishlist(wishlist.filter(item => item.id !== product.productCardId));
  //   } else {
  //     setWishlist([...wishlist, product]);
  //   }
  // };

  // const isInWishlist = wishlist.some(item => item.id === product.productCardId);

  // Handle case when product is not found
  if (!product) {
    return <div className="max-w-[1440px] mx-auto p-6">Product not found</div>;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={product.productCardImage}
            alt={product.productCardHeading}
            width={600}
            height={400}
            className="object-cover "
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">
            {product.productCardHeading}
          </h1>
          <p className="text-xl font-semibold text-[#2A254B] mb-6">
            £{product.productCardPrice}
          </p>
          {/* Description */}
          <h2 className="text-lg font-medium mb-2">Description</h2>
          <p className="text-gray-700 mb-6">
            {product.description || "No description available."}
          </p>
          {/* Features */}
          {product.features && (
            <>
              <h2 className="text-lg font-medium mb-2">Features</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                {product.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          {/* Dimensions */}
          {product.dimensions && (
            <>
              <h2 className="text-lg font-medium mb-2">Dimensions</h2>
              <div className="flex gap-6 mb-6">
                {product.dimensions.height && (
                  <div>
                    <p className="text-gray-600">Height</p>
                    <p className="font-medium">{product.dimensions.height}</p>
                  </div>
                )}
                {product.dimensions.width && (
                  <div>
                    <p className="text-gray-600">Width</p>
                    <p className="font-medium">{product.dimensions.width}</p>
                  </div>
                )}
                {product.dimensions.depth && (
                  <div>
                    <p className="text-gray-600">Depth</p>
                    <p className="font-medium">{product.dimensions.depth}</p>
                  </div>
                )}
              </div>
            </>
          )}
          {/* Quantity Selector */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <p className="text-gray-600">Amount:</p>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button className="px-3 py-1 text-gray-700">-</button>
                <p className="px-4">1</p>
                <button className="px-3 py-1 text-gray-700">+</button>
              </div>
            </div>
</div>
            {/* <button className="bg-[#2A254B] text-white px-6 py-2  hover:bg-[#1d1a36]">
              Add to Cart

            </button> */}
            <div className="mt-20 flex justify-between gap-4">
  {/* Add to Cart Button */}
  <Link
    href={{
      pathname: "/cart",
      query: {
        name: product.productCardHeading,
        price: product.productCardPrice,
        image: product.productCardImage,
        description: product.description || "No description available.",
      },
    }}
  >
    <button className="bg-[#2A254B] text-white px-8 py-2  hover:bg-[#1d1a36]">
      Add to Cart
    </button>
  </Link>

  {/* Add to Wishlist Button */}
  <Link
    href={{
      pathname: "/wishlist",
      query: {
        name: product.productCardHeading,
        price: product.productCardPrice,
        image: product.productCardImage,
        description: product.description || "No description available.",
      },
    }}
  >
    <button className="bg-[#2A254B] text-white px-8 py-2  hover:bg-[#1d1a36]">
      Add to Wishlist
    </button>
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}
