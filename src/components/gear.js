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
                    y: '-=384',
                    opacity: 1
                }, 
                0
            );
        });

        return () => ctx.revert();
    }, [])

  return (
    <article ref={parallaxRef} className="flex justify-between relative lg:px-5 xl:px-0 my-20 lg:gap-x-5 xl:gap-x-0 max-w-7xl mx-auto items-center h-screen w-full">
      <h1 ref={number} className="absolute opacity-0 translate-y-96 -z-10 top-0 right-1/2 left-1/2 text-white text-opacity-50 text-[240px]" style={{fontFamily: 'Gilroy Bold'}}>02</h1>
      <img ref={image} src="/gear.png" className="w-full max-w-xl object-cover h-[90%] object-top opacity-0"/>
      <div ref={rightSection} className="flex opacity-0 max-w-xl gap-y-5 flex-col w-full justify-center items-start">
        <div className="flex w-full justify-start gap-x-5 items-center">
          <hr className="w-[10%] h-0.5 bg-[#FBD784]"/>
          <p className="text-[#FBD784] uppercase xl:text-lg lg:text-sm tracking-widest" style={{fontFamily: 'Gilroy Bold'}}>hiking essentials</p>
        </div> 
        <h1 className="text-white text-start font-semibold leading-none xl:text-[88px] lg:text-[64px]" style={{fontFamily: 'Chronicle Display Semibold'}}>Picking the right Hiking Gear!</h1>
        <p className="text-white xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Bold'}}>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
        <div className="flex gap-x-5 justify-start w-full items-center">
            <p className="text-[#FBD784] text-lg" style={{fontFamily: 'Gilroy Bold'}}>read more</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FBD784" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </div>
    </article>
  )
}
