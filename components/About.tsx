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
            Marcin Bobula. Pięć lat w branży hydrauliki siłowej i kurwa, jakie to były lata. Podczas gdy inni sprzedawcy siedzieli na tyłku i pili kawę, Bobula przemierzał Polskę wszerz i wzdłuż, dobierając elementy hydrauliczne z precyzją snajpera i refleksem kota. Pompa? Dobrana. Siłownik? Dobrany. Zawór który cholera wie skąd — też dobrany, i to na wczoraj.
            Mówią że hydraulika siłowa to nudna branża. Ci ludzie nigdy nie widzieli Bobuli przy pracy. 
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Gdy inni się poddają, gdy ciśnienie spada a uszczelki lecą — on wkracza, ocenia sytuację jednym spojrzeniem i mówi: "znam ten typ awarii, naprawiałem gorsze rzeczy o trzeciej w nocy w deszczu". Bo naprawiał.
            Sprzedaż, doradztwo, serwis, naprawa — Bobula ogarnie wszystko. A jak nie ogarnie, to i tak powie że ogarnie, po czym ogarnie. Taki już jest. Niezniszczalny. Nieugięty. Hydrauliczny.
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