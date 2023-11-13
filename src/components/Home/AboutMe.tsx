import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
})

export const AboutMe = () => {
    return (
        <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
            <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
                <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">Prazer, sou <strong className="font-bold">Jair</strong>
                </h1>
                
                <div className="mb-12">
                    <h2 className={`${roboto.className} mb-12`}>Desenvolvedor Web Front-End</h2>
                    <Link href="/contatos" className="p-3 bg-jr-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Converse comigo!</Link>
                </div>
                <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
                    <li style={{ backgroundColor: "#2f74c0", color: "#fff"}} className="w-50 p-2 rounded-md">typescript</li>
                    <li style={{ backgroundColor: "#6bddfa", color: "#000"}} className="w-50 p-2 rounded-md">react</li>
                    <li style={{ backgroundColor: "#efd81d", color: "#000"}} className="w-50 p-2 rounded-md">javascript</li>
                    <li style={{ backgroundColor: "#000", color: "#fff"}} className="w-50 p-2 rounded-md">next.js</li>
                </ul>
            </div>
            <div className="relative">
                <Image src="https://avatars.githubusercontent.com/u/32220266?v=4"
                 alt="Foto do perfil"
                 unoptimized
                 width={450}
                 height={450}
                className="rounded-full"/>
            
                <div className="p-4 w-fit text-base leading-tight bg-jr-blue-500 rounded-xl text-black absolute -bottom-[0.75rem] sm:bottom-3">
                    <strong className="text-4xl">1+</strong>
                    <p>ano de experiência</p>
                </div>
            </div>
        </main>
    );
};