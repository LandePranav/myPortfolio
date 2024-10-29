"use client"
import { projects } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";

export default function ProjectSection() {
    return(
        <>
            <section className="text-white mb-20 w-full">
            <h2 className="text-2xl  font-custom my-20 border-b-2 border-gray-500 w-fit mx-auto pb-1">
              My Projects
            </h2>
            <div className="flex flex-col justify-center items-center gap-16">
              {projects.map((project) => (
                <div key={project.title} className="flex w-full flex-col justify-between md:flex-row gap-6 md:gap-10 overflow-hidden">
                    <Link href={project.link} target="_blank" className="md:flex md:items-center md:justify-start ">
                      <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0, x:-100}}
                        transition={{duration:0.7, easeOut}}
                        className="relative w-[75vw] h-[35vw] max-w-[460px] md:w-[40vh] md:h-[21vh] overflow-hidden rounded-lg"
                        >
                        <Image src={project.image} alt="project image" fill quality={100} className="object-cover" />
                      </motion.div>
                    </Link>
                  <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:0.7, easeOut}}
                    className="flex flex-1 flex-col gap-1 overflow-hidden">
                    <h2 className="text-xl font-semibold text-gray-200">
                      <Link href={project.link} target="_blank">
                        {project.title}
                      </Link>
                    </h2>
                    <h3 className="italic text-gray-400">
                      {project.deps}
                    </h3>
                    <ul className="text-sm text-gray-500 font-light">
                      {project.description.map((point, index) => (
                        <li key={index}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </section>
        </>
    );
}