// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";

// import { IoMdArrowDropdown } from "react-icons/io";

// export default async function Product() {
//   const products = [
//     {
//       id: 1,
//       name: "The Dandy chair",
//       price: "£250",
//       image: "/c1.png",
//     },
//     {
//       id: 2,
//       name: "Rustic Vase Set",
//       price: "£155",
//       image: "/c2.png",
//     },
//     {
//       id: 3,
//       name: "The Silky Vase",
//       price: "£125",
//       image: "/c3.png",
//     },
//     {
//       id: 4,
//       name: "The Lucy Lamp",
//       price: "£399",
//       image: "/c4.png",
//     },
//     {
//       id: 5,
//       name: "The Dandy chair",
//       price: "£250",
//       image: "/l1.png",
//     },
//     {
//       id: 6,
//       name: "Rustic Vase Set",
//       price: "£155",
//       image: "/l2.png",
//     },
//     {
//       id: 7,
//       name: "The Silky Vase",
//       price: "£125",
//       image: "/l3.png",
//     },
//     {
//       id: 8,
//       name: "The Lucy Lamp",
//       price: "£399",
//       image: "/l4.png",
//     },
//     {
//       id: 9,
//       name: "The Dandy chair",
//       price: "£250",
//       image: "/c1.png",
//     },
//     {
//       id: 10,
//       name: "Rustic Vase Set",
//       price: "£155",
//       image: "/c2.png",
//     },
//     {
//       id: 11,
//       name: "The Silky Vase",
//       price: "£125",
//       image: "/c3.png",
//     },
//     {
//       id: 12,
//       name: "The Lucy Lamp",
//       price: "£399",
//       image: "/c4.png",
//     },
//   ];
// const res= await client.fetch("*[_type == 'productPage'][0].sections[0]{ 'mainImg': mainImg.asset->url,'productCards' : productCards[]{'productCardHeading': productCardHeading, 'productCardId': productCardId,'productCardPrice': productCardPrice, 'productCardImage': productCardImage.asset->url }}")
// const {mainImg, } = await res
//   return (
//     <>
//       <div className="max-w-[1440px] bg-white text-[#2A254B]">
//         <div className="max-w-full h-[209px] mt-0 pt-0">
//           <Image
//             src={mainImg}
//             alt="Full-Width Banner"
//             width={1920}
//             height={600}
//             className="w-full object-cover"
//           />
//         </div>

//         <div className="flex justify-between items-center px-8 py-4 bg-white max-w-full">
//           {/* Left Section: Filters */}
//           <div className=" w-[1440px] h-[64] gap-4 sm:gap-6 md:gap-10">
//             {/* Category Filter */}
//             <div className="flex items-center gap-2 cursor-pointer">
//               <span className="text-[#2A254B] font-thin">Category</span>
//               <span>
//                 <IoMdArrowDropdown />
//               </span>
//             </div>

//             {/* Product Type Filter */}
//             <div className="flex items-center gap-2 cursor-pointer">
//               <span className="text-[#2A254B] font-thin">Product Type</span>
//               <span>
//                 <IoMdArrowDropdown />
//               </span>
//             </div>

//             {/* Price Filter */}
//             <div className="flex items-center gap-2 cursor-pointer">
//               <span className="text-[#2A254B] font-thin">Price</span>
//               <span>
//                 <IoMdArrowDropdown />
//               </span>
//             </div>

//             {/* Brand Filter */}
//             <div className="flex items-center gap-2 cursor-pointer">
//               <span className="text-[#2A254B] font-thin">Brand</span>
//               <span>
//                 <IoMdArrowDropdown />
//               </span>
//             </div>
//           </div>

//           {/* Right Section: Sort By and Date Edit */}
//           <div className="flex gap-4 sm:gap-6 md:gap-8">
//             {/* Sort By */}
//             <div className="flex items-center gap-2 cursor-pointer">
//               <span className="text-[#2A254B] font-thin">Sort By:</span>
//             </div>

//             {/* Date Edit */}
//             <div className="flex items-center gap-2 cursor-pointer">
//               <span className="text-[#2A254B] font-thin">Date Edit</span>
//               <span>
//                 <IoMdArrowDropdown />
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="container max-w-full px-6 sm:px-12 md:px-16 lg:px-32 mb-6">
//           {/* Product Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
//             {res.productCards?.map((product: any ) => (
//               <div
//                 key={product.id}
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
//                     <h3 className="text-lg text-start">{product.productCardHeading}</h3>
//                     <p className="text-[#2A254B] text-start">£{product.productCardPrice}</p>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* View Collection Button */}
//           <div className="flex justify-center max-w-[170px] h-[56px] mx-auto mt-8">
//             <button className="px-6 py-3 bg-gray-100 text-[#2A254B] hover:bg-gray-200 rounded-md">
//               View Collection
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

export default async function Product() {
  // Fetch data from Sanity
  const res = await client.fetch(
    `
      *[_type == 'productPage'][0].sections[0]{
        'mainImg': mainImg.asset->url,
        'productCards': productCards[]{
          'productCardHeading': productCardHeading,
          'productCardId': productCardId,
          'productCardPrice': productCardPrice,
          'productCardImage': productCardImage.asset->url
        }
      }
    `
  );

  // Destructure the fetched data
  const { mainImg, productCards } = res;

  return (
    <>
      <div className="max-w-[1440px] bg-white text-[#2A254B]">
        {/* Banner Image */}
        <div className="max-w-full h-[209px] mt-0 pt-0">
          <Image
            src={mainImg}
            alt="Full-Width Banner"
            width={1920}
            height={600}
            className="w-full object-cover"
          />
        </div>

        {/* Filters and Sort Section */}
        <div className="flex justify-between items-center px-8 py-4 bg-white max-w-full">
          {/* Filters */}
          <div className="flex gap-4 sm:gap-6 md:gap-10">
            {["Category", "Product Type", "Price", "Brand"].map((filter) => (
              <div key={filter} className="flex items-center gap-2 cursor-pointer">
                <span className="text-[#2A254B] font-thin">{filter}</span>
                <IoMdArrowDropdown />
              </div>
            ))}
          </div>

          {/* Sort and Date Edit */}
          <div className="flex gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-[#2A254B] font-thin">Sort By:</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-[#2A254B] font-thin">Date Edit</span>
              <IoMdArrowDropdown />
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="container max-w-full px-6 sm:px-12 md:px-16 lg:px-32 mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {productCards?.map((product: any) => (
              <div key={product.productCardId} className="text-center w-full sm:mb-8 lg:mb-10">
                <Link href={`/product/${product.productCardId}`}>
                  <div>
                    <Image
                      src={product.productCardImage}
                      alt={product.productCardHeading}
                      width={280}
                      height={280}
                      className="mb-4 mx-auto cursor-pointer"
                    />
                    <h3 className="text-lg text-start">{product.productCardHeading}</h3>
                    <p className="text-[#2A254B] text-start">£{product.productCardPrice}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* View Collection Button */}
          <div className="flex justify-center max-w-[170px] h-[56px] mx-auto mt-8">
            <button className="px-6 py-3 bg-gray-100 text-[#2A254B] hover:bg-gray-200 rounded-md">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

