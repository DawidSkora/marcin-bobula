export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 px-6 text-center">
      <p className="mb-2 text-white font-bold">Marcin Bobula</p>
      <p className="mb-4">Przedstawiciel Handlowy — Hydraulika Siłowa</p>
      <p className="text-sm">
        © {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
      </p>
    </footer>
  )
}