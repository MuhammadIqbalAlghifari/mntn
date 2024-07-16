"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"

export default function HikingSection() {

  const parallaxRef = useRef(null)
    const leftSection = useRef(null)
    const image = useRef(null)
    const number = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger)
            var tl = gsap.timeline({
                defaults: {duration: 1},
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: 'top top',
                    end: '1500 bottom',
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
                leftSection.current,
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
    <article ref={parallaxRef} className="flex p-5 xl:px-0 justify-between relative lg:flex-row flex-col max-w-7xl gap-y-2 lg:gap-x-5 xl:gap-x-0 mx-auto items-center h-screen w-full">
      <h1 ref={number} className="absolute opacity-0 -z-10 top-full left-0 text-white text-opacity-20 lg:text-opacity-50 lg:text-[240px] text-9xl xl:-ml-40 lg:-ml-20" style={{fontFamily: 'Gilroy Bold'}}>01</h1>
      <div ref={leftSection} className="flex opacity-0 max-w-xl gap-y-5 flex-col w-full justify-center items-start">
        <div className="flex w-full justify-start gap-x-5 items-center">
          <hr className="w-[10%] h-0.5 bg-[#FBD784]"/>
          <p className="text-[#FBD784] uppercase xl:text-lg text-sm tracking-widest" style={{fontFamily: 'Gilroy Bold'}}>get started</p>
        </div> 
        <h1 className="text-white text-start font-semibold leading-none xl:text-[88px] lg:text-[64px] text-5xl" style={{fontFamily: 'Chronicle Display Semibold'}}>What level of hiker are you?</h1>
        <p className="text-white xl:text-lg text-sm" style={{fontFamily: 'Gilroy Bold'}}>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?</p>
        <div className="flex gap-x-5 justify-start w-full items-center">
            <p className="text-[#FBD784] xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Bold'}}>read more</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FBD784" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </div>
      <img ref={image} src="/hiking.png" className="w-full max-w-xl object-cover object-bottom lg:h-screen h-1/2 opacity-0"/>
    </article>
  )
}
