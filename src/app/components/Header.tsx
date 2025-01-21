
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { LuHeart } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchBar from "./SearchBar";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Close menu on page load
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, []);
const Header = ({ products }: { products: any[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on page load
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-5 lg:px-10 mx-auto z-50">
        {/* Top Section */}
        <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full flex justify-between items-center">
          {/* Logo Section */}
          <h1 className="text-[#22202E] text-2xl font-semibold">Avion</h1>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-4 ml-auto">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/product">Products</Link>
            </li>
            <li>
              <Link href="/productlist">Listings</Link>
            </li>
            <li>
              <Link href="/shopping">Shopping</Link>
            </li>
          </ul>

          {/* Icons Section */}
          <div className="flex items-center text-xl gap-3 ml-3">
            {/* <IoSearch className="cursor-pointer" /> */}
            <SearchBar />
            <Link href="/cart"><MdOutlineShoppingCart /></Link>
            {/* <CgProfile /> */}
            <Link href="/wishlist"><LuHeart /></Link>
            {/* <IoMdNotificationsOutline /> */}
            
            {/* Hamburger Menu for Mobile */}
            <button
              className="lg:hidden text-3xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Desktop Category Navigation */}
        <nav className="hidden lg:flex w-[675px] justify-between items-center h-1/2 text-[#726E8D]">
          {[
            "Plant pots",
            "Ceramics",
            "Tables",
            "Chairs",
            "Crockery",
            "Tableware",
            "Cutlery",
          ].map((item, index) => (
            <Link
              key={index}
              href="/"
              className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-[#2A254B] text-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="text-white text-3xl absolute top-5 right-5"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          ×
        </button>

        {/* Mobile Links */}
        <ul className="flex flex-col items-start gap-6 mt-20 px-6">
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/product" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/productlist" onClick={() => setIsMenuOpen(false)}>
              Listings
            </Link>
          </li>
          <li>
            <Link href="/shopping" onClick={() => setIsMenuOpen(false)}>
              Shopping
            </Link>
          </li>
          {/* Categories */}
          {[
            "Plant pots",
            "Ceramics",
            "Tables",
            "Chairs",
            "Crockery",
            "Tableware",
            "Cutlery",
          ].map((item, index) => (
            <li key={index}>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;

















































// // "use client";
// // import React, { useState } from "react";
// // import Link from "next/link";
// // import { IoSearch } from "react-icons/io5";
// // import { MdOutlineShoppingCart } from "react-icons/md";
// // import { CgProfile } from "react-icons/cg";
// // import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// // import { LuHeart } from "react-icons/lu";
// // import { IoMdNotificationsOutline } from "react-icons/io";
// // import Search from "../components/SearchBar";

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isSearchOpen, setIsSearchOpen] = useState(false);

// //   return (
// //     <>
// //       <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-5 lg:px-10 mx-auto z-50">
// //         {/* Top Section */}
// //         <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full flex justify-between items-center">
// //           {/* Logo Section */}
// //           <h1 className="text-[#22202E] text-2xl font-semibold">Avion</h1>

// //           {/* Desktop Links */}
// //           <ul className="hidden lg:flex gap-4 ml-auto">
// //             <li>
// //               <Link href="/">Home</Link>
// //             </li>
// //             <li>
// //               <Link href="/about">About</Link>
// //             </li>
// //             <li>
// //               <Link href="/product">Products</Link>
// //             </li>
// //             <li>
// //               <Link href="/productlist">Listings</Link>
// //             </li>
// //             <li>
// //               <Link href="/shopping">Shopping</Link>
// //             </li>
// //           </ul>

// //           {/* Icons Section */}
// //           <div className="flex items-center text-xl gap-3 ml-3">
// //             <IoSearch
// //               className="cursor-pointer"
// //               onClick={() => setIsSearchOpen(true)}
// //             />
// //             <Link href="/cart">
// //               <MdOutlineShoppingCart />
// //             </Link>
// //             <CgProfile />
// //             <LuHeart />
// //             <IoMdNotificationsOutline />

// //             {/* Hamburger Menu for Mobile */}
// //             <button
// //               className="lg:hidden text-3xl"
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               aria-label="Toggle Menu"
// //             >
// //               {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Search Component */}
// //       {isSearchOpen && <Search onClose={() => setIsSearchOpen(false)} />}
// //     </>
// //   );
// // };

// // export default Header;


// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { IoSearch } from "react-icons/io5";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import { LuHeart } from "react-icons/lu";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import SearchBar from "../components/SearchBar";

// const Header = ({ products }: { products: any[] }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   return (
//     <>
//       <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-5 lg:px-10 mx-auto z-50">
//         {/* Top Section */}
//         <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full flex justify-between items-center">
//           {/* Logo Section */}
//           <h1 className="text-[#22202E] text-2xl font-semibold">Avion</h1>

//           {/* Desktop Links */}
//           <ul className="hidden lg:flex gap-4 ml-auto">
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="/about">About</Link>
//             </li>
//             <li>
//               <Link href="/product">Products</Link>
//             </li>
//             <li>
//               <Link href="/productlist">Listings</Link>
//             </li>
//             <li>
//               <Link href="/shopping">Shopping</Link>
//             </li>
//           </ul>

//           {/* Icons Section */}
//           <div className="flex items-center text-xl gap-3 ml-3">
//             <IoSearch
//               className="cursor-pointer"
//               onClick={() => setIsSearchOpen(true)}
//             />
//             <Link href="/cart">
//               <MdOutlineShoppingCart />
//             </Link>
//             <CgProfile />
//             <LuHeart />
//             <IoMdNotificationsOutline />

//             {/* Hamburger Menu for Mobile */}
//             <button
//               className="lg:hidden text-3xl"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle Menu"
//             >
//               {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
//             </button>
//           </div>
//         </div>

//         {/* Desktop Category Navigation */}
//         <nav className="hidden lg:flex w-[675px] justify-between items-center h-1/2 text-[#726E8D]">
//           {[
//             "Plant pots",
//             "Ceramics",
//             "Tables",
//             "Chairs",
//             "Crockery",
//             "Tableware",
//             "Cutlery",
//           ].map((item, index) => (
//             <Link
//               key={index}
//               href="/"
//               className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
//             >
//               {item}
//             </Link>
//           ))}
//         </nav>
//       </header>

//       {/* Mobile Sliding Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-[#2A254B] text-white z-50 transform transition-transform duration-300 ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           className="text-white text-3xl absolute top-5 right-5"
//           onClick={() => setIsMenuOpen(false)}
//           aria-label="Close Menu"
//         >
//           <HiX />
//         </button>

//         {/* Mobile Links */}
//         <ul className="flex flex-col items-start gap-6 mt-20 px-6">
//           <li>
//             <Link href="/" onClick={() => setIsMenuOpen(false)}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" onClick={() => setIsMenuOpen(false)}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="/product" onClick={() => setIsMenuOpen(false)}>
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link href="/productlist" onClick={() => setIsMenuOpen(false)}>
//               Listings
//             </Link>
//           </li>
//           <li>
//             <Link href="/shopping" onClick={() => setIsMenuOpen(false)}>
//               Shopping
//             </Link>
//           </li>
//           {/* Categories */}
//           {[
//             "Plant pots",
//             "Ceramics",
//             "Tables",
//             "Chairs",
//             "Crockery",
//             "Tableware",
//             "Cutlery",
//           ].map((item, index) => (
//             <li key={index}>
//               <Link href="/" onClick={() => setIsMenuOpen(false)}>
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Background Overlay */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={() => setIsMenuOpen(false)}
//         ></div>
//       )}

//       {/* SearchBar Component */}
//       {isSearchOpen && (
//         <SearchBar
//           products={products}
//           onClose={() => setIsSearchOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Header;


// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import { LuHeart } from "react-icons/lu";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import SearchBar from "./SearchBar";

// const Header = ({ products }: { products: any[] }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isWishlistOpen, setIsWishlistOpen] = useState(false);
//   const [wishlist, setWishlist] = useState<any[]>([]);

//   const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

//   const addToWishlist = (product: any) => {
//     setWishlist((prev) => [...prev, product]);
//   };

//   const removeFromWishlist = (id: string) => {
//     setWishlist((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <>
//       <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-5 lg:px-10 mx-auto z-50">
//         <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full flex justify-between items-center">
//           <h1 className="text-[#22202E] text-2xl font-semibold">Avion</h1>
//           <ul className="hidden lg:flex gap-4 ml-auto">
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/about">About</Link></li>
//             <li><Link href="/product">Products</Link></li>
//             <li><Link href="/productlist">Listings</Link></li>
//             <li><Link href="/shopping">Shopping</Link></li>
//           </ul>
//           <div className="flex items-center text-xl gap-3 ml-3">
//             <SearchBar />
//             <Link href="/cart"><MdOutlineShoppingCart /></Link>
//             <CgProfile />
//             <div className="relative">
//               <button onClick={toggleWishlist}>
//                 <LuHeart />
//                 {wishlist.length > 0 && (
//                   <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
//                     {wishlist.length}
//                   </span>
//                 )}
//               </button>
//             </div>
//             <IoMdNotificationsOutline />
//             <button
//               className="lg:hidden text-3xl"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle Menu"
//             >
//               {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
//             </button>
//           </div>
//         </div>
//         <nav className="hidden lg:flex w-[675px] justify-between items-center h-1/2 text-[#726E8D]">
//           {["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item, index) => (
//             <Link key={index} href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
//               {item}
//             </Link>
//           ))}
//         </nav>
//       </header>

//       {isWishlistOpen && (
//         <div className="fixed top-0 right-0 w-[300px] bg-white shadow-lg z-50 p-4">
//           <h2 className="text-xl font-bold mb-4">Wishlist</h2>
//           {wishlist.length === 0 ? (
//             <p>Your wishlist is empty</p>
//           ) : (
//             <ul>
//               {wishlist.map((item) => (
//                 <li key={item.id} className="mb-4">
//                   <Link href={`/product/${item.id}`}>
//                     <a className="flex items-center">
//                       <Image
//                         src={item.image}
//                         alt={item.name}
//                         width={50}
//                         height={50}
//                         className="mr-4"
//                       />
//                       <span>{item.name}</span>
//                     </a>
//                   </Link>
//                   <button onClick={() => removeFromWishlist(item.id)} className="text-red-500 hover:underline">
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <button className="text-red-500 hover:underline" onClick={toggleWishlist}>
//             Close
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;




