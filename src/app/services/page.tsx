import { Sparkle } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  const service = [
    {
      title: "Home Health Aide",
      desc: "Personal care and daily living support, including bathing,dressing, toileting, mobility assistance, and medication reminders. Our aides are trained to provide safe, respectful personal care at home",
    },
    {
      title: "Attendant Services",
      desc: "Practical support with household tasks to maintain a safe home: light housekeeping, laundry, grocery shopping, meal preparation, and basic errands.",
    },
    {
      title: "Companion Care",
      desc: "non-medical companionship to reduce isolation and increase engagement. Services include conversation, reading, light recreation, accompaniment to appointments, and help with community activities.",
    },
    {
      title: "Live-in Care",
      desc: "Full-time care provided in the client’s home when continuous support is required. Live-in caregivers have a private sleeping area and coordinate with family about shared expenses such as meals.",
    },
    {
      title: "Elderly & Hospital Sitters",
      desc: "Short-term, overnight, or sitter services to ensure safety and comfort during recovery from surgery or when family members are unavailable.",
    },
    {
      title: "Transportation Services",
      desc: "Safe, punctual transport for medical appointments, pharmacy runs, and social outings. Caregivers can assist with transferring and appointments as needed.",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-20">
        <div className="flex relative bg-[url('/about.jpg')] bg-cover bg-center bg-no-repeat flex-col-reverse w-full h-[200px] md:h-[600px] ">
          <div className="absolute inset-0 bg-[#000]/60"></div>
          <div className="absolute flex w-full h-full items-center px-10 md:px-20">
            <p className="text-2xl md:text-7xl text-[#FFF] font-medium capitalize">
              Our Services
            </p>
          </div>
        </div>
        <div className="flex flex-col px-8 md:px-10 lg:px-20 py-5 md:py-10 gap-6 md:gap-10">
          <div className="flex flex-col w-full gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <p className="text-lg text-black font-medium">Services</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-0">
              <div className="max-w-lg">
                <p className="text-4xl text-black font-semibold capitalize">
                  High Quality Services for You.
                </p>
              </div>
              <div>
                <p className="text-base text-black font-normal max-w-lg">
                  We offer flexible services that can be combined as needs
                  change. Each service includes a written care plan and regular
                  reviews.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {service.map((serve) => (
              <div
                key={serve.title}
                className="flex flex-col px-4 py-6 items-center gap-2 border-1 border-[#e5e5e5] rounded-xl shadow-md"
              >
                <p className="text-xl text-black font-medium">{serve.title}</p>
                <p className="text-lg text-black font-normal capitalize">
                  {serve.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-rows-1 lg:grid-cols-[60%_43%] py-10">
            <div className="lg:flex hidden">
              <div className="relative h-[400px] w-[700px] rounded-lg">
                <Image
                  src={"/serve.jpg"}
                  alt="serve"
                  fill
                  className="absolute object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col border justify-center items-center px-4 h-full md:px-8 py-6 rounded-xl shadow-md gap-14">
              <div className="flex flex-col gap-1">
                <p className="text-xl text-black font-medium">
                  How we personalize care
                </p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Sparkle size={14} />{" "}
                    <p className="text-base text-black font-normal">
                      Free assessment to define needs and preferences
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkle size={14} />{" "}
                    <p className="text-base text-black font-normal">
                      Written care plan that outlines tasks, schedule, and goals
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkle size={14} />{" "}
                    <p className="text-base text-black font-normal">
                      Regular reviews and adjustments as needs change
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl text-black font-medium">Pricing notes</p>
                <p className="text-base text-black font-normal">
                  We offer hourly and block-hour rates, as well as live-in
                  pricing. In some cases we can bill eligible insurance or care
                  programs directly. We will review payment options during your
                  free consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
