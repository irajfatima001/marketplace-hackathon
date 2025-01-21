// src/app/components/CartItem.tsx
import Image from "next/image";

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity, image, onRemove }) => {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <Image src={image} alt={name} width={80} height={80} className="rounded-md" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p>£{price} x {quantity}</p>
      </div>
      <button onClick={onRemove} className="ml-auto text-red-500">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
