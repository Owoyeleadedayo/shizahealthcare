"use client"
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Services from "@/components/Home/Services";
import { Button } from "@/components/ui/button";
import { Carousel } from "antd";
import { Phone } from "lucide";
import { CalendarDays, Mail, PhoneCall, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";
import Career from "@/components/About/Career";

export default function Home() {
  const contentStyle: React.CSSProperties = {
    height: "100%",
    width: "100%", // instead of fixed 500px
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row bg-[#0C0B38] relative w-full h-full px-6 md:px-20 py-10 md:py-20 gap-10 lg:gap-20 justify-between items-center">
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            delay: 1,
            duration: 1,
            stiffness: 200,
          }}
          viewport={{ once: true }}
        className="flex flex-col gap-4 lg:gap-8">
          <div className="flex items-center gap-4">
            <div className="w-1 h-5 bg-[#5E5EEE] rounded-md" />
            <p className="text-sm md:text-base text-white">
              Trusted in-home care that keeps your loved ones safe and
              independent
            </p>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-xl md:text-4xl text-white">
              Personalized visits. Compassionate staff. Reliable support at
              home.
            </h1>
          </div>
          <div className="max-w-3xl">
            <p className="text-sm md:text-base text-[#e5e5e5]">
              We provide professional, affordable home care that helps people
              live with dignity in their own homes. Whether you need hourly
              help, overnight support, or full-time care, our trained caregivers
              deliver respectful, consistent support tailored to each person.
            </p>
          </div>
          <div className="flex gap-8">
            <Button className="bg-[#5E5EEE] text-base font-medium hover:bg-[#2AC28E] transition-all duration-300 cursor-pointer">
              Appointment
            </Button>
            <Button className="bg-white text-base text-black font-medium hover:bg-[#2AC28E] transition-all duration-300 cursor-pointer">
              <PhoneCall /> 866-212-0317 | 682-365-7517
            </Button>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          delay: 1,
          duration: 1,
          stiffness: 200,
        }}
        viewport={{ once: true }}
        className="">
          <div className=" w-[400px] h-[500px] rounded-xl px-8 md:px-0">
            <Carousel effect="fade" dots={false} autoplay autoplaySpeed={7000} className="h-full rounded-xl">
              <div className="relative w-[400px] h-[500px]">
                <Image src={'/doc.jpg'} alt="doc" fill className="object-cover rounded-xl" />
              </div>
              <div className="relative w-[400px] h-[500px]">
                <Image src={'/doc2.jpg'} alt="doc" fill className="object-cover rounded-xl" />
              </div>
              <div className="relative w-[400px] h-[500px]">
                <Image src={'/docand.jpg'} alt="doc" fill className="object-cover rounded-xl" />
              </div>
            </Carousel>
          </div>
        </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            delay: 1,
            duration: 1,
            stiffness: 200,
          }}
          viewport={{ once: true }} className="absolute bottom-[-80px] transform translate-x-1/16 bg-white rounded-xl lg:flex justify-center items-center shadow-lg hidden">
          <div className="flex flex-col py-6 px-10 gap-2">
            <h3 className="text-xl text-[] font-medium">Book an Appointment</h3>
            <div className="flex gap-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex px-3 py-3 justify-between items-center border-1 border-[#e5e5e5] rounded-lg gap-4">
                <div className="flex flex-col ">
                  <p className="text-base text-black font-normal">Email Address</p>
                  <p className="text-base text-black font-medium">shizahealthcare@gmail.com</p>
                </div>
                <div className="p-2 bg-[#E5E5F0] rounded-full"><Mail /></div>
              </div>
              <div className="flex px-3 py-3 justify-between items-center border-1 border-[#e5e5e5] rounded-lg gap-4">
                <div className="flex flex-col ">
                  <p className="text-base text-black font-normal">Appointment Date</p>
                  <p className="text-base text-black font-medium">29 December. 2023</p>
                </div>
                <div className="p-2 bg-[#E5E5F0] rounded-full"><CalendarDays /></div>
              </div>
              <div className="flex px-3 py-3 justify-between items-center border-1 border-[#e5e5e5] rounded-lg  gap-4">
                <div className="flex flex-col ">
                  <p className="text-base text-black font-normal">Phone No</p>
                  <p className="text-base text-black font-medium">866-212-0317 | 682-365-7517</p>
                </div>
                <div className="p-2 bg-[#E5E5F0] rounded-full"><PhoneCallIcon /></div>
              </div>
            </div>
            <div className="flex mt-8">
              <Link href="/contactUs">
              <Button className="text-xl p-3 bg-[#2AC28E] hover:bg-[#2AC28E] cursor-pointer">Book Now</Button>
              </Link>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
        <About />
        <Services />
        <Career/>
        <Contact />
    </>
  );
}
