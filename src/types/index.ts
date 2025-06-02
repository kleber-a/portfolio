export type MyWindowProps = {
    defaultPosition: { x: number; y: number };
    defaultSize: { width: number; height: number };
    title: string;
    children?: React.ReactNode; // ⬅️ Aqui ficou opcional
    type?: "folder" | "browser" | "contact";
    url?: string;
};