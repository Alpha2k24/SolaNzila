export default function Beneficios() {
    const beneficios = [
      {
        titulo: "📚 Reforço escolar completo",
        descricao: "Apoio em matemática, português, ciências e outras disciplinas com material didático próprio.",
      },
      {
        titulo: "👩‍🏫 Professores experientes",
        descricao: "Equipe qualificada, empática e preparada para lidar com diferentes perfis de alunos.",
      },
      {
        titulo: "🎯 Atendimento personalizado",
        descricao: "Plano de estudos adaptado às dificuldades e ao ritmo de cada aluno.",
      },
      {
        titulo: "💬 Feedback aos pais",
        descricao: "Relatórios periódicos com progresso, pontos fortes e recomendações.",
      },
      {
        titulo: "🕒 Flexibilidade de horários",
        descricao: "Aulas presenciais ou online, com horários que se adaptam à rotina da família.",
      },
      {
        titulo: "🧠 Desenvolvimento de habilidades",
        descricao: "Trabalhamos também aspectos como organização, foco, autoestima e motivação.",
      },
    ];
  
    return (
      <section id="beneficios" className="bg-linear-to-r from-cyan-500 to-blue-500 py-20">
        <h2 className="text-center text-3xl font-bold mb-10 text-white">
          Por que escolher nosso apoio?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {beneficios.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
              <p className="text-gray-700">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  