export default function Sobre() {
    return (
      <section id="sobre" className="p-8 max-w-6xl mx-auto min-h-screen flex flex-col lg:flex-row items-center gap-10">
        {/* Texto informativo */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-blue-700">Como Funciona?</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Oferecemos <strong>aulas personalizadas</strong>, individuais ou em pequenos grupos, para atender às necessidades específicas de cada aluno.
            Nossa equipe é formada por professores experientes, preparados para identificar e trabalhar as principais dificuldades.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Usamos uma <strong>metodologia moderna</strong> e dinâmica, com atividades práticas, recursos digitais e acompanhamento frequente.
            As aulas podem ser presenciais ou online, com horários flexíveis para se adaptarem à rotina da família.
          </p>
          <p className="text-lg leading-relaxed">
            Ao escolher nosso apoio, você garante um ensino de qualidade, com resultados reais e comunicação constante com os responsáveis.
          </p>
        </div>
  
        {/* Imagens ilustrativas */}
        <div className="flex-1 grid grid-cols-1 gap-4 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1600195077074-3613b15c1746?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
            alt="Professor ajudando aluno"
            className="rounded-lg shadow-md w-full h-60 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
            alt="Aula em grupo"
            className="rounded-lg shadow-md w-full h-60 object-cover"
          />
        </div>
      </section>
    );
  }
  