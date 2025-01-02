import { client } from "@/sanity/lib/client";
import Image from "next/image";
type Product={
  title: string;
  name: string;
  

}
export default async function ProductShowcase() {
  const res = await client.fetch(
    `*[_type == 'landingPage'][0].sections[1]{
      'ceramicSectionHeading': ceramicSectionHeading,
      'ceramicSectionButton' : ceramicSectionButton,
      'ceramicCards': ceramicCards[]{
        'ceramicSecImage': ceramicSecImage.asset->url,
        'ceramicSecPrice': ceramicSecPrice,
        'ceramicSecHeading': ceramicSecHeading
      }
    }`
  );

  return (
    <div className="bg-white max-w-[1440px] h-auto text-[#2A254B] py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-start text-2xl md:text-3xl mb-8">
          {res.ceramicSectionHeading}
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {res.ceramicCards?.map((product:any, index: number) => (
            <div key={index} className="text-center">
              <Image
                src={product.ceramicSecImage}
                alt={product.ceramicSecHeading}
                width={300}
                height={300}
                className="w-full h-auto mb-4"
              />
              <h3 className="text-lg font-thin text-start">
                {product.ceramicSecHeading}
              </h3>
              <p className="text-[#2A254B] text-start">
                £{product.ceramicSecPrice}
              </p>
            </div>
          ))}
        </div>

        {/* View Collection Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-gray-100 text-[#2A254B] font-semibold rounded-lg shadow-md hover:bg-gray-200">
            {res.ceramicSectionButton}
          </button>
        </div>
      </div>
    </div>
  );
}
