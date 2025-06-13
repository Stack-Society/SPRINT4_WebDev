import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = () => {
  const [cardapio, setCardapio] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/refeicoes')
    .then(response => {
      setCardapio(response.data);
    })
    .catch(error => {
      console.error('Erro ao buscar cardápio:', error);
    });
  }, []);

  return (
    <>
    <main className='font-roboto'>
      <h1 className='text-5xl flex justify-center mt-5'>Pratos do dia</h1>
      
      {/* Cards-cardapios */}
      <div className='mt-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  p-10'>
        {cardapio.map(item => (
          <div 
          key={item.id} 
          className='bg-white rounded-2xl shadow-md p-6 transition transform hover:scale-105 hover:scale-105 hover:shadow-lg '
          >
            <img 
            src={item.imagem} 
            alt=""
            className='border-10 border-green-400' 
            />
            <h2 className='text-2xl text-black font-semibold mt-3'>{item.refeicao}</h2>
            <p className='text-gray-600'>{item.descricao}</p>
            <button className='mt-3 bg-[#008000] p-3 rounded text-white hover:bg-[#808000] transition-colors duration-300'>Pedir</button>
          </div>
        ))}
      </div>
    </main>
    </>
  )
}

export default Home