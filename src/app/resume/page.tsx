import Container from "@/components/home/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Page() {
    return (
        <Container>
            <div className="w-full text-center font-custom overflow-x-hidden">
                <h1 className="text-xl text-white font-semibold">My Resume</h1>
                <div className="relative w-full max-w-xl h-[calc(100vw*1.4142)] sm:h-[calc(80vh*1.4142)] md:h-[calc(80vh*1.4142)] rounded-md my-10 overflow-hidden mx-auto">
                    <Image
                        src="/resume.jpg"
                        alt="resume"
                        fill
                        quality={100}
                        className="0bject-cover md:object-fill" // Keep object-cover to fill the parent
                    />
                </div>
                <a href="/myResume.pdf" rel="noopener noreferrer" download >
                    <Button variant="outline" className="mb-10">Download Resume</Button>
                </a>
            </div>
        </Container>
    );
}
