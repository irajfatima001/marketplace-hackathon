// import { useState, useEffect } from "react";

// export default function CategoryComponent({ onSelectCategory }) {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Fetch categories from Sanity CMS or another data source
//     async function fetchCategories() {
//       const res = await client.fetch(`*[_type == 'category']{ name }`);
//       setCategories(res.map((category) => category.name));
//     }
//     fetchCategories();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Categories</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category} className="mb-2">
//             <button
//               className="text-blue-500 hover:underline"
//               onClick={() => onSelectCategory(category)}
//             >
//               {category}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
