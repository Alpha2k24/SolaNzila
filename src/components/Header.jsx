import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones (você pode usar outro pacote ou SVG)

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600">
                    SolaNzila
                </h1>


                {/* Ícone para mobile */}
                <button
                    className="md:hidden text-blue-700"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    {menuAberto ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-6 text-blue-700 font-medium">
                    <li><a href="#hero" className="border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300">Início</a></li>
                    <li><a href="#sobre" className="border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300">Como Funciona</a></li>
                    <li><a href="#beneficios" className="border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300">Benefícios</a></li>
                    <li><a href="#contato" className="border-b-2 border-transparent hover:border-blue-600 transition-colors duration-300">Contato</a></li>
                </ul>
            </nav>

            {/* Menu Mobile */}
            {menuAberto && (
                <ul className="md:hidden px-8 pt-4 pb-4 flex flex-col items-center gap-3 text-blue-500 font-medium border-t transition-opacity">
                    <li className="bg-blue-100 w-full text-center rounded py-2 hover:bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 hover:text-white">
                        <a href="#hero" onClick={() => setMenuAberto(false)}>Início</a>
                    </li>
                    <li className="bg-blue-100 w-full text-center rounded py-2 hover:bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 hover:text-white">
                        <a href="#sobre" onClick={() => setMenuAberto(false)}>Como Funciona</a>
                    </li>
                    <li className="bg-blue-100 w-full text-center rounded py-2 hover:bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 hover:text-white">
                        <a href="#beneficios" onClick={() => setMenuAberto(false)}>Benefícios</a>
                    </li>
                    <li className="bg-blue-100 w-full text-center rounded py-2 hover:bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 hover:text-white">
                        <a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a>
                    </li>
                </ul>
            )}

        </header>
    );
}
