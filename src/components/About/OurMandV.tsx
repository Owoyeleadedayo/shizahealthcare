import { Sparkle } from "lucide-react";
import Image from "next/image";
import React from "react";

const OurMandV = () => {
  return (
    <>
      <div className="flex flex-col px-8  md:p-20 gap-10 md:gap-20 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex flex-col justify-center items-center border px-10 py-4 rounded-xl gap-4 shadow-md">
            <p className="text-3xl text-black font-semibold">Our Vision</p>
            <p className="text-xl text-black font-medium">
              To be the community’s most trusted provider of in-home care and
              the employer of choice for compassionate, skilled caregivers.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center border px-6 py-4 rounded-xl gap-4 shadow-md">
            <p className="text-3xl text-black font-semibold">Our Mission</p>
            <p className="text-xl text-black font-medium">
              To provide high-quality, client-cantered, affordable home care
              that helps clients live with dignity and independence in the
              safety of their own homes.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-1 lg:grid-cols-[60%_40%] gap-0">
          <div className="lg:flex hidden">
            <div className="relative h-[500px] w-[700px] rounded-lg">
              <Image
                src={"/abbu.jpg"}
                alt="values"
                fill
                className="absolute object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col border px-4 h-full md:px-8 py-6 rounded-xl shadow-md gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-xl text-black font-medium">Our Values</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Sparkle size={14} />{" "}
                  <p className="text-base text-black font-normal">
                    Respect and dignity for every client
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkle size={14} />{" "}
                  <p className="text-base text-black font-normal">
                    Honesty and accountability in everything we do
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkle size={14} />{" "}
                  <p className="text-base text-black font-normal">
                    Cultural awareness and inclusive care
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkle size={14} />{" "}
                  <p className="text-base text-black font-normal">
                    Ongoing training and competency for our staff
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkle size={14} />{" "}
                  <p className="text-base text-black font-normal">
                    Continuous improvement guided by client feedback
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl text-black font-medium">Our team</p>
              <p className="text-base text-black font-normal">
                Our caregivers are trained, background checked, and supervised.
                We match caregivers based on skills, personality, and client
                needs. Clinical oversight is available when required.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl text-black font-medium">
                Regulation and compliance
              </p>
              <p className="text-base text-black font-normal">
                We comply with state licensing and health requirements. We will
                provide documentation and explain how coverage and billing work
                during the free assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMandV;
