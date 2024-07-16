"use client"

import { useState, useEffect } from 'react';
import FooterSection from "@/components/footer";
import GearSection from "@/components/gear";
import HeroParallax from "@/components/hero";
import HikingSection from "@/components/hiking";
import NavbarComponent from "@/components/navbar";
import TimingSection from "@/components/timing";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clear timeout if component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-white animate-spin">
              </div>
          </div>
      </div>
      ) : (
        <>
          <NavbarComponent/>
          <HeroParallax/>
          <HikingSection/>
          <GearSection/>
          <TimingSection/>
          <FooterSection/>
        </>
      )}
    </>
  );
}
