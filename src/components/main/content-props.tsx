


type Props = {
 title: string;
 label: string;
 content: React.ReactElement;
}
export const ContentProps = ({
    title,
    label, 
    content, 
}: Props) => {
    return (
            <div className="width-container py-2 md:py-5 xl:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 ">
                    <div className="col-span-4 w-full xl:w-10/12">
                        <h1 className="capitalize text-left md:w-full md:mx-0 text-sm sm:text-md md:text-left md:text-lg lg:text-2xl lg:w-10/12 xl:w-10/12 xl:text-xl 2xl:text-2xl  text-[#041710] font-semibold">{title}</h1>
                    </div>
                    <div className="col-span-8 mx-0 flex items-start justify-start">
                        <p className="mx-auto xl:text-base text-[10px] w-full text-left col-span-8">
                         {label}
                        </p>   
                    </div>
                </div>
                <div className="w-full h-full pt-6">
                    {content}  
                </div>
            </div>
    );
}