"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mjkagapa", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Your appointment request has been sent!");
        form.reset();
        setDate(undefined);
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex relative bg-[url('/about.jpg')] bg-cover bg-center bg-no-repeat flex-col-reverse w-full h-[200px] md:h-[600px] ">
          <div className="absolute inset-0 bg-[#000]/60"></div>
          <div className="absolute flex w-full h-full items-center px-10 md:px-20">
            <p className="text-2xl md:text-7xl text-[#FFF] font-medium capitalize">
              contact us
            </p>
          </div>
        </div>
        <div className="flex flex-col px-8 md:px-10 lg:px-20 py-5 md:py-10 gap-6 md:gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <p className="text-lg text-black font-medium">Contact Us</p>
            </div>
            <div className="">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold capitalize">
                Get the right care, starting today
              </h2>
            </div>
          </div>
        </div>
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
          className="bg-white rounded-xl lg:flex justify-center items-center py-10"
        >
          <div className="flex flex-col py-6 px-10 gap-2 border-1 rounded-xl">
            <h3 className="text-xl text-[] font-medium">Book an Appointment</h3>
            <div className="flex gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex px-3 py-3 justify-between items-center border-1 border-[#e5e5e5] rounded-lg gap-4">
                  <div className="flex flex-col ">
                    <p className="text-base text-black font-normal">
                      Email Address
                    </p>
                    <p className="text-base text-black font-medium">
                      shizahealthcare@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex px-3 py-3 justify-between items-center border-1 border-[#e5e5e5] rounded-lg gap-4">
                  <div className="flex flex-col ">
                    <p className="text-base text-black font-normal">
                      Office hours
                    </p>
                    <p className="text-base text-black font-medium">
                      Monday to Friday, 9:00 AM to 5:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex px-3 py-3 justify-between items-center border-1 border-[#e5e5e5] rounded-lg  gap-4">
                  <div className="flex flex-col ">
                    <p className="text-base text-black font-normal">Phone No</p>
                    <p className="text-base text-black font-medium">
                      866-212-0317 | 682-365-7517
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mt-8"></div>
            </div>
            <div className="mt-2 flex justify-center">
              <p className="text-base text-black font-medium">
                After-hours support for urgent needs, leave a message and we
                will respond promptly
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative bg-[url('/bacc.jpg')] bg-cover bg-center px-8 lg:px-40 py-10 md:py-20">
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
            className="relative flex gap-10 border rounded-xl"
          >
            <div className="relative w-[500px] h-[630px] overflow-hidden rounded-l-xl hidden lg:flex">
              <Image
                src="/contacts.jpg"
                alt="Doctor"
                fill
                className="object-cover"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex w-full lg:w-[600px] flex-col justify-center gap-3 px-5 py-3 md:p-10"
            >
              <p className="text-lg md:text-2xl text-black font-medium">
                Make an appointment
              </p>
              <div className="flex flex-col w-full gap-3">
                <div className="flex flex-col md:flex-row w-full  gap-3">
                  <div className="grid w-full gap-1">
                    <Label
                      htmlFor="name"
                      className="text-base text-black font-medium"
                    >
                      Name
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  <div className="grid w-full gap-1">
                    <Label
                      htmlFor="email"
                      className="text-base text-black font-medium"
                    >
                      Email
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full  gap-3">
                  <div className="grid w-full gap-1">
                    <Label
                      htmlFor="phoneNumber"
                      className="text-base text-black font-medium"
                    >
                      Phone Number
                    </Label>
                    <Input
                      type="number"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>
                  <div className="grid w-full gap-1">
                    <Label
                      htmlFor="email"
                      className="text-base text-black font-medium"
                    >
                      Preferred visit days and times
                    </Label>
                    <div className="flex gap-2">
                      <div className="flex flex-col gap-3">
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              id="date-picker"
                              className="w-36 justify-between font-normal"
                              type="button" 
                            >
                              {date ? date.toLocaleDateString() : "Select date"}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>

                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={date || undefined}
                              captionLayout="dropdown"
                              onSelect={(d) => {
                                setDate(d);
                                setOpen(false);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                        <input
                          type="hidden"
                          name="date"
                          value={date ? date.toLocaleDateString() : ""}
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <Input
                          type="time"
                          id="time-picker"
                          name="time"
                          step="1"
                          defaultValue="00:00:00"
                          className="bg-black text-white border-1 border-black appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full  gap-3">
                  <div className="grid w-full gap-1">
                    <Label
                      htmlFor="email"
                      className="text-base text-black font-medium"
                    >
                      City
                    </Label>
                    <Input type="text"
                      name="city"
                      id="city"
                      placeholder="Enter City"
                      required />
                  </div>
                </div>

                <div className="grid w-full gap-1">
                  <Label
                    htmlFor="message"
                    className="text-base text-black font-medium"
                  >
                    Your Address
                  </Label>
                  <Textarea name="address" className="h-[60px]" required />
                </div>

                <div className="grid w-full gap-1">
                  <Label
                    htmlFor="message"
                    className="text-base text-black font-medium"
                  >
                    Your Message
                  </Label>
                  <Textarea name="message" className="h-[100px]" required />
                </div>

                <div>
                  <Button
                    className="cursor-pointer text-base text-white font-medium"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Page;
