"use client"

import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"

export default function TimingSection() {

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
                    end: '2500 bottom',
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
                    y: '-=384',
                    opacity: 1
                }, 
                0
            );
        });

        return () => ctx.revert();
    }, [])

  return (
    <article ref={parallaxRef} className="flex justify-between lg:px-5 xl:px-0 relative mb-20 max-w-7xl mx-auto lg:gap-x-5 xl:gap-x-0 items-center h-screen w-full">
      <h1 ref={number} className="absolute -z-10 top-0 left-0 opacity-0 translate-y-96 text-white text-opacity-50 text-[240px] xl:-ml-40 lg:-ml-20" style={{fontFamily: 'Gilroy Bold'}}>03</h1>
      <div ref={leftSection} className="flex opacity-0 max-w-xl gap-y-5 flex-col w-full justify-center items-start">
        <div className="flex w-full justify-start gap-x-5 items-center">
          <hr className="w-[10%] h-0.5 bg-[#FBD784]"/>
          <p className="text-[#FBD784] uppercase xl:text-lg lg:text-sm tracking-widest" style={{fontFamily: 'Gilroy Bold'}}>where you go is the key</p>
        </div> 
        <h1 className="text-white text-start font-semibold leading-none xl:text-[88px] lg:text-[64px]" style={{fontFamily: 'Chronicle Display Semibold'}}>Understand your Map & Timing</h1>
        <p className="text-white xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Bold'}}>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
        <div className="flex gap-x-5 justify-start w-full items-center">
            <p className="text-[#FBD784] xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Bold'}}>read more</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FBD784" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </div>
      <img src="/timing.png" ref={image} className="w-full max-w-xl object-cover object-top h-[90%] opacity-0"/>
    </article>
  )
}
