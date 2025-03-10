
import Image from "next/image";
import Features from "../components/Features";
import Email from "../components/Email";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

export default async function About() {
    const res = await client.fetch("*[_type == 'aboutPage'][0].sections[0]{'aboutSecSubPara' : aboutSecSubPara,'aboutSecondPara': aboutSecondPara,'aboutSecImg' : aboutSecImg.asset->url,'aboutSecBtnText': aboutSecBtnText,'aboutFirstPara': aboutFirstPara,'aboutSecondHeading': aboutSecondHeading,'aboutFirstImg' : aboutFirstImg.asset->url,'aboutHeading': aboutHeading,'aboutFirstBtnText': aboutFirstBtnText,'aboutBtnText': aboutBtnText,'aboutFirstHeading': aboutFirstHeading,}")
    const {aboutSecSubPara, aboutSecondPara, aboutSecImg, aboutSecBtnText, aboutFirstPara, aboutSecondHeading, aboutFirstImg, aboutHeading, aboutFirstBtnText, aboutBtnText, aboutFirstHeading } = await res
  return (
    <div className="max-w-[1440px] mx-auto h-auto">
      
      
      {/* Hero Section */}
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1440px] mx-auto  py-14 px-16 md:px-16 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-thin text-[#2A254B] max-w-[700px] ">
            {aboutHeading}
          </h1>
          <Link href="/product">
          <button className="mt-6 md:mt-0  bg-gray-100 text-[#2A254B] px-6 py-3 shadow-sm hover:bg-gray-200">
            {aboutBtnText}
          </button></Link>
        </div>
      </section>

      {/* About Section */}
      <main className="flex flex-col md:flex-row items-stretch gap-3 mb-10 px-6 md:px-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-8 md:p-14 h-[480px] bg-[#2A254B] flex flex-col justify-center">
          <h1 className="text-3xl text-white">
           {aboutFirstHeading}
          </h1>
          <p className="mt-4 text-white">
            {aboutFirstPara}
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <button className="mt-60 bg-gray-100 bg-opacity-30 hover:bg-gray-700 text-white py-2 px-6">
              {aboutFirstBtnText}
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-auto">
          <Image
            src={aboutFirstImg}
            alt="Avion Furniture"
            width={720}
            height={603}
            className="w-full h-full object-cover"
          />
        </div>
      </main>

      {/* Story Section */}
      <section>
        <div className="flex flex-col md:flex-row items-center gap-0 bg-white">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-auto">
            <Image
              src={aboutSecImg}
              alt="Avion Furniture"
              width={720}
              height={603}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
            <h1 className="text-3xl text-[#2A254B]">
            {aboutSecondHeading}
            </h1>
            <p className="mt-4 text-[#2A254B]">
            {aboutSecondPara}
            </p>
            <p className="mt-4 text-[#2A254B]">
            {aboutSecSubPara}
            </p>
            <button className="mt-8 bg-gray-100 hover:bg-gray-700 text-[#2A254B] py-2 px-6 rounded">
             {aboutSecBtnText}
            </button>
          </div>
        </div>
      </section>

      <Features />
      <Email />
    </div>
  );
}
