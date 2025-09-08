import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-green-800 flex flex-col items-center w-full shadow-lg py-4">
      <div className="w-[80vw] flex items-center justify-between">

        {/* Logo / Nombre */}
        <NavLink
          to="/"
          className="text-yellow-400 text-3xl font-extrabold tracking-wide hover:text-yellow-300 transition-colors text-center"
        >
          Fútbol Store
        </NavLink>

        {/* Barra de búsqueda */}
        <div className="w-64">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-full border border-yellow-500 bg-green-900 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Buscar camisetas, balones..."
          />
        </div>
      </div>

      {/* Menú de navegación */}
      <nav className="flex justify-center gap-10 mt-4 w-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-colors ${
              isActive
                ? 'bg-yellow-400 text-black font-bold'
                : 'text-white hover:bg-yellow-300 hover:text-black'
            }`
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/productos"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-colors ${
              isActive
                ? 'bg-yellow-400 text-black font-bold'
                : 'text-white hover:bg-yellow-300 hover:text-black'
            }`
          }
        >
          Productos
        </NavLink>

        <NavLink
          to="/carrito"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md transition-colors ${
              isActive
                ? 'bg-yellow-400 text-black font-bold'
                : 'text-white hover:bg-yellow-300 hover:text-black'
            }`
          }
        >
          Carrito
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
