"use client"
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const Career = () => {
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
      <div className="flex flex-col my-0 px-8 md:px-10 lg:px-20 p-10 gap-20">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <p className="text-lg text-black font-medium">Career</p>
          </div>
          <div className="flex md:flex-row flex-col justify-center md:justify-between items-center gap-3">
            <div className=" lg:max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold capitalize">
                Want to be part of our mission
              </h2>
            </div>
            <p className="text-base text-black font-normal lg:max-w-lg">
              We're looking for passionate people to join us on our mission. We
              value flat hierachies, clear communication and full ownership and
              responsibility
            </p>
          </div>
          <div className="my-4 flex justify-center items-center">
            <Dialog>
              <DialogTrigger>
                <Button className="cursor-pointer">Fill in your details</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription>
                    <form onSubmit={handleSubmit} className="mt-3">
                      <div className="flex flex-col w-full gap-3">
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
                        </div>
                        <div className="flex flex-col md:flex-row w-full  gap-3">
                          <div className="grid w-full gap-1">
                            <Label
                              htmlFor="email"
                              className="text-base text-black font-medium"
                            >
                              City
                            </Label>
                            <Input
                              type="text"
                              name="city"
                              id="city"
                              placeholder="Enter City"
                              required
                            />
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
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
