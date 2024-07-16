"use client"

export default function FooterSection() {

    const currentYear = new Date().getFullYear()

  return (
    <footer className="max-w-screen-xl mx-auto flex mt-60 mb-10 lg:p-5 xl:p-0 justify-between items-stretch h-full w-full">
        <div className="flex flex-col max-w-sm justify-between items-stretch h-auto w-full">
            <div className="flex flex-col justify-center gap-y-2.5 xl:gap-y-5 items-start">
                <h1 className="xl:text-[32px] lg:text-2xl text-white tracking-widest" style={{fontFamily: 'Chronicle Display Bold'}}>MNTN</h1>
                <p className="text-white max-w-xs xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Bold'}}>Get out there & discover your next slope, mountain & destination!</p>
            </div>
            <p className="text-slate-500 xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Medium'}}>Copyright {currentYear} MNTN, Inc. Terms & Privacy</p>
        </div>
        <div className="flex justify-between items-start w-full max-w-xl">
            <div className="flex flex-col justify-between items-start h-auto gap-y-2.5 xl:gap-y-5">
                <h1 className="xl:text-2xl lg:text-base text-[#FBD784]" style={{fontFamily: 'Gilroy Bold'}}>More On The Blog</h1>
                <p className="text-white xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Medium'}}>About MNTN</p>
                <p className="text-white xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Medium'}}>Contributors & Writers</p>
                <p className="text-white xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Medium'}}>Write For Us</p>
                <p className="text-white xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Medium'}}>Contact Us</p>
                <p className="text-white xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Medium'}}>Privacy Policy</p>
            </div>
            <div className="flex flex-col justify-between items-start h-auto gap-y-2.5 xl:gap-y-5">
                <h1 className="xl:text-2xl lg:text-base text-[#FBD784]" style={{fontFamily: 'Gilroy Bold'}}>More On MNTN</h1>
                <p className="text-white xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Medium'}}>The Team</p>
                <p className="text-white xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Medium'}}>Jobs</p>
                <p className="text-white xl:text-lg lg:text-sm" style={{fontFamily: 'Gilroy Medium'}}>Press</p>
            </div>
        </div>
    </footer>
  )
}
