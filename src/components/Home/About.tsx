"use client"
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {motion} from "framer-motion"
import Link from "next/link";

const About = () => {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        delay: 2,
        duration: 1,
        stiffness: 200,
      }}
      viewport={{ once: true }}
      className="flex bg-white w-full h-full flex-col lg:flex-row lg:justify-between justify-center items-center px-6 lg:px-20 pt-15 lg:pt-50 pb-0 gap-20">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <p className="text-lg text-black font-medium">About Us</p>
          </div>
          <div className="lg:max-w-lg">
            <h2 className="text-4xl text-black font-semibold capitalize">
              Care you can trust, people who care
            </h2>
          </div>
          <p className="text-base text-black font-normal lg:max-w-lg">
            Shiza Healthcare provides a high-quality, affordable alternative to
            long-term institutional care. We offer part-time, intermittent home
            care that helps people remain independent in their own homes. When
            appropriate, we bill insurance directly so families do not carry the
            full financial burden. Our focus is caring, listening, teaching, and
            planning so each client receives the right level of support.
          </p>
          <div>
            <Link href="/about">
            <Button className="w-[100px] h-[35px] text-lg cursor-pointer">
              More...
            </Button>
            </Link>
          </div>
        </div>
        <div className="lg:flex relative gap-4 hidden">
          <div className="relative w-[200px] h-[400px] border mt-20 rounded-[60px]">
            <Image
              src="/glove.jpg"
              alt="nurse"
              fill
              className="absolute object-cover rounded-[60px]"
            />
          </div>
          <div className="relative w-[400px] h-[500px] border rounded-2xl">
            <Image
              src="/ddd.jpg"
              alt="nurse"
              fill
              className="absolute object-cover rounded-2xl"
            />
          </div>
            <div className="absolute translate-y-4 left-16 bg-[#2AC28E] px-4 py-1 rounded-md ">
                <p className="text-base text-black font-medium">Trusted In-Home Care Provider</p>
            </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
