import { CopyButton } from "@/components/commons/CopyButton";
import Head from "next/head";

const Contatos = () => {
    return (
        <>
            <Head>
                <title>Contato | Jair</title>
            </Head>
            <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px32">
                <h1 className="text-5xl md:text-7xl font-bold text-center">Contato</h1>
                <ul className="table mx-auto space-y-6 md:space-y-8">
                    <li className="md:text-xl">
                        <span className="font-bold">Email</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a href="mailto:jairredigolodev@gmail.com" className="text:sm md:text-lg text-slate-300 underline truncate" target="_blank">jairredigolodev@gmail.com</a>
                            <CopyButton textToCopy="jairredigolodev@gmail.com"/>
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">Linkedin</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a href="https://www.linkedin.com/in/jairredigolojunior"  className="text:sm md:text-lg text-slate-300 underline truncate" target="_blank">https://www.linkedin.com/in/jairredigolojunior</a>
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">GitHub</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a href="https://github.com/juninho15830" className="text:sm md:text-lg text-slate-300 underline truncate" target="_blank">https://github.com/juninho15830</a>
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">Whatsapp</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a href="https://wa.me/5517996234888" className="text:sm md:text-lg text-slate-300 underline truncate" target="_blank">+55 (17)99623-4888</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Contatos;