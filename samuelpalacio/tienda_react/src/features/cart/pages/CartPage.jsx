export function CartPage() {
  return (
    <div className="flex flex-col items-center w-[60%] py-10">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Carrito de Compras
      </h1>

      <div className="bg-white shadow-2xl rounded-2xl p-6 w-[90%] md:w-[60%]">

        <div className="flex flex-col gap-6">
          {/* Producto 1 */}
          <div className="flex items-center gap-4 border-b pb-4">
            <img
              src="https://olimpica.vtexassets.com/arquivos/ids/1380140-1200-auto?v=638772143057700000&width=1200&height=auto&aspect=true"
              alt="Camiseta Junior"
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                Camiseta Junior de Barranquilla 2024 Local
              </h2>
              <p className="text-gray-500">Cantidad: 1</p>
            </div>
            <span className="text-lg font-bold">$299.900</span>
          </div>

          {/* Producto 2 */}
          <div className="flex items-center gap-4 border-b pb-4">
            <img
              src="https://imgs.search.brave.com/nlg8qShjsXSjyTRSA9T14lCKhPflgRL1Q-D_WPh5N9Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5mYWxhYmVsbGEu/Y29tLmNvL2ZhbGFi/ZWxsYUNPLzE0MTQw/MDQ0Nl8wMS93aWR0/aD0yNDAsaGVpZ2h0/PTI0MCxxdWFsaXR5/PTcwLGZvcm1hdD13/ZWJwLGZpdD1wYWQ"
              alt="Camiseta Nacional"
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                Camiseta Atlético Nacional 2025 Local
              </h2>
              <p className="text-gray-500">Cantidad: 1</p>
            </div>
            <span className="text-lg font-bold">$400.950</span>
          </div>
        </div>

        {/* Resumen */}
        <div className="mt-6 border-t pt-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Total</h3>
          <span className="text-2xl font-bold">$700.850</span>
        </div>

        {/* Botón */}
        <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
}
