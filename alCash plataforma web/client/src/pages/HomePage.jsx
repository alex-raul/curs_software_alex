import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">ALCash</h1>
      <p className="text-md text-slate-400">
      Bienvenido a LIBRECOMPRA, tu destino en línea para la compra y venta de artículos usados 
      de calidad. En un mundo donde la sostenibilidad y el consumo consciente se vuelven cada vez más importantes,
       nuestra plataforma ofrece una solución conveniente y ecoamigable para dar una segunda vida a tus pertenencias 
       y encontrar productos únicos a precios accesibles.
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Get Started
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
