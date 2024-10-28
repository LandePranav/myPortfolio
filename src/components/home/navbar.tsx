"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export default function Navbar() {
    const path = usePathname();
    return(
        <>
            <nav className="text-white font-custom py-4 px-8 mx-auto max-w-4xl">
                <ul className="flex justify-between items-center">
                    <div className="flex-1">
                        {
                            path !== "/resume" ? (
                                <Link href={'/resume'} className="underline underline-offset-4 font-light decoration-gray-400">
                                    resume
                                </Link>
                            ) : (
                                <Link href={'/'} className="underline underline-offset-4 font-light decoration-gray-400">
                                    home
                                </Link>
                            )
                        }
                    </div>
                    <div className="flex justify-evenly gap-4 text-lg md:text-xl">
                        <li>
                            <Link href={'https://twitter.com'}>
                                <FaXTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://github.com/LandePranav'}>
                                <FiGithub />
                            </Link>
                        </li>
                        <li>
                            <Link href={'https://www.linkedin.com/in/pranav-lande/'}>
                                <FaLinkedin />
                            </Link>
                        </li>

                    </div>
                </ul>
            </nav>
        </>
    );
}