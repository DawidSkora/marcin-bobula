export default function Hero() {
  return (
    <section className="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        Marcin Bobula
      </h1>
      <p className="text-xl text-orange-400 mb-2">
        Przedstawiciel Handlowy
      </p>
      <p className="text-lg text-gray-400 mb-8">
        Hydraulika Siłowa
      </p>
      <a
        href="#kontakt"
        className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded transition-colors"
      >
        Skontaktuj się
      </a>
    </section>
  )
}