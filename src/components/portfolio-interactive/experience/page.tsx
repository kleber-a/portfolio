import styles from './page.module.css'; // Importe o CSS Modules

export default function Experience() {
    const experiences = [
        {
            company: "Enacom Group",
            role: "Front-end Developer",
            period: "Mar/2023 - Jan/2025",
            description: `
                • Desenvolvi soluções modernas e eficientes utilizando Angular com foco em alta performance e usabilidade.
                • Atuei em projetos estratégicos para grandes empresas dos setores de siderurgia, financeiro e energia, como Gerdau e Cemig, contribuindo para a transformação digital de seus negócios.
                • Criei Design System uma biblioteca de componentes padronizados para unificar e otimizar a experiência em projetos internos.
                • Implementei testes unitários utilizando Jasmine e Karma, garantindo a qualidade e a confiabilidade do código, com cobertura de testes para componentes, serviços e funções em Angular.
                • Trabalhei em ambiente ágil, aplicando a metodologia Scrum e utilizando ferramentas como Azure DevOps para gestão de projetos e integração contínua.
                • Entreguei interfaces responsivas, intuitivas e alinhadas às melhores práticas de desenvolvimento.
                • Trabalhei com bibliotecas gráficas como Chart.js, Plotly.js, e ApexCharts para criar visualizações de dados interativas e dinâmicas.
                • Utilizei Git, GitLab e NVM (Node Version Manager) para controle de versão, garantindo integração contínua e colaboração eficiente nos projetos.
            `
        },
        {
            company: "Compass.Uol",
            role: "Desenvolvedor Front-end / Trilha React Native no Scholarship Program",
            period: "Jan/2022 - Abr/2022",
            description: `
                • Desenvolvi projetos Mobile utilizando React Native.
                • Atuei em ambiente colaborativo com designers através do Figma, garantindo uma experiência de usuário consistente.
                • Realizei testes de API utilizando Postman e trabalhei com metodologias ágeis como Scrum, Jira, e Kanban para gerenciamento de projetos.
            `
        },
    ];

    return (
        <div className={styles.experienceContainer}>
            {experiences.map((exp, index) => (
                <div key={index} className={styles.experienceCard}>
                    <h3 className={styles.role}>
                        {exp.role} <span className={styles.period}>({exp.period})</span>
                    </h3>
                    <p className={styles.company}>{exp.company}</p>
                    <p className={styles.description}>{exp.description}</p>
                </div>
            ))}
        </div>
    );
}