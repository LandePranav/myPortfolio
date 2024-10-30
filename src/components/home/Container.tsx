import React from "react";

export default function Container({children}: {children: React.ReactNode}) {
    return(
        <div className="w-full mx-auto px-8 font-custom  max-w-lg md:max-w-4xl">
            {children}
        </div>
    );
}