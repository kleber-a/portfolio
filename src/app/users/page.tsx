"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Terminal, UserCircle, Loader2 } from "lucide-react"; // Usando lucide-react para ícones
import { motion, AnimatePresence } from "framer-motion";
import styles from './page.module.css'; // Importe o CSS Modules

export default function UsersLogin() {
    const router = useRouter();
    const [selectedUser, setSelectedUser] = useState<number | null>(null);

    const users = [
       {
            id: 1,
            name: "Portfólio Padrão",
            description: "Versão Web/Mobile",
            icon: <UserCircle size={64} className="text-blue-400" />,
            route: "/portfolio-standard",
        },
        {
            id: 2,
            name: "Portfólio Interativo",
            description: "Versão Web",
            icon: <Terminal size={64} className="text-amber-400" />,
            route: "/portfolio-interactive",
        }
    ];

   const handleSelect = async (id: number, route: string) => {
    if (selectedUser !== null) return; // Previne seleção múltipla
    setSelectedUser(id);

    
    setTimeout(async() => {
        router.push(route);
        if (id === 2) { // Se for o Portfólio Interativo
            const elem = document.documentElement;
            if (elem.requestFullscreen) {
                await elem.requestFullscreen();
            } else if ((elem as any).webkitRequestFullscreen) { /* Safari */
                (elem as any).webkitRequestFullscreen();
            } else if ((elem as any).msRequestFullscreen) { /* IE11 */
                (elem as any).msRequestFullscreen();
            }
        }
    }, 1500); // tempo para a animação + loading
};

    return (
        <div className={styles.loginContainer}>
            <div className={styles.cardGrid}>
                <AnimatePresence>
                    {users.map(({ id, name, description, icon, route }) => {
                        const isSelected = selectedUser === id;
                        const isHidden = selectedUser !== null && !isSelected;

                        return (
                            <motion.button
                                key={id}
                                onClick={() => handleSelect(id, route)}
                                initial={{ opacity: 0, scale: 0.8, y: 50 }} // Animação inicial mais suave
                                animate={
                                    isSelected
                                        ? { scale: 1.1, opacity: 1, y: 0 } // Card selecionado fica um pouco maior
                                        : isHidden
                                        ? { opacity: 0, scale: 0.7, y: -50 } // Cards escondidos diminuem e sobem
                                        : { opacity: 1, scale: 1, y: 0 } // Cards não selecionados e visíveis
                                }
                                exit={{ opacity: 0, scale: 0.7, y: -50 }} // Animação de saída
                                transition={{ duration: 0.6, ease: "easeOut" }} // Transição mais suave
                                className={`${styles.userCard} ${isSelected ? styles.selected : ''} ${isHidden ? styles.hidden : ''}`}
                                disabled={selectedUser !== null} // Desabilita cliques enquanto um está selecionado
                            >
                                {isSelected ? (
                                    <motion.div
                                        initial={{ opacity: 0, rotate: 0 }}
                                        animate={{ opacity: 1, rotate: 360 }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className={styles.loadingSpinner}
                                    >
                                        <Loader2 size={64} /> {/* Removido text-amber-400 e animate-spin */}
                                    </motion.div>
                                ) : (
                                    icon
                                )}
                                <h3 className={styles.cardTitle}>{name}</h3>
                                <p className={styles.cardDescription}>{description}</p>
                            </motion.button>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}