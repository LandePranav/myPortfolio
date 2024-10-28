import Image from "next/image";

export default function Hero() {
    return(
        <section className="text-white">
            <div className="text-center flex justify-evenly items-center flex-col md:flex-row my-8">
              <div className="relative w-[28vh] h-[28vh] md:w-[30vh] md:h-[30vh]  rounded-full overflow-hidden border border-gray-700">
                <Image src={'/ronin.jpeg'} fill alt='profile' className="object-cover" />
              </div>
              <div className="text-left mt-8 md:m-0">
                <p className="font-thin text-sm">hi myself,</p>
                <h1 className="text-3xl font-extrabold">Pranav Lande</h1>
                <h2 className="text-xl font-medium text-gray-300">A Web Developer</h2>
                <h3 className="text-md font-light text-gray-400">MERN Stack</h3>
              </div>
            </div>
            <div className="text-center mt-20">
              &#x201C; From Concept to Code – Bringing Your Brand Online &#x201D;
            </div>
          </section>
    )
}