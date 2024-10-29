import { SiReact } from "react-icons/si";
import IconBox from "./iconBox";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";

export default function TechStack() {
    return(
        <>
            <section className="text-white text-center my-40 font-custom">
                <h2 className="text-2xl font-semibold text-gray-200 italic">
                    My Tech Stack
                </h2>
                <div className="flex flex-1 gap-3 justify-center items-center my-10">
                    <IconBox>
                        <RiNextjsFill className="w-full h-full font-extrabold " />
                    </IconBox>
                    <IconBox>
                        <SiReact className="w-full h-full font-extrabold text-[#00d8ff] " />
                    </IconBox>
                    <IconBox>
                        <BiLogoMongodb className="w-full h-full font-extrabold text-[#589636]" />
                    </IconBox>
                    <IconBox>
                        <SiExpress className="w-full h-full font-extrabold" />
                    </IconBox>
                    <IconBox>
                        <DiNodejsSmall className="w-full h-full font-extrabold text-[#68a063]" />
                    </IconBox>
                </div>
          </section>
        </>
    );
}