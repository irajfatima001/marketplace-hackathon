"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ICart {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function CheckoutForm() {
  const [cartItem, setCartItem] = useState<ICart[]>([]);
  const [shipCost, setShipCost] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("cart");
    const cart = data ? JSON.parse(data) : [];
    setCartItem(cart);

    const ShipmentData = localStorage.getItem("ShipmentData");
    const shipData = ShipmentData ? JSON.parse(ShipmentData) : [];
    const shipCost = shipData.shipment_cost?.amount || 0;
    setShipCost(shipCost);
  }, []);

  const handlePayment = () => {
    alert("Payment successful ✅");
    localStorage.setItem("cart", JSON.stringify([]));
    setCartItem([]);
  };

  const totalAmount =
    cartItem.reduce(
      (acc: number, item: ICart) => acc + item.price * item.quantity,
      0
    ) + shipCost;

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-[99px]">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {/* Left Column - Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-medium mb-2">
              How would you like to get your order?
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Customs regulation for India require a copy of the recipient's
              KYC. The address on the KYC needs to match the shipping address.
            </p>
            <button className="w-full flex items-center gap-4 p-4 border rounded-lg">
              <div className="h-6 w-6 border rounded-full" />
              Deliver It
            </button>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              Enter your name and address:
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-4 border rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-4 border rounded-md"
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full p-4 border rounded-md"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="w-full p-4 border rounded-md"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full p-4 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="w-full p-4 border rounded-md"
                />
              </div>
              <select className="w-full p-4 border rounded-md">
                <option value="">State/Territory</option>
                <option value="delhi">Delhi</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="karnataka">Karnataka</option>
              </select>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              What's your contact information?
            </h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 border rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 border rounded-md"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">What's your PAN?</h2>
            <input
              type="text"
              placeholder="PAN"
              className="w-full p-4 border rounded-md"
            />
          </div>

          <div>
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm text-gray-500">
              I have read and consent to processing my information.
            </label>
          </div>
          <button
            className="w-full p-4 bg-gray-200 rounded-md cursor-not-allowed"
            disabled
          >
            Continue
          </button>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-medium">Order Summary</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>
                ₹{" "}
                {cartItem.reduce(
                  (acc: number, item: ICart) => acc + item.price * item.quantity,
                  0
                )}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Delivery/Shipping</span>
              <span>{shipCost ? "₹ " + shipCost : "Free"}</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>₹ {totalAmount}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                (Includes all duties and taxes)
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {cartItem.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt="product"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="text-sm">
                  <p>{item.name}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-gray-500">₹ {item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="w-full mt-6 p-4 bg-blue-500 text-white rounded-md"
            onClick={handlePayment}
          >
            Let's Pay
          </button>
        </div>
      </div>
    </div>
  );
}
