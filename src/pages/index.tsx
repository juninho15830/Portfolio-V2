import { AboutMe } from "@/components/Home/AboutMe";
import { Projects } from "@/components/Home/Projects";
import { Footer } from "@/components/commons/Footer";
import Head from "next/head";

const Home = () => {
  const projects = [
    {
      slug: 'https://juninho15830.github.io/Html-CSS/Desafios/des010/pacote-projeto-d010/#',
      name: 'Projeto Android',
      image: {
        url: 'https://i.imgur.com/Bx6a2zE.png',
        alt: 'Página contando a história do mascote do android',
      },
    },
    {
      slug: 'https://juninho15830.github.io/Html-CSS/Desafios/des012/pacote-d012/#',
      name: 'Cordel Moderno',
      image: {
        url: 'https://i.imgur.com/CmxAk1e.png',
        alt: 'Cordel moderno de Milton Duarte com fundo paralax',
      },
    },
    {
      slug: 'https://juninho15830.github.io/Curso-Web-Full-Stack/Front-End/HTML-CSS/Projeto-01/',
      name: 'Decoradores de Ambientes',
      image: {
        url: 'https://i.imgur.com/dFG0BjT.png',
        alt: 'Página de apresentação de decoradores de ambientes',
      },
    },
    {
      slug: 'https://juninho15830.github.io/Curso-Web-Full-Stack/Front-End/HTML-CSS/Projeto-02/',
      name: 'Página de Academia',
      image: {
        url: 'https://i.imgur.com/vXWoLGx.png',
        alt: 'Página de apresentação de uma academia',
      },
    },
    {
      slug: 'https://juninho15830.github.io/Curso-Web-Full-Stack/Front-End/HTML-CSS/Projeto-03/',
      name: 'Formulário',
      image: {
        url: 'https://i.imgur.com/v0bKPIn.png',
        alt: 'Projeto de um formulário',
      },
    },
    {
      slug: 'https://juninho15830.github.io/Curso-Web-Full-Stack/Front-End/HTML-CSS/Projeto-04/',
      name: 'Desenvolvedor Web',
      image: {
        url: 'https://i.imgur.com/VDJhoi5.png',
        alt: 'Página de apresentação de desenvolvedor web',
      },
    },
    {
      slug: 'https://juninho15830.github.io/Curso-Web-Full-Stack/Front-End/HTML-CSS/Projeto-05/',
      name: 'Projeto Designer',
      image: {
        url: 'https://i.imgur.com/TYNJZ0e.png',
        alt: 'Página de apresentação de um designer',
      },
    },
    {
      slug: 'https://juninho15830.github.io/Curso-Web-Full-Stack/Front-End/JavaScript/Projetos%20em%20JavaScript/The%20Witcher/',
      name: 'Projeto The Witcher',
      image: {
        url: 'https://i.imgur.com/5ca8jlW.png',
        alt: 'Página de seleção de personagens do game The Witcher',
      },
    },
    {
      slug: 'https://juninho15830.github.io/Curso-Web-Full-Stack/Front-End/JavaScript/Projetos%20em%20JavaScript/Focus%20timer/',
      name: 'Timer Pomodoro',
      image: {
        url: 'https://i.imgur.com/kQL7FSH.png',
        alt: 'Timer pomodoro',
      },
    },
    {
      slug: 'https://juninho15830.github.io/Curso-Web-Full-Stack/Front-End/JavaScript/Projetos%20em%20JavaScript/Calculadora%20IMC/',
      name: 'Calculadora IMC',
      image: {
        url: 'https://i.imgur.com/InuRQCV.png',
        alt: 'Calculadora IMC',
      },
    },
    {
      slug: 'https://juninho15830.github.io/Curso-Web-Full-Stack/Front-End/JavaScript/Projetos%20em%20JavaScript/Jogo%20da%20advinhacao%20com%20HTML%20e%20CSS/',
      name: 'Jogo da advinhação',
      image: {
        url: 'https://i.imgur.com/vCvJuFp.png',
        alt: 'Jogo de advinhação de números',
      },
    },
    {
      slug: 'https://juninho15830.github.io/Curso-Web-Full-Stack/Front-End/JavaScript/Projetos%20em%20JavaScript/Github%20favorites/',
      name: 'Favoritos do GitHub',
      image: {
        url: 'https://i.imgur.com/u4IcjgR.png',
        alt: 'Lista de usuários favoritos do GitHub',
      },
    },
    {
      slug: 'https://juninho15830.github.io/JavaScript/Exercicios%20Praticos/AulaEx01/ex016.html',
      name: 'Hora do dia',
      image: {
        url: 'https://i.imgur.com/tLGxcyp.png',
        alt: 'Dia e hora atual com uma imagem que altera entre manhã, tarde e noite',
      },
    },
    {
      slug: 'https://juninho15830.github.io/JavaScript/Exercicios%20Praticos/AulaEx02/ex017.html',
      name: 'Verificador de Idade',
      image: {
        url: 'https://i.imgur.com/oWWe1rN.png',
        alt: 'Verificador de idade indicando se você é jovem ou velho',
      },
    },
    {
      slug: 'https://juninho15830.github.io/JavaScript/Exercicios%20Praticos/AulaEx03/ex020.html',
      name: 'Contador',
      image: {
        url: 'https://i.imgur.com/gadzPvm.png',
        alt: 'Contador automatico, indique o valor inical, final e o espaço entre os números',
      },
    },
    {
      slug: 'https://juninho15830.github.io/JavaScript/Exercicios%20Praticos/AulaEx04/ex021.html',
      name: 'Gerador de Tabuada',
      image: {
        url: 'https://i.imgur.com/yV8PoSQ.png',
        alt: 'Gerador de tabuada',
      },
    },
    {
      slug: 'https://juninho15830.github.io/JavaScript/Exercicios%20Praticos/AulaEx05/ex028.html',
      name: 'Analizador de Números',
      image: {
        url: 'https://i.imgur.com/BmhoWHd.png',
        alt: 'Analiza quantidades de números, qual o maior, menor, a media e a soma dos adicionados',
      },
    },
  ]

  return (
    <>
      <Head>
        <title>Sobre mim | Jair</title>
        <meta 
          name="description"
          content="Desenvolvedor Web Front-End"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe />
        <Projects projects={projects}/>
      </div>
      <Footer />
    </>
  );
};

export default Home;