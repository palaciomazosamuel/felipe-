import { NavLink } from "react-router-dom";
import products from "../../products/services/products.json";

function LandingPage() {
  return (
    <div className="flex flex-col items-center text-center w-full">
      
      
      <section
        className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white max-w-2xl px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Vive la pasión del <span className="text-yellow-400">Fútbol</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Descubre camisetas, balones y accesorios para hinchas y jugadores.
          </p>
          <NavLink
            to="/productos"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-yellow-300 hover:scale-105 transition-transform"
          >
            Ver productos ⚽
          </NavLink>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="py-20 px-6 w-full max-w-7xl">
        <h2 className="text-4xl font-extrabold mb-12 text-green-800 text-center">
          🏆 Productos Destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.slice(0, 3).map((producto) => (
            <div
              key={producto.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition"
            >
              <div className="overflow-hidden">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold">{producto.nombre}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {producto.descripcion.slice(0, 70)}...
                </p>
                <p className="text-green-700 font-bold mt-4 text-lg">
                  ${producto.precio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
