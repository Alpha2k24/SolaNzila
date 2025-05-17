export default function Hero() {
    return (
      <section id="hero" className="bg-linear-to-r from-cyan-500 to-blue-500 gap-40 md:gap-2 text-white pt-30 pb-15 p-7 md:p-10 text-center h-dvh md:min-h-screen flex flex-col md:justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold">Aulas de Apoio <br className="md:hidden" /> Sola Nzila</h1>
        <button className="md:hidden px-8 py-3 bg-white text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition cursor-pointer shadow-2xl hover:shadow-white">
          Agende a sua primeira aula
        </button>
        <p className="mt-6 text-xl max-w-2xl italic">Ajude seu filho a alcançar o sucesso escolar com reforço sob medida.</p>
        <button className="hidden md:inline mt-8 px-8 py-3 bg-white text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition cursor-pointer shadow-2xl hover:shadow-white">
          Agende a sua primeira aula
        </button>
      </section>
    );
  }
  