import Header from "@/components/portfolio-interactive/header/page";
import MyWindow from "@/components/my-window/page";
import style from './page.module.css';
import About from "@/components/portfolio-interactive/about/page";
import { MyWindowProps } from "@/types";
import Projects from "@/components/portfolio-interactive/projects/page";
import Skills from "@/components/portfolio-interactive/skills/page";
import Experience from "@/components/portfolio-interactive/experience/page";
import Contact from "@/components/portfolio-interactive/contact/page";
import Education from "@/components/portfolio-interactive/education/page";



export default function PortfolioInterativo() {

    const folder: MyWindowProps[] = [
        {
            title: 'Sobre Mim',
            type: 'browser',
            url: 'https://kleber-a.com',
            defaultPosition: { x: 50, y: 50 },
            defaultSize: { width: 500, height: 350 },
            children: <About />
        },
        {
            title: 'Projetos',
            type: 'folder',
            defaultPosition: { x: 50, y: 150 },
            defaultSize: { width: 600, height: 400 },
            children: <Projects />
        },
        {
            title: 'Habilidades',
            type: 'folder',
            defaultPosition: { x: 50, y: 250 },
            defaultSize: { width: 500, height: 300 },
        },
        {
            title: 'Experiência',
            type: 'folder',
            defaultPosition: { x: 50, y: 350 },
            defaultSize: { width: 550, height: 350 },
        },
        {
            title: 'Formação',
            type: 'folder',
            defaultPosition: { x: 50, y: 450 },
            defaultSize: { width: 500, height: 300 },
        },
        {
            title: 'Contato',
            type: 'contact',
            defaultPosition: { x: 50, y: 550 },
            defaultSize: { width: 500, height: 300 },
        },
        {
            title: 'Navegador',
            type: 'browser',
            url: 'https://kleber.dev',
            defaultPosition: { x: 50, y: 2200 },
            defaultSize: { width: 700, height: 500 },
        },
    ];

    const getContent = (title: string) => {
        switch (title) {
            case 'Sobre Mim':
                return <About />;
            case 'Projetos':
                return <Projects />;
            case 'Habilidades':
                return (
                    <Skills />
                );
            case 'Experiência':
                return <Experience />;
            case 'Formação':
                return <Education />;
            case 'Contato':
                return (
                    <Contact />
                );
            default:
                return <p>Conteúdo da pasta {title}...</p>;
        }
    };

    return (
        <div className={style.container}>

            <Header />
            <div className={style.workSpace} id="workspace">


                {folder.map((item, index) => (
                    <MyWindow
                        key={index}
                        title={item.title}
                        type={item.type}
                        url={item.url ?? ''}
                        defaultPosition={item.defaultPosition}
                        defaultSize={item.defaultSize}
                    >
                        {getContent(item.title)}
                    </MyWindow>
                ))}
            </div>

        </div>
    )
}