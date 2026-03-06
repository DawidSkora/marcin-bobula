import FadeIn from "@/components/FadeIn"

const services = [
  {
    title: "Sprzedaż sprzętu",
    description: "Dobór i sprzedaż pomp, siłowników, zaworów oraz kompletnych układów hydraulicznych dla przemysłu.",
    icon: "⚙️",
  },
  {
    title: "Testy i diagnostyka",
    description: "Profesjonalne testy ciśnieniowe, diagnostyka usterek i pomiary wydajności układów hydraulicznych.",
    icon: "🔬",
  },
  {
    title: "Naprawa i serwis",
    description: "Regeneracja komponentów, usuwanie awarii oraz przeglądy okresowe sprzętu hydraulicznego.",
    icon: "🔧",
  },
]

export default function Services() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Usługi</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.15}>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}