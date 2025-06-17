import React from 'react';

const Estatistica = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Painel Nutricional - Paciente Pediátrico</h1>

      {/* Informações do Paciente */}
      <div className="bg-gray-100 rounded-2xl p-6 shadow-lg flex gap-6 items-center mb-8">
        <img 
          src="/joao.jpg" 
          alt="Foto do paciente João Silva"
          className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
        />

        <div className="text-base space-y-1">
          <p><span className="font-semibold">Nome:</span> João Silva</p>
          <p><span className="font-semibold">Idade:</span> 10 anos</p>
          <p><span className="font-semibold">Sexo:</span> Masculino</p>
          <p><span className="font-semibold">Quarto:</span> 204B</p>
          <p><span className="font-semibold">Dieta Prescrita:</span> Hipocalórica</p>
          <p><span className="font-semibold">Alergias:</span> Nenhuma registrada</p>
          <p><span className="font-semibold">Patologia Associada:</span> Obesidade Infantil</p>
        </div>
      </div>

      {/* Seção de Avaliação Nutricional */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2 text-black">Avaliação Nutricional</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Altura: 1,35m</li>
            <li>Peso: 43kg</li>
            <li>IMC: 23,6 (acima do ideal para a idade)</li>
            <li>Última avaliação: 13/06/2025</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2 text-black">Histórico de Refeições</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Café da manhã: 90% aceito</li>
            <li>Almoço: 70% aceito</li>
            <li>Lanche: 100% aceito</li>
            <li>Jantar: 65% aceito</li>
          </ul>
        </div>
      </div>

      {/* Comidas Preferidas e Menos Aceitas */}
      <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-black">Preferências Alimentares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-green-700 mb-1">🍽️ Comidas que ele mais gosta:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Arroz com feijão</li>
              <li>Pão com queijo</li>
              <li>Frango desfiado</li>
              <li>Banana amassada</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-1">🥦 Comidas que ele menos gosta:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Brócolis</li>
              <li>Purê de abóbora</li>
              <li>Peixe cozido</li>
              <li>Salada crua</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Gráfico de Notas */}
      <div className="bg-white rounded-2xl shadow-md p-6 mt-9">
        <h2 className="text-xl font-semibold text-black mb-4">Gráfico de Avaliação das Refeições</h2>

        <div className="h-96 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 rounded-lg">
          <iframe
            src="http://127.0.0.1:5000"
            title="Gráfico de notas"
            className="w-full h-full rounded-lg border"
          />
        </div>
      </div>


      <div className="bg-yellow-100 rounded-2xl p-6 shadow-md mt-8">
        <h2 className="text-xl font-semibold mb-2 text-black">🗨️ Comentário do Paciente</h2>
         <div className="text-3xl">👦🏻</div>
        <p className="text-sm italic text-gray-700">
          "Eu gostei do pão com queijo do lanche, mas o brócolis do almoço tem gosto estranho. Se tivesse mais arroz e menos coisa verde, eu comia tudo!"
        </p>
      </div>
    </div>
  );
};

export default Estatistica;
