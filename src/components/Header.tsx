"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = () => (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
      <Link href={"/"}>
        <p className="relative text-lg text-black font-medium capitalize
          after:content-[''] after:absolute after:left-1/2 after:bottom-0 
          after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-black 
          after:transition-all after:duration-300 hover:after:w-full">
          Home
        </p>
      </Link>
      <Link href={"/about"}>
        <p className="relative text-lg text-black font-medium capitalize
          after:content-[''] after:absolute after:left-1/2 after:bottom-0 
          after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-black 
          after:transition-all after:duration-300 hover:after:w-full">
          About
        </p>
      </Link>
      <Link href={"/services"}>
        <p className="relative text-lg text-black font-medium capitalize
          after:content-[''] after:absolute after:left-1/2 after:bottom-0 
          after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-black 
          after:transition-all after:duration-300 hover:after:w-full">
          Services
        </p>
      </Link>
      <Link
        href={"/contactUs"}
        className="flex items-center px-4 py-1 bg-[#5E5EEE] rounded-2xl hover:transition-all hover:duration-300"
      >
        <p className="text-lg text-white font-medium capitalize">
          Contact Us
        </p>
      </Link>
    </div>
  );

  return (
    <div
      className={`flex justify-between items-center sticky top-0 z-10 px-8 md:px-10 lg:px-20 py-2 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="logo"
          height={30}
          width={80}
          className="object-cover cursor-pointer"
        />
      </Link>

      <div className="hidden lg:flex items-center gap-6">
        <NavLinks />
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Menu size={28} className="text-black" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <SheetHeader>
            </SheetHeader>
            <div className="mt-6 space-y-6 px-4">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
