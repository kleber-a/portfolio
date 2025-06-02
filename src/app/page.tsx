"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { Power } from "lucide-react";
import clsx from "clsx";
import PortfolioPadrao from "./portfolio-standard/page";

export default function App() {
  const { toggleTheme } = useTheme();
  const router = useRouter();

  const [isTurningOn, setIsTurningOn] = useState(false);

  const handleClick = () => {
    toggleTheme();
    setIsTurningOn(true);

    setTimeout(() => {
      router.push("/users"); // Altere para sua rota desejada
    }, 2000); // Tempo da animação (2 segundos)
  };

  return (
    // <div
    //   className={clsx(
    //     "relative w-screen h-screen overflow-hidden flex items-center justify-center transition-all duration-700",
    //     isTurningOn ? "bg-black animate-fade-in" : "bg-neutral-900"
    //   )}
    // >
    //   {!isTurningOn && (
    //     <button
    //       onClick={handleClick}
    //       className="text-amber-50 w-[70px] h-[70px] p-[10px] rounded-full cursor-pointer
    //              hover:bg-neutral-700 active:scale-95 transition-all duration-200 shadow-lg 
    //              flex items-center justify-center"
    //     >
    //       <Power size={40} />
    //     </button>
    //   )}

    //   {isTurningOn && (
    //     <div className="w-full h-full flex items-center justify-center bg-black">
    //       <div className="animate-pulse text-amber-100 text-3xl">Starting...</div>
    //     </div>
    //   )}
    // </div>
    <PortfolioPadrao />
  );
}
