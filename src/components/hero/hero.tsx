import Link from "next/link";
import Logo from "./logo";
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <div className='h-[98vh] w-full bg-[url("/hero-2.jpg")] bg-center bg-cover'>
      <div className="bg-black/40 w-full h-full">
        <div className="h-full flex items-center flex-col justify-between 2xl:py-20 py-10 md:py-16 w-full">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-2 lg:gap-4">
            <Logo />
            <div className="w-10/12 md:w-6/12 mx-auto text-white uppercase text-xl md:text-2xl lg:w-11/12 lg:text-4xl xl:w-8/12 2xl:w-6/12 2xl:leading-[4.5rem] xl:text-5xl 2xl:text-6xl text-center font-medium">
              Luxury living is now yours to experience
            </div> 
            <div className="w-10/12 mx-auto text-white text-lg text-center font-semibold md:hidden">
              Modern appartments, vilas and town, houses in Dubai from USD 354,000* 
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full gap-8 xl:gap-16">
            <div className="w-10/12 mx-auto text-white text-lg md:w-8/12 md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center font-semibold hidden md:block">
              Modern appartments, vilas and town, houses in Dubai from USD 354,000* 
            </div>
          <div className="flex items-center justify-center flex-col gap-4 lg:gap-10 w-10/12 mx-auto md:flex-row">
            <Link href="w-full">
              <button
              className="rounded-full w-full text-neutral-600 py-1.5 text-center border-b flex justify-center items-center bg-white hover:bg-white/20 uppercase text-md px-6 gap-3 md:text-sm lg:text-2xl lg:px-10 lg:py-2 xl:py-4 xl:text-3xl">
                <span className="">
                  <Download className="size-4 xl:size-6" />
                </span>
                 download bronchure
              </button>
            </Link>

            <Link href="w-full">
              <button
              className="rounded-full w-full text-white py-1.5 text-center border flex justify-center items-center bg-transparent hover:bg-transparent/25 uppercase text-md px-12 gap-3 md:text- lg:text-2xl lg:px-16 lg:py-2 xl:py-4 xl:text-3xl">
                <span className="">
                  <ArrowRight className="size-4" />
                </span>
                 Enquire now
              </button>
            </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
