// Skills.tsx
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaDocker, FaGitAlt, FaVuejs, FaJava, FaPhp, FaPython, FaBootstrap, FaGit, FaAws } from 'react-icons/fa';
import { SiTypescript, SiPython, SiJira, SiNextdotjs, SiTailwindcss, SiExpress, SiCypress, SiMongodb, SiMysql, SiFirebase, SiPostgresql, SiJavascript, SiFigma, SiStyledcomponents, SiPostman, } from 'react-icons/si';
import styles from './page.module.css'; // Importe o CSS Modules
import { IoScanCircleSharp } from 'react-icons/io5';
import { TbBrandReactNative } from 'react-icons/tb';

export default function Skills() {
    const skills = [
        { name: "Angular", icon: <FaAngular style={{ color: '#DD1B16' }} /> },
        { name: "Next.js", icon: <SiNextdotjs style={{ color: 'var(--accent)' }} /> },
        { name: "React", icon: <FaReact style={{ color: 'var(--accent)' }} /> },
        { name: "Vue.js", icon: <FaVuejs style={{ color: '#42B883' }} /> },
        { name: "HTML5", icon: <FaHtml5 style={{ color: '#E44D26' }} /> },
        { name: "CSS3", icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: '#38BDF8' }} /> },
        { name: "Node.js", icon: <FaNodeJs style={{ color: '#68A063' }} /> },
        { name: "Express", icon: <SiExpress style={{ color: 'var(--accent)' }} /> },
        { name: "Java", icon: <FaJava style={{ color: '#007396' }} /> },
        { name: "Testes Unit e Integração", icon: <SiCypress style={{ color: '#17202C' }} /> },
        { name: "Testes Automatizados", icon: <SiCypress style={{ color: '#17202C' }} /> },
        { name: "Testes End-to-End (E2E)", icon: <SiCypress style={{ color: '#17202C' }} /> },
        { name: "Cypress", icon: <SiCypress style={{ color: '#17202C' }} /> },
        { name: "MongoDB", icon: <SiMongodb style={{ color: '#47A248' }} /> },
        { name: "MySQL", icon: <SiMysql style={{ color: '#00758F' }} /> },
        { name: "Firebase", icon: <SiFirebase style={{ color: '#FFCA28' }} /> },
        { name: "PostgreSQL", icon: <SiPostgresql style={{ color: '#336791' }} /> },
        { name: "TypeScript", icon: <SiTypescript style={{ color: '#3178C6' }} /> },
        { name: "JavaScript", icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
        { name: "PHP", icon: <FaPhp style={{ color: '#777BB4' }} /> },
        { name: "Python", icon: <FaPython style={{ color: '#3776AB' }} /> },
        { name: "C#", icon: <IoScanCircleSharp style={{ color: '#239120' }} /> },
        { name: "React Native", icon: <TbBrandReactNative style={{ color: 'var(--accent)' }} /> },
        { name: "Responsive Web", icon: <FaCss3Alt style={{ color: 'var(--accent)' }} /> },
        { name: "Figma", icon: <SiFigma style={{ color: '#F24E1E' }} /> },
        { name: "Design System", icon: <SiFigma style={{ color: 'var(--accent)' }} /> },
        { name: "UI/UX Design", icon: <SiFigma style={{ color: 'var(--accent)' }} /> },
        { name: "Responsive Design", icon: <FaCss3Alt style={{ color: 'var(--accent)' }} /> },
        { name: "Angular Material", icon: <FaAngular style={{ color: '#DD1B16' }} /> },
        { name: "Bootstrap", icon: <FaBootstrap style={{ color: '#7952B3' }} /> },
        { name: "TailwindCSS", icon: <SiTailwindcss style={{ color: '#38BDF8' }} /> },
        { name: "Styled Components", icon: <SiStyledcomponents style={{ color: '#DB7093' }} /> },
        { name: "Scrum", icon: <SiJira style={{ color: '#0052CC' }} /> },
        { name: "Kanban", icon: <SiJira style={{ color: '#0052CC' }} /> },
        { name: "Git/GitHub/GitLab", icon: <FaGit style={{ color: '#F05032' }} /> },
        { name: "Docker", icon: <FaDocker style={{ color: '#2496ED' }} /> },
        { name: "Postman", icon: <SiPostman style={{ color: '#FF6C37' }} /> },
        { name: "AWS", icon: <FaAws style={{ color: '#FF9900' }} /> },
    ];

    return (
        <div className={styles.skillsGrid}>
            {skills.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillIcon}>{skill.icon}</div>
                    <div className={styles.skillName}>{skill.name}</div>
                </div>
            ))}
        </div>
    );
}