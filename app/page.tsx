import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Marcin Bobula",
  description: "Przedstawiciel Handlowy specjalizujący się w hydraulice siłowej, oferujący kompleksowe rozwiązania dla klientów z południowej Polski.",
  telephone: "+48 536 997 603",
  email: "marcinbobula98@gmail.com",
  areaServed: "Cała Polska",
  serviceType: "Hydraulika siłowa",
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}