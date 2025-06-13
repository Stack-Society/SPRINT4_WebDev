import React from 'react';

const Estatistica = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Estatísticas do Paciente</h1>

      <div className="bg-gray-100 rounded-xl p-4 shadow mb-6 flex items-center gap-6">
        <img 
          src="/joao.jpg" 
          alt="Foto do paciente João Silva"
          className="w-32 h-32 rounded-full object-cover border border-gray-300"
        />

        <div>
          <p className='text-black'><span className="font-semibold">Nome:</span> João Silva</p>
          <p className='text-black'><span className="font-semibold">Idade:</span> 10 anos</p>
          <p className='text-black'><span className="font-semibold">Quarto:</span> 204B</p>
          <p className='text-black'><span className="font-semibold">Dieta:</span> Hipocalórica</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow">
        <h2 className="text-xl font-semibold text-black mb-2">Notas das Refeições</h2>

        {/* Aqui você pode embutir o gráfico mais tarde */}
        <div className="h-96 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 rounded-lg">
          <iframe
            src="http://127.0.0.1:5000"
            title="Gráfico de notas"
            className="w-full h-96 rounded-lg border"
          />

        </div>
      </div>
    </div>
  );
};

export default Estatistica;
