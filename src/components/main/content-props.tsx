import WidthContainer from "../width-container";


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
        <WidthContainer>
            <div className="w-full py-10 md:py-16 xl:py-24">
                <div className="flex flex-col lg:items-center gap-1 lg:justify-center items-start justify-start">
                    <h1 className="text-lg text-center w-full mx-auto uppercase text-[#041710]">{title}</h1>
                    <p className="mx-auto text-[10px] w-full text-center">
                        {label}
                    </p>    
                </div>
                <div className="w-full">
                    {content}
                </div>  

            </div>
        </WidthContainer>
    );
}