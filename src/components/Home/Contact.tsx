"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {motion} from "framer-motion"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { toast } from "sonner";

const Contact = () => {
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
                  <Textarea name="address" className="h-[60px]" />
                </div>

                <div className="grid w-full gap-1">
                  <Label
                    htmlFor="message"
                    className="text-base text-black font-medium"
                  >
                    Your Message
                  </Label>
                  <Textarea name="message" className="h-[100px]" />
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
    </>
  );
};

export default Contact;
