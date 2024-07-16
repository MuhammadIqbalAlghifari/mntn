"use client"

import { easeOut } from "framer-motion"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"

export default function HeroParallax() {

    const parallaxRef = useRef(null)
    const sky1 = useRef(null)
    const mountain1 = useRef(null)
    const hiking1 = useRef(null)
    const CTASection = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)
            var tl = gsap.timeline({
                defaults: {duration: 1, ease: easeOut},
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: 'top top',
                    end: '4000 bottom',
                    scrub: true,
                    pin: true,
                }
            });
            tl.to(
                hiking1.current,
                {
                    y: '-300'
                }, 
                0.5
            );
            tl.to(
                mountain1.current,
                {
                    y: '-100'
                }, 
                0.2
            );
            tl.to(
                sky1.current,
                {
                    top: 0
                }, 
                0.2
            );
            tl.to(
                CTASection.current,
                {
                    y: '+40%',
                    opacity: 1
                }, 
                0
            );
        });

        return () => ctx.revert();
    }, [])
    
    return (
        <section className="overflow-hidden">
            <main ref={parallaxRef} className="w-full h-screen md:h-[110vh] relative">
                <div ref={CTASection} className="w-full h-screen md:h-[110vh] gap-y-2 lg:gap-y-5 justify-start mt-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[40] flex flex-col lg:max-w-[38rem] md:max-w-xs items-start">
                    <div className="flex gap-x-5 justify-start w-full items-center">
                        <hr className="w-1/6 h-0.5 bg-[#FBD784]"/>
                        <p className="text-[#FBD784] uppercase lg:text-lg md:text-base tracking-widest" style={{fontFamily: 'Gilroy Bold'}}>a hiking guide</p>
                    </div>
                    <h1 className="text-white text-start font-semibold 2xl:text-[88px] lg:text-6xl md:text-3xl" style={{fontFamily: 'Chronicle Display Semibold'}}>Be prepared for the Mountains and beyond!</h1>
                    <div className="flex gap-x-5 justify-start w-full items-center">
                        <p className="text-white lg:text-lg md:text-base" style={{fontFamily: 'Gilroy Bold'}}>scroll down</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                        </svg>
                    </div>
                </div>
                <div className="h-full w-full bg-gradient-to-br from-[#0B1D26] to-transparent absolute -z-[45]"></div>
                <img ref={sky1} src="/HG.png" className="w-full absolute -z-50"/>
                <img ref={mountain1} src="/MG.png" className="w-full h-[130vh] lg:mt-96 mt-80 absolute -z-40"/>
                <img ref={hiking1} src="/VG.png" className="w-full mt-[600px] xl:mt-[750px] absolute -z-20"/>
                <div className="h-full -mb-1 w-full bg-gradient-to-t from-[#0B1D26] via-transparent to-transparent absolute -z-10"></div>
            </main>
        </section>
    )
}