import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './page.module.css'; // Importe o CSS Modules

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <a
                href="mailto:kleberandrade1998@hotmail.com" // Lembre-se de colocar seu email real aqui
                className={styles.contactLink}
            >
                <FaEnvelope className={styles.contactIcon} /> kleberandrade1998@hotmail.com
            </a>
            <a
                href="https://github.com/kleber-a" // Lembre-se de colocar seu perfil do GitHub real aqui
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
            >
                <FaGithub className={styles.contactIcon} /> github.com/kleber-a
            </a>
            <a
                href="https://www.linkedin.com/in/kleber-andrade" // Lembre-se de colocar seu perfil do LinkedIn real aqui
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
            >
                <FaLinkedin className={styles.contactIcon} /> linkedin.com/in/kleber-andrade
            </a>
        </div>
    );
}