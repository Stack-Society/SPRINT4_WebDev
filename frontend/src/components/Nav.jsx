import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './Themecontext'; // ajuste o caminho se estiver em outra pasta

const Nav = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <header className='bg-[#e6e6fa] dark:bg-gray-800'>
        <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
          <Link to="/" className='block text-teal-800 dark:text-white'>Hospital Sabará</Link>

          <div className='flex flex-1 items-center justify-end md:justify-between'>
            <nav aria-label='Global' className='hidden md:block'>
              <ul className='flex items-center gap-6 text-sm'>
                <li>
                  <Link to="/Estatistica" className='text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75'>Estatísticas</Link>
                </li>
                <li>
                  <Link to="/Contato" className='text-gray-500 dark:text-gray-300 transition hover:text-gray-500/75'>Contato</Link>
                </li>
              </ul>
            </nav>

            <div className='flex items-center gap-4'>
              <button
                onClick={toggleTheme}
                className='rounded px-3 py-1 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700'
              >
                {isDarkMode ? '☀️ Claro' : '🌙 Escuro'}
              </button>

              <div className='sm:flex sm:gap-4'>
                <Link to="/Login" className='block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700'>Login</Link>
                <Link to="/Registrar" className='hidden rounded-md bg-gray-100 px-5 p-2.5 text-sm font-medium text-teal-600 transition hover:text-gray-600/75 sm:block'>Registrar</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Nav;
