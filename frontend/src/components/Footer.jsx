import React from 'react'

const Footer = () => {
  return (
    <>
    <hr />
      <footer class="bg-black text-white">
        <div class="max-w-7xl mx-auto px-6 py-10">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-700 pb-6">
      
      
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-bold tracking-wide">Stack Society</h2>
          <p class="text-sm text-gray-400 mt-1">Tecnologia, criatividade e inovação.</p>
        </div>
        
      
        <div class="flex gap-5">
          <a href="#" aria-label="WhatsApp" class="transition-transform hover:scale-110">
            <img src="./src/assets/whatsapp.png" alt="WhatsApp" class="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" class="transition-transform hover:scale-110">
            <img src="./src/assets/instagram.png" alt="Instagram" class="w-6 h-6" />
          </a>
          <a href="#" aria-label="Twitter" class="transition-transform hover:scale-110">
            <img src="./src/assets/twitter.png" alt="Twitter" class="w-6 h-6" />
          </a>
        </div>
      </div>

      
      <div class="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
        <p class="text-center md:text-left">&copy; 2025 Stack Society. Todos os direitos reservados.</p>
        <div class="flex gap-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-white transition-colors">Termos de uso</a>
          <a href="#" class="hover:text-white transition-colors">Política de privacidade</a>
          <a href="#" class="hover:text-white transition-colors">Contato</a>
        </div>
        </div>
      </div>
      </footer>
    </>
  )
}

export default Footer