"use client"

import { useEffect, useState } from "react";

export default function NavbarComponent() {

    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 4000) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };
        // Attach the event listener
        window.addEventListener("scroll", handleScroll);
        // Remove the event listener on cleanup
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="fixed z-50 w-full">
            <nav className={`flex lg:p-8 md:p-6 p-4 max-w-7xl mx-auto rounded-b-lg justify-between items-center w-full transition-all duration-500 ease-out ${isScrolled ? "bg-[#0B1D26] opacity-100 bg-opacity-50 backdrop-blur-sm text-white" : "bg-transparent opacity-0 backdrop-blur-0 text-white"}`}>
                <h1 className="text-white xl:text-[32px] lg:text-2xl" style={{fontFamily: 'Chronicle Display Bold'}}>MNTN</h1>
                <ul className="md:flex hidden items-center justify-center gap-x-5">
                    <li className="text-white xl:text-lg lg:text-sm cursor-pointer" style={{fontFamily: "Gilroy Bold"}}>Equipment</li>
                    <li className="text-white xl:text-lg lg:text-sm cursor-pointer" style={{fontFamily: "Gilroy Bold"}}>About Us</li>
                    <li className="text-white xl:text-lg lg:text-sm cursor-pointer" style={{fontFamily: "Gilroy Bold"}}>Blog</li>
                </ul>
                <button className="flex justify-center items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <p className="text-white xl:text-[17px] lg:text-[13px]" style={{fontFamily: 'Gilroy Bold'}}>Account</p>
                </button>
                <div className="flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {setOpen(!open)}}>
                    <span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5 bg-black" : isScrolled ? "bg-black" : "bg-white"}`}/>
                    <span className={`h-1 w-full rounded-lg transform transition-all duration-300 ease-in-out ${open ? "w-0 h-0" : isScrolled ? "bg-black" : "w-full bg-white"}`}/>
                    <span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5 bg-black" : isScrolled ? "bg-black" : "bg-white"}`}/>
                </div>
            </nav>
        </header>
    )
}