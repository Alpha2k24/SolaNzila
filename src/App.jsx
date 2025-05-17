import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Beneficios from './components/Beneficios';
import Contato from './components/Contato';
import Header from './components/Header';
import RevealOnScroll from './components/Reveal';

function App() {
  return (
    <div>
      <Header />
      <RevealOnScroll><Hero /></RevealOnScroll>
      <RevealOnScroll><Sobre /></RevealOnScroll>
      <RevealOnScroll><Beneficios /></RevealOnScroll>
      <RevealOnScroll><Contato /></RevealOnScroll>
      <footer className="bg-blue-600 hover:bg-blue-900 text-white text-center p-4 mt-10 font-medium tracking-wide select-none transition-colors duration-300">
        <span className="block w-16 h-1 mx-auto mb-2 rounded-sm bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 opacity-80"></span>
        © 2025 Aulas de Apoio. Todos os direitos reservados a GhostGrizzly.
      </footer>


    </div>
  );
}

export default App;
