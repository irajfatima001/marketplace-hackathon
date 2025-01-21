// import { useState } from "react";

// export default function FilterPanel({ onApplyFilters }) {
//   const [priceRange, setPriceRange] = useState("");
//   const [brand, setBrand] = useState("");
//   const [inStock, setInStock] = useState(false);

//   const handleApplyFilters = () => {
//     onApplyFilters({
//       priceRange,
//       brand,
//       inStock,
//     });
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Filters</h2>
//       <div className="mb-4">
//         <label className="block mb-2">Price Range:</label>
//         <input
//           type="text"
//           placeholder="e.g., 100-500"
//           value={priceRange}
//           onChange={(e) => setPriceRange(e.target.value)}
//           className="border p-2 rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-2">Brand:</label>
//         <input
//           type="text"
//           placeholder="Brand name"
//           value={brand}
//           onChange={(e) => setBrand(e.target.value)}
//           className="border p-2 rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-2">
//           <input
//             type="checkbox"
//             checked={inStock}
//             onChange={(e) => setInStock(e.target.checked)}
//             className="mr-2"
//           />
//           In Stock Only
//         </label>
//       </div>
//       <button
//         onClick={handleApplyFilters}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Apply Filters
//       </button>
//     </div>
//   );
// }
