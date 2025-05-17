export default function Contato() {
    return (
      <section id="contato" className="bg-white py-12 px-6">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Agende uma aula experimental
          </h2>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Nome do responsável"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Ano escolar do aluno"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg text-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    );
  }
  