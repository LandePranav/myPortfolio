import Container from "@/components/home/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Page() {
    return (
        <Container>
            <div className="w-full text-center font-custom overflow-x-hidden">
                <div className="flex justify-between items-center mt-5">
                    <h1 className="text-xl text-white">resume</h1>
                    <a href="/myResume.pdf" rel="noopener noreferrer" download >
                        <Button variant="outline">Download</Button>
                    </a>
                </div>
                <div className="relative w-full max-w-xl h-[calc(100vw*1.4142)] sm:h-[calc(80vh*1.4142)] md:h-[calc(80vh*1.4142)] rounded-md my-10 overflow-hidden mx-auto">
                    <Image
                        src="/myResume.png"
                        alt="resume"
                        fill
                        quality={100}
                        className="0bject-cover md:object-fill" // Keep object-cover to fill the parent
                    />
                </div>
            </div>
        </Container>
    );
}
