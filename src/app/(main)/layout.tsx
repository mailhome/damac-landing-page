import Footer from "@/components/footer/footer";
import React from "react";

type Props = {
 children: React.ReactNode;
}

const MainLayout = ({
    children
}: Props) => {
    return ( 
        <div className="min-h-screen flex flex-col antialiased justify-between w-full">
            <div className="flex-1 flex items-start justify-start h-full">
                { children }
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;