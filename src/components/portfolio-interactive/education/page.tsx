import { FaGraduationCap } from 'react-icons/fa'; // Importe o ícone
import styles from './page.module.css'; // Importe o CSS Modules

export default function Education() {
    const educationEntries = [
        {
            degree: "Bacharelado em Ciência da Computação",
            institution: "Universidade Centro Universitário Maurício de Nassau",
            period: "2019 - 2022",
            details: "Foco em desenvolvimento de software, algoritmos e estruturas de dados."
        }
    ];

    return (
        <section className={styles.educationSection}>
            <div className={styles.educationContainer}>
                <h2 className={styles.educationTitle}>
                    Minha <span className={styles.educationHighlight}>Formação</span>
                </h2>

                {educationEntries.map((entry, index) => (
                    <div key={index} className={styles.educationCard}>
                        <div className={styles.iconWrapper}>
                            <FaGraduationCap /> {/* Ícone de formatura */}
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.degree}>{entry.degree}</h3>
                            <p className={styles.institution}>{entry.institution}</p>
                            <p className={styles.period}>{entry.period}</p>
                            <p className={styles.details}>{entry.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}