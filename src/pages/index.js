import FooterSection from "@/components/footer";
import GearSection from "@/components/gear";
import HeroParallax from "@/components/hero";
import HikingSection from "@/components/hiking";
import NavbarComponent from "@/components/navbar";
import TimingSection from "@/components/timing";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavbarComponent/>
      <HeroParallax/>
      <HikingSection/>
      <GearSection/>
      <TimingSection/>
      <FooterSection/>
    </>
  );
}
