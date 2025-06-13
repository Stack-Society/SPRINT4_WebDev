import React from 'react'


const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center   transition-colors">
      <form className="w-full max-w-sm p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white text-center">
          Entrar
        </h2>

        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="seu@email.com"
          />
        </label>

        <label className="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          Senha
          <input
            type="password"
            name="password"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="********"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-md bg-teal-600 px-4 py-2 text-white font-semibold hover:bg-teal-700 transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
