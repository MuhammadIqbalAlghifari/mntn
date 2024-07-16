"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"

export default function GearSection() {

  const parallaxRef = useRef(null)
    const rightSection = useRef(null)
    const number = useRef(null)
    const image = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)
            var tl = gsap.timeline({
                defaults: {duration: 1},
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: 'top top',
                    end: '2000 bottom',
                    scrub: true,
                    pin: true,
                }
            });
            tl.to(
              image.current,
              {
                  opacity: 1
              }, 
              0.65
            );
            tl.to(
                rightSection.current,
                {
                    opacity: 1
                }, 
                0.6
            );
            tl.to(
                number.current,
                {
                    top: 0,
                    opacity: 1
                }, 
                0
            );
        });

        return () => ctx.revert();
    }, [])

  return (
    <article ref={parallaxRef} className="flex justify-between relative p-5 xl:px-0 lg:my-20 my-10 lg:flex-row flex-col-reverse lg:gap-x-5 gap-y-5 xl:gap-x-0 max-w-7xl mx-auto items-center h-screen w-full">
      <h1 ref={number} className="absolute opacity-0 -z-10 top-full lg:right-1/2 lg:left-1/2 left-0 text-white text-opacity-50 lg:text-[240px] text-9xl" style={{fontFamily: 'Gilroy Bold'}}>02</h1>
      <img ref={image} src="/gear.png" className="w-full max-w-xl object-cover lg:h-full h-1/2 object-top opacity-0"/>
      <div ref={rightSection} className="flex opacity-0 max-w-xl lg:gap-y-5 gap-y-2 flex-col w-full justify-center items-start">
        <div className="flex w-full justify-start gap-x-5 items-center">
          <hr className="w-[10%] h-0.5 bg-[#FBD784]"/>
          <p className="text-[#FBD784] uppercase xl:text-lg text-sm tracking-widest" style={{fontFamily: 'Gilroy Bold'}}>hiking essentials</p>
        </div> 
        <h1 className="text-white text-start font-semibold leading-none xl:text-[88px] lg:text-[64px] text-5xl" style={{fontFamily: 'Chronicle Display Semibold'}}>Picking the right Hiking Gear!</h1>
        <p className="text-white xl:text-lg text-sm" style={{fontFamily: 'Gilroy Bold'}}>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
        <div className="flex gap-x-5 justify-start w-full items-center">
            <p className="text-[#FBD784] lg:text-lg text-sm" style={{fontFamily: 'Gilroy Bold'}}>read more</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FBD784" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </div>
    </article>
  )
}
