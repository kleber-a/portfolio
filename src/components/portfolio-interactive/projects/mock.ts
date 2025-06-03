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
                content:`Computer-Store é uma aplicação web desenvolvida com Angular que simula uma loja de informática. Acesse o projeto online para visualizar o resultado final.`,
            },
            { name: "Repositório", type: "link", url: "https://github.com/kleber-a/computer-store" },
            { name: "Deploy", type: "link", url: "https://kleber-a.github.io/computer-store/produtos" },
        ],
    },
        {
        title: "Game Daily",
        files: [
            {
                name: "Readme.txt",
                type: "text",
                content:`GameDaily é uma aplicação web desenvolvida com Next.js para registrar os jogos que você joga no dia a dia e manter um histórico simples e rápido, funcionando como um diário gamer pessoal.`,
            },
            { name: "Repositório", type: "link", url: "https://github.com/kleber-a/gameDaily" },
            { name: "Deploy", type: "link", url: "https://game-daily.vercel.app/" },
        ],
    },
    {
        title: "Calling System",
        files: [
            {
                name: "Readme.txt",
                type: "text",
                content:`Projeto desenvolido em React para gerenciar solicitações de chamados de uma empresa.`,
            },
            { name: "Repositório", type: "link", url: "https://github.com/kleber-a/calling-system" },
            { name: "Deploy", type: "link", url: "https://calling-system-gilt.vercel.app/" },
        ],
    },
    {
        title: "PokeDex",
        files: [
            {
                name: "Readme.txt",
                type: "text",
                content:`Uma aplicação que simula uma pokedex onde é possivel procurar os pokemons pelo nome e acessar suas informações.`,
            },
            { name: "Repositório", type: "link", url: "https://github.com/kleber-a/pokedex-angular" },
            { name: "Deploy", type: "link", url: "https://pokedex-angular-eight-delta.vercel.app/" },
        ],
    },
     {
        title: "Compass Flix",
        files: [
            {
                name: "Readme.txt",
                type: "text",
                content:`O aplicativo compass flix foi feito para consultar os dados dos seus filmes preferidos. Este projeto foi criado para aplicação em grupo do programa de estágio na Compass.`,
            },
            { name: "Repositório", type: "link", url: "https://github.com/kleber-a/Compass-Flix" }
        ],
    },
];







