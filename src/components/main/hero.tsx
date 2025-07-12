import { Download } from "lucide-react";
import { TbHandFingerRight } from "react-icons/tb";
import Logo from "./logo";
import DialogModule from "./dialog-module";
import { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";



export default function Hero() {
  return (
    <div className='h-[98vh] w-full bg-[url("/hero-image.avif")] bg-center bg-cover'>
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 justify-end items-end py-10 md:py-16 w-full width-container ">
          <div className="flex flex-col items-start justify-start gap-0 md:gap-0 lg:gap-0 xl:gap-0">
            <Logo />
            <div className="w-10/12 md:w-full text-white capitalize text-2xl sm:text-2xl sm:leading-[3rem] md:text-5xl md:leading-[3.5rem] lg:w-11/12 lg:text-4xl 2xl:leading-[2.5rem] xl:text-3xl 2xl:text-4xl xl:w-8/12">
              Luxury living is now yours to experience
            </div> 
          </div>
            
          <div className="flex flex-col items-center justify-center md:justify-start md:items-start w-full gap-2 md:gap-6">
            <div className="w-full mx-auto text-white/80 text-lg md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-3xl text-left hidden md:block md:leading-[3rem]">
              Modern appartments, vilas and town, houses in Dubai from USD 354,000* 
            </div>
          <div className="flex items-start justify-start flex-col gap-4 sm:gap-4 md:gap-6 lg:gap-2 w-full md:mx-0 mx-auto md:flex-row">
            <DialogModule 
            triggerContent={<DialogDownload label="download bronchure" icon={Download} />} />
            <DialogModule 
            triggerContent={<DialogDownload label="Enquire Now" icon={TbHandFingerRight} className=" bg-transparent text-white border border-white"  />} />
            </div>
          </div>
    </div>
    </div>
  )
}

interface DialogDownloadProps {
  icon: IconType,
  label: string,
  className?: string;
}
const DialogDownload = ({
  icon: Icon,
  label,
  className
}: DialogDownloadProps) => {
  return (
    <div
      className={cn("rounded-md w-11/12 text-neutral-600 py-1.5 2xl:h-10 xl:px-1 text-center border-b flex justify-center items-center bg-white capitalize text-2xl gap-2 sm:text-2xl sm:h-14 h-10 md:text-2xl lg:text-2xl lg:py-2 xl:py-4 xl:text-xl xl:h-10 hover:bg-[#BB9A95] hover:text-white hover:border hover:border-[#BB9A95] text-wrap", className)}>
        <span className="text-wrap cursor-pointer">
          <Icon className="size-6 sm:size-6 md:size-6 xl:size-6" />
        </span>
          {label}
    </div>
  )
}

