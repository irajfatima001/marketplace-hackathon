import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function PopularProducts() {
  // Fetching data from Sanity
  const res = await client.fetch(
    `*[_type == 'landingPage'][0].sections[2]{
      'popularSectionHeading': popularSectionHeading,
      'popularSectionButton': popularSectionButton,
      'popularCards': popularCards[]{
        'popularSecPrice': popularSecPrice,
        'popularSecImage': popularSecImage.asset->url,
        'popularSecHeading': popularSecHeading
      }
    }`
  );
  

  return (
    <div className="bg-white max-w-[1440px] h-auto text-[#2A254B] py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-start text-2xl md:text-3xl mb-8">
          {res.popularSectionHeading}
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* First Product: Larger Width on Mobile */}
          <div className="sm:col-span-2 md:col-span-2">
            <Image
              src={res.popularCards[0]?.popularSecImage}
              alt={res.popularCards[0]?.popularSecHeading}
              width={630}
              height={375}
              className="w-full h-[375px] object-cover mb-4"
            />
            <h3 className="text-lg font-thin text-start">
              {res.popularCards[0]?.popularSecHeading}
            </h3>
            <p className="text-[#2A254B] text-start">
              {res.popularCards[0]?.popularSecPrice}
            </p>
          </div>

          {/* Remaining Products */}
          {res.popularCards?.slice(1).map((product: any, index: number) => (
            <div key={index} className="w-full">
              <Image
                src={product.popularSecImage}
                alt={product.popularSecHeading}
                width={305}
                height={375}
                className="w-full h-[375px] object-cover mb-4"
              />
              <h3 className="text-lg font-thin text-start">{product.popularSecHeading}</h3>
              <p className="text-[#2A254B] text-start">{product.popularSecPrice}</p>
            </div>
          ))}
        </div>

        {/* View Collection Button */}
        <div className="text-center mt-8">
          <Link href="/product">
          <button className="px-6 py-3 bg-gray-100 text-[#2A254B] font-semibold rounded-lg shadow-md hover:bg-gray-200">
            {res.popularSectionButton}
          </button></Link>
        </div>
      </div>
    </div>
  );
}
