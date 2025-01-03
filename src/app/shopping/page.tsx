
import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="max-w-[1440px] px-4 sm:px-10 lg:px-40 pt-10 pb-16 text-[#2A254B]">
      <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
        Your Shopping Cart
      </h1>

      <div className="hidden md:grid grid-cols-3  gap-8 pt-10">
        {/* Product Header */}
        <div>
          <h1 className="text-lg">Product</h1>
        </div>

        {/* Quantity Header */}
        <div className="text-center">
          <h1 className="text-lg ">Quantity</h1>
        </div>

        {/* Total Header */}
        <div className="text-right">
          <h1 className="text-lg ">Total</h1>
        </div>
      </div>

      {/* Product 1 */}
      <div className="grid lg:grid-cols-3  sm:grid-cols-1 gap-8 mt-8">
        {/* Product Section */}
        <div className="flex items-center">
          <Image
            src="/sc1.png"
            alt="Graystone vase"
            width={109}
            height={134}
            className="w-20 h-20 sm:w-28 sm:h-28"
          />
          <div className="ml-6">
            <h1 className="text-base sm:text-lg">Graystone vase</h1>
            <p className="text-sm mt-2">
              A timeless ceramic vase with a tri-color grey glaze.
            </p>
            <p className="text-lg font-medium">£85</p>
          </div>
        </div>

        {/* Quantity Section */}
        <div className="flex justify-center items-center">
          <p className="text-lg font-medium hidden sm:flex">1</p>
        </div>

        {/* Total Section */}
        <div className="flex justify-end items-center">
          <p className="text-lg font-medium hidden sm:flex ">£85</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="grid lg:grid-cols-3  sm:grid-cols-1 gap-8 mt-8">
        {/* Product Section */}
        <div className="flex items-center">
          <Image
            src="/sc2.png"
            alt="Basic white vase"
            width={109}
            height={134}
            className="w-20 h-20 sm:w-28 sm:h-28"
          />
          <div className="ml-6">
            <h1 className="text-base sm:text-lg">Basic white vase</h1>
            <p className="text-sm mt-2">
              Beautiful and simple, this is one for the classics.
            </p>
            <p className="text-lg font-medium">£85</p>
          </div>
        </div>

        {/* Quantity Section */}
        <div className="flex justify-center items-center">
          <p className="text-lg font-medium hidden sm:flex">1</p>
        </div>

        {/* Total Section */}
        <div className="flex justify-end items-center">
          <p className="text-lg font-medium hidden sm:flex">£125</p>
        </div>
      </div>

      {/* Subtotal Section */}
      <div className="mt-10 text-center lg:text-right">
        <h1 className="inline text-lg sm:text-xl font-medium mr-4">Subtotal</h1>
        <h1 className="inline text-xl sm:text-2xl font-semibold">£210</h1>
        <p className="text-sm mt-4">
          Taxes and shipping are calculated at checkout
        </p>
        <button className="bg-[#2A254B] h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
