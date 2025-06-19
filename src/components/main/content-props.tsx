


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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 w-full">
                    <div className="col-span-4 md:grid-cols-12 w-full xl:w-10/12">
                        <h1 className="capitalize md:w-full md:mx-0 text-2xl sm:text-2xl mx-auto w-full text-center lg:text-left md:text-3xl lg:text-3xl lg:w-10/12 xl:w-10/12 xl:text-3xl 2xl:text-3xl  text-[#041710] font-semibold">{title}</h1>
                    </div>
                    <div className="col-span-8 mx-0 flex items-start justify-start">
                        <p className="mx-auto xl:text-base text-md w-full text-left col-span-8">
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