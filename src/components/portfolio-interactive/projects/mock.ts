type FileProps = {
    name: string;
    type: "text" | "link";
    content?: string;
    url?: string;
};

type FolderProps = {
    title: string;
    files: FileProps[];
};

export const project: FolderProps[] = [
    {
        title: "FinWallet",
        files: [
            {
                name: "ReadMe.txt",
                type: "text",
                content: `
        # 💰 Fin Wallet

        Aplicação de carteira financeira feita com **Next.js** e **TypeScript**.

        ### 🚀 Funcionalidades
        - Cadastro e autenticação de usuários
        - Operações de **depósito**, **transferência** e **reversão**
        - Histórico de transações
        - Proteção de rotas e validação de dados

        ### 🛠️ Tecnologias
        - Next.js (Fullstack)
        - TypeScript
        - MongoDB
        - NextAuth
        - Zod
        - Docker
        - Jest

        ### ▶️ Como rodar
        -npm install
        -npm run dev
    `,
            },
            { name: "Repositório", type: "link", url: "https://github.com/kleber-a/fin-wallet" },
        ],
    },
    {
        title: "Computer Store",
        files: [
            {
                name: "Readme.txt",
                type: "text",
                content:
                    `
                        Layout
                        Page Home
                        Page Contato

                        💻 Tecnologias
                        Este projeto foi desenvolvido utilizando as seguintes tecnologias:

                        Angular
                        TypeScript
                        SCSS
                        Node.js
                        Git
                    `,
            },
            { name: "Repositório", type: "link", url: "https://github.com" },
            { name: "Deploy", type: "link", url: "https://vercel.com" },
        ],
    },
];







