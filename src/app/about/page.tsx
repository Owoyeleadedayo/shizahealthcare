import AboutPage from "@/components/About/AboutPage";
import OurMandV from "@/components/About/OurMandV";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col ">
      <div className="flex relative bg-[url('/about.jpg')] bg-cover bg-center bg-no-repeat flex-col-reverse w-full h-[200px] md:h-[600px] ">
        <div className="absolute inset-0 bg-[#000]/60"></div>
        <div className="absolute flex w-full h-full items-center px-10 md:px-20">
          <p className="text-2xl md:text-7xl text-[#FFF] font-medium capitalize">about us</p>
        </div>
      </div>
        <AboutPage />
        <OurMandV />
      </div>
    </>
  );
};

export default page;
