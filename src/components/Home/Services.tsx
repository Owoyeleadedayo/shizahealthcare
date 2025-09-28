import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";

const Services = () => {
   const firstCard = [
    {
      title: "Home Health Aide"
    },
    {
      title: "Attendant Services"
    },
    {
      title: "Companion Care"
    },
   ]
  return (
    <>
      <div className="flex flex-col bg-white w-full h-full justify-between items-center px-6 lg:px-20 md:py-20 py-10 gap-8 md:gap-16">
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
                We offer flexible services that can be combined as needs change.
                Each service includes a written care plan and regular reviews.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 border p-16 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
            {firstCard.map((title) => (
              <Link href={"/services"}>
                <Card key={title.title}>
              <CardContent>
                <p className="text-xl text-center text-black font-medium">
                  {title.title}
                </p>
              </CardContent>
            </Card>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
            <Link href={"/services"}>
              <Card>
                <CardContent>
                  <p className="text-xl text-center text-black font-medium">
                    Elderly & Hospital Sitters
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href={"/services"}>
            <Card>
              <CardContent>
                <p className="text-xl text-center text-black font-medium">
                  Transportation Services
                </p>
              </CardContent>
            </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
