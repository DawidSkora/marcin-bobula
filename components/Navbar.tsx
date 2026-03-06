"use client"

import { useState, useEffect } from "react"
import { siteData } from "@/lib/data"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
      scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
    }`}>
      <span className="text-xl font-bold text-white">{siteData.name}</span>
      <a href="#kontakt" className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-white">
        Kontakt
      </a>
    </nav>
  )
}