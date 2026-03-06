export default function About() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-48 h-48 rounded-full bg-gray-700 border-4 border-orange-500 flex-shrink-0 flex items-center justify-center text-6xl">
          <img src="/profilowe.png" alt="Marcin Bobula" className="w-48 h-48 rounded-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">O mnie</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Specjalista z wieloletnim doświadczeniem w branży hydrauliki siłowej. 
            Pomagam firmom dobrać, uruchomić i utrzymać sprzęt hydrauliczny dopasowany do ich potrzeb.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Działam na terenie całej Polski, współpracując zarówno z małymi 
            przedsiębiorstwami jak i dużymi zakładami przemysłowymi.
          </p>
          <div className="flex gap-8 mt-8">
            <div>
              <p className="text-3xl font-bold text-orange-500">5+</p>
              <p className="text-gray-400">lat doświadczenia</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">200+</p>
              <p className="text-gray-400">obsłużonych klientów</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">500+</p>
              <p className="text-gray-400">zrealizowanych zleceń</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}