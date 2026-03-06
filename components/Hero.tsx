export default function Hero() {
  return (
    <section
      className="relative text-white min-h-screen flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Ciemna nakładka żeby tekst był czytelny */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Treść musi być nad nakładką */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4">Marcin Bobula</h1>
        <p className="text-xl text-orange-400 mb-2">Przedstawiciel Handlowy</p>
        <p className="text-lg text-gray-300 mb-8">Hydraulika Siłowa</p>
        <a
          href="#kontakt"
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded transition-colors"
        >
          Skontaktuj się
        </a>
      </div>
    </section>
  )
}