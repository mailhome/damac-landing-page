import Link from "next/link";
import Logo from "./logo";
import { Download } from "lucide-react"
import { TbHandFingerRight } from "react-icons/tb"
import { Button } from "../ui/button";



export default function Hero() {
  return (
    <div className='h-[98vh] w-full bg-[url("/hero-image.avif")] bg-center bg-cover'>
        <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-end items-end py-10 md:py-16 w-full width-container ">
          <div className="flex flex-col items-start justify-start gap-2 md:gap-2 lg:gap-2 xl:gap-6">
            <Logo />
            <div className="w-10/12 md:w-6/12  text-white capitalize text-lg md:text-2xl lg:w-11/12 lg:text-4xl 2xl:leading-[3rem] xl:text-3xl 2xl:text-4xl xl:w-8/12">
              Luxury living is now yours to experience
            </div> 
          </div>
            
          <div className="flex flex-col items-center justify-center w-full gap-2 xl:gap-8">
            <div className="w-10/12 mx-auto text-white/80 text-lg md:w-8/12 md:text-xl lg:text-3xl xl:text-4xl 2xl:text-3xl text-left hidden md:block">
              Modern appartments, vilas and town, houses in Dubai from USD 354,000* 
            </div>
          <div className="flex items-start justify-start flex-col gap-2 lg:gap-10 w-11/12 md:w-8/12 mx-auto md:flex-row">
            <Link  href="#" className="w-full 2xl:w-auto">
              <Button
                variant="outline" 
                className="rounded-md w-full text-neutral-600 py-1.5 2xl:h-10 text-center border-b flex justify-center items-center bg-white capitalize text-sm px-6 gap-3 md:text-sm lg:text-2xl lg:px-10 lg:py-2 xl:py-4 xl:text-xl hover:bg-emerald-950 hover:text-white hover:border hover:border-emerald-950">
                  <span className="">
                  <Download className="size-3 sm:size-4 md:size-4 xl:size-6" />
                </span>
                 download bronchure
              </Button>
            </Link>

            <Link  href="#" className="w-full 2xl:w-3/12 lg:hidden">
              <Button
                variant="outline" 
                className="rounded-md w-full text-white py-1.5 2xl:h-14 text-center border flex justify-center items-center bg-transparent  uppercase text-sm md:text-md px-24 2xl:px-40 gap-3 md:text- lg:text-2xl lg:px-16 lg:py-2 xl:py-4 xl:text-xl hover:bg-emerald-950 hover:text-white hover:border hover:border-emerald-950">
                  <TbHandFingerRight className="size-3 sm:size-4 md:size-4 xl:size-10" />
                  <span className="">
                    Enquire now
                  </span>
              </Button>
            </Link>
            </div>
          </div>
        
    </div>
    </div>
  )
}
