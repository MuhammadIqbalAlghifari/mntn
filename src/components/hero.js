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
                    end: '2500 bottom',
                    scrub: true,
                    pin: true,
                }
            });
            tl.to(
                hiking1.current,
                {
                    top: '40%',
                }, 
                0
            );
            tl.to(
                mountain1.current,
                {
                    top: '10%'
                }, 
                0
            );
            tl.to(
                sky1.current,
                {
                    y: '-500'
                }, 
                0
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
            <main ref={parallaxRef} className="w-full h-[110vh] relative">
                <div ref={CTASection} className="w-full h-[110vh] gap-y-2 lg:gap-y-5 justify-start mt-40 absolute top-1/2 left-1/2 px-5 md:px-5 lg:px-0 -translate-x-1/2 -translate-y-1/2 -z-40 flex flex-col max-w-[38rem] md:items-start items-center">
                    <div className="flex gap-x-5 md:justify-start justify-center w-full items-center">
                        <hr className="md:w-1/6 w-[10%] h-0.5 bg-[#FBD784]"/>
                        <p className="text-[#FBD784] uppercase lg:text-lg text-base tracking-widest" style={{fontFamily: 'Gilroy Bold'}}>a hiking guide</p>
                    </div>
                    <h1 className="text-white md:text-start text-center font-semibold 2xl:text-[88px] lg:text-6xl text-3xl" style={{fontFamily: 'Chronicle Display Semibold'}}>Be prepared for the Mountains and beyond!</h1>
                    <div className="flex md:gap-x-5 gap-x-2 md:justify-start justify-center w-full items-center">
                        <p className="text-white lg:text-lg text-base" style={{fontFamily: 'Gilroy Bold'}}>scroll down</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="md:size-6 size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                        </svg>
                    </div>
                </div>
                <div className="h-full w-full bg-gradient-to-br from-[#0B1D26] to-transparent absolute -z-[45]"></div>
                <img ref={sky1} src="/HG.png" className="w-full lg:h-[150vh] md:h-[1500px] h-[1200px] absolute object-cover object-center -z-50"/>
                <img ref={mountain1} src="/MG.png" className="w-full lg:h-auto md:h-[1000px] h-[1200px] top-[60%] absolute object-cover object-right -z-40"/>
                <img ref={hiking1} src="/VG.png" className="w-full lg:h-auto md:h-[1000px] h-[600px] absolute object-cover object-left top-[80%] -z-20"/>
                <div className="lg:h-full h-full w-full bg-gradient-to-t from-[#0B1D26] via-transparent to-transparent absolute -z-10"></div>
            </main>
        </section>
    )
}