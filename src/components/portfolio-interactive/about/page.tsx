// About.tsx
"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`${styles.title} ${styles.titleMd}`}
                >
                    Sobre <span className={styles.titleHighlight}>Mim</span>
                </motion.h1>

                <div className={`${styles.flexContainer} ${styles.flexLgRow}`}>
                    {/* Coluna da esquerda */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.profileImageContainer}>
                                    <Image
                                        src="/perfil.jpeg"
                                        alt="Foto de Perfil"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <h2 className={styles.name}>Kleber</h2>
                            <p className={styles.subtitle}>
                                Full-Stack Developer | Angular | React | Next | Node
                            </p>
                        </div>
                    </motion.div>

                    {/* Coluna da direita */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        // Removi classes utilitárias hardcoded que poderiam ser afetadas pelo tema
                        // Se 'flex flex-col gap-10 space-y-8' forem estilos específicos do tema,
                        // eles deveriam ser parte do page.module.css ou usar variáveis diretamente.
                        // Por simplicidade, vou manter como estão se eles forem utilitários Tailwind/globais.
                        className={`flex flex-col gap-10 space-y-8`}
                    >
                        {/* Sobre Mim */}
                        <div className={styles.card}>
                            <h3 className={styles.heading}>👋 Sobre Mim</h3>
                            <p className={styles.paragraph}>
                                Olá! Sou desenvolvedor Full Stack com paixão por transformar ideias em soluções digitais funcionais, escaláveis e intuitivas. Minha principal atuação é no desenvolvimento <b>front-end</b>, mas também possuo experiência no <b>back-end</b>, o que me permite ter uma visão completa dos projetos.
                                Minha trajetória na programação começou há 5 anos. Desde então, tive a oportunidade de atuar em diversos projetos que contribuíram diretamente para o meu desenvolvimento, tanto na criação de interfaces modernas quanto no desenvolvimento de APIs eficientes e bem estruturadas.
                            </p>
                            <p className={styles.paragraph}>
                                Tenho como principais tecnologias os frameworks Angular, React e Next.js, além do Node.js no back-end. Gosto de enfrentar desafios, resolver problemas complexos e entregar experiências de usuário de alta qualidade.
                                Atualmente, estou em busca de novos desafios e oportunidades que me permitam continuar crescendo profissionalmente e contribuir com soluções de alto impacto.
                            </p>
                        </div>

                        {/* Experiência */}
                        <div className={styles.card}>
                            <h3 className={styles.heading}>💼 Experiência</h3>
                            <ul className={styles.experienceList}>
                                <li>
                                    <div className={styles.experienceItemTitle}>
                                        Enacom - Desenvolvedor Front End - Mar/2023 - Jan/2025
                                    </div>
                                    <div className={styles.experienceItemDesc}>
                                        <p>• Desenvolvi soluções modernas e eficientes utilizando Angular com foco em alta performance e usabilidade.</p>
                                        <p>• Atuei em projetos estratégicos para grandes empresas dos setores de siderurgia, financeiro e energia, como Gerdau e Cemig, contribuindo para a transformação digital de seus negócios.</p>
                                        <p>• Criei Design System uma biblioteca de componentes padronizados para unificar e otimizar a experiência em projetos internos.</p>
                                        <p>• Implementei testes unitários utilizando Jasmine e Karma, garantindo a qualidade e a confiabilidade do código, com cobertura de testes para componentes, serviços e funções em Angular.</p>
                                        <p>• Trabalhei em ambiente ágil, aplicando a metodologia Scrum e utilizando ferramentas como Azure DevOps para gestão de projetos e integração contínua.</p>
                                        <p>• Entreguei interfaces responsivas, intuitivas e alinhadas às melhores práticas de desenvolvimento.</p>
                                        <p>• Trabalhei com bibliotecas gráficas como Chart.js, Plotly.js, e ApexCharts para criar visualizações de dados interativas e dinâmicas.</p>
                                        <p>• Utilizei Git, GitLab e NVM (Node Version Manager) para controle de versão, garantindo integração contínua e colaboração eficiente nos projetos.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.experienceItemTitle}>
                                        Compass. UOL - Desenvolvedor Front End / Trilha React Native no Scholarship Program - Jan/2022 - Abr/2022
                                    </div>
                                    <div className={styles.experienceItemDesc}>
                                        <p>• Desenvolvi projetos Mobile utilizando React Native.</p>
                                        <p>• Atuei em ambiente colaborativo com designers através do Figma, garantindo uma experiência de usuário consistente.</p>
                                        <p>• Realizei testes de API utilizando Postman e trabalhei com metodologias ágeis como Scrum, Jira, e Kanban para gerenciamento de projetos.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Skills */}
                        <div className={styles.card}>
                            <h3 className={styles.heading} style={{ marginBottom: "1rem" }}>
                                🚀 Skills
                            </h3>
                            <div className={styles.skillsContainer}>
                                {[
                                    "Angular",
                                    "Next",
                                    "React",
                                    "Vue.js",
                                    "HTML5/CSS3",
                                    "Tailwind CSS",
                                    "Node.js",
                                    "Express",
                                    "Java",
                                    "Testes Unitários e de Integração (Jasmine, Jest, Vitest, Karma)",
                                    "Testes Automatizados",
                                    "Testes End-to-End (E2E)",
                                    "Ferramentas: Cypress",
                                    "MongoDB",
                                    "MySQL",
                                    "Firebase",
                                    "PostgreSQL",
                                    "TypeScript",
                                    "JavaScript",
                                    "PHP",
                                    "Java",
                                    "Python",
                                    "C#",
                                    "React Native",
                                    "Responsive Web",
                                    "Figma",
                                    "Design System",
                                    "UI/UX Design",
                                    "Responsive Design",
                                    "Angular Material",
                                    "Bootstrap",
                                    "TailwindCSS",
                                    "Styled Components",
                                    "Scrum",
                                    "Kanban",
                                    "Git/GitHub/GitLab",
                                    "Docker",
                                    "Postman",
                                    "AWS"
                                ].map((skill,index) => (
                                    <span key={index} className={styles.skillBadge}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}