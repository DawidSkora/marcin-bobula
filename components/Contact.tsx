"use client"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    setStatus("sending")

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "TWÓJ_KLUCZ_WEB3FORMS",
        ...formData,
      }),
    })

    setStatus(res.ok ? "success" : "error")
  }

  return (
    <section id="kontakt" className="bg-gray-800 text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Kontakt</h2>
      <div className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          name="name"
          placeholder="Imię i nazwisko"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          name="company"
          placeholder="Firma"
          value={formData.company}
          onChange={handleChange}
          className="bg-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          name="phone"
          placeholder="Telefon"
          value={formData.company}
          onChange={handleChange}
          className="bg-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          name="message"
          placeholder="Wiadomość"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={handleSubmit}
          disabled={status === "sending"}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 text-white font-bold py-3 rounded transition-colors"
        >
          {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
        </button>
        {status === "success" && (
          <p className="text-green-400 text-center">Wiadomość wysłana! Odezwę się wkrótce.</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center">Coś poszło nie tak. Spróbuj ponownie.</p>
        )}
      </div>
    </section>
  )
}