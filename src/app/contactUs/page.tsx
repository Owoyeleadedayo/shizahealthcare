"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const page = () => {
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data/cities.json")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="flex px-3 py-3 justify-between items-center border-1 border-[#e5e5e5] rounded-lg gap-4">
                  <div className="flex flex-col ">
                    <p className="text-base text-black font-normal">
                      Email Address
                    </p>
                    <p className="text-base text-black font-medium">
                      Medicalinfo@gmail.com
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
                <div className="flex w-full  gap-3">
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
                      placeholder="Enter Phone Number"
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
                              selected={date}
                              captionLayout="dropdown"
                              onSelect={(date) => {
                                setDate(date);
                                setOpen(false);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Input
                          type="time"
                          id="time-picker"
                          step="1"
                          defaultValue="10:30:00"
                          className="bg-black text-white appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full  gap-3">
                  <div className="grid w-full gap-1">
                    <Label
                      htmlFor="phoneNumber"
                      className="text-base text-black font-medium capitalize"
                    >
                      description of needs
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid w-full gap-1">
                    <Label
                      htmlFor="email"
                      className="text-base text-black font-medium"
                    >
                      City
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city.toLowerCase()}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid w-full gap-1">
                  <Label
                    htmlFor="message"
                    className="text-base text-black font-medium"
                  >
                    Your Address
                  </Label>
                  <Textarea className="h-[60px]" />
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
                  <Button className="cursor-pointer text-base text-white font-medium">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default page;
