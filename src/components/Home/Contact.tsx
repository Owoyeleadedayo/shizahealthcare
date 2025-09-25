"use client"
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <>
      <div className="relative bg-[url('/bacc.jpg')] bg-cover bg-center px-10 md:px-40 py-10 md:py-20">
        <div className="absolute inset-0 bg-[#5E5EEE]/60"></div>
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
          className="relative flex gap-10 border rounded-xl">
          <div className="relative w-[400px] h-[500px] overflow-hidden rounded-l-xl hidden lg:flex">
            <Image src="/doc.jpg" alt="Doctor" fill className="object-cover" />
          </div>
          <div className="flex w-[600px] flex-col justify-center gap-3 px-5 py-3 md:p-10">
            <p className="text-xl md:text-2xl text-black font-medium">
              Make an appointment
            </p>
            <div className="flex flex-col w-full gap-3">
              <div className="flex w-full  gap-3">
                <div className="grid w-full gap-1">
                  <Label
                    htmlFor="name"
                    className="text-base text-black font-medium"
                  >
                    Name
                  </Label>
                  <Input type="name" id="name" placeholder="Enter Name" />
                </div>
                <div className="grid w-full gap-1">
                  <Label
                    htmlFor="email"
                    className="text-base text-black font-medium"
                  >
                    Email
                  </Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
              </div>
              <div className="grid w-full gap-1">
                  <Label
                    htmlFor="message"
                    className="text-base text-black font-medium"
                  >
                    Your Message
                  </Label>
                  <Textarea className="h-[100px]" />
              </div>
              <div>
                <Button className="cursor-pointer text-base text-white font-medium">Submit</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
