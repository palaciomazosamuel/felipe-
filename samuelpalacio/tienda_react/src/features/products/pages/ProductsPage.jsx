import products from "../services/products.json";

export function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-10 text-center text-green-800">
        Catálogo de Productos
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {products.map((producto) => (
          <div
            key={producto.id}
            className="w-72 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{producto.nombre}</h2>
              <p className="text-gray-600 mt-2">
                Precio:{" "}
                <span className="font-bold text-green-700">
                  ${producto.precio}
                </span>
              </p>

              <button className="mt-4 w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-300 transition">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
