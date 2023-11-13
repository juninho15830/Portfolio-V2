import Head from "next/head";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500'],
})

const NotFound = () => {
    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <div className="flex flex-col items-center text-center mt-12 md:mt-24 gap-8 px-6 md:px-32">
                <h1 className="text-5xl md:text-7xl font-bold">404</h1>
                <p className="flex flex-col gap-8 md:gap-4 md:text-xl">
                    <span>Ops, não conseguimos encontrar esta página! </span>
                    <span>Clique no botão abaixo para ser redirecionado à página inicial</span>
                </p>
                <Link href="/" className={`${roboto.className} p-4 bg-jr-blue-500 rounded-xl text-black font-bold mt-5 md:mt-12 md:text-xl w-fit transition-all hover:bg-opacity-80`}>Ir para a página inical</Link>
            </div>
        </>
    )
}

export default NotFound;