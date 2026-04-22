import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl tracking-wide">
            Martina Mansilla | Abogada
          </h1>

          <a
            href="https://wa.me/56958354341"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO MEJORADO */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">

        {/* fondos decorativos */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

          {/* TEXTO */}
          <div>
            <p className="text-amber-400 font-semibold mb-3">
              Abogada en Osorno • Atención en todo Chile
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Tu defensa legal comienza hoy
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              Soluciones jurídicas rápidas, cercanas y estratégicas en Derecho Penal, Familia, Migración y Civil.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://wa.me/56958354341"
                target="_blank"
                className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-xl font-bold transition"
              >
                Consultar Ahora
              </a>

              <a
                href="#servicios"
                className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
              >
                Servicios
              </a>
            </div>
          </div>

          {/* IMAGENES SEPARADAS (más pro) */}
          <div className="relative flex justify-center md:justify-end">

            {/* imagen principal */}
            <img
              src="/martina1.jpg"
              alt="Martina Mansilla"
              className="w-[360px] h-[520px] object-cover rounded-3xl shadow-2xl border border-white/10"
            />

            {/* efecto decorativo */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>

          </div>

        </div>
      </section>

      {/* ESTADISTICAS */}
      <section className="py-14 border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-slate-950">4</h3>
            <p className="text-gray-600">Áreas Legales</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-slate-950">100%</h3>
            <p className="text-gray-600">Atención Personalizada</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-slate-950">24h</h3>
            <p className="text-gray-600">Respuesta Rápida</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-slate-950">Chile</h3>
            <p className="text-gray-600">Asesoría Online</p>
          </div>
        </div>
      </section>

<section id="servicios" className="py-24 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

    {/* SERVICIOS (VERTICAL) */}
    <div>
      <h2 className="text-4xl font-bold mb-10">
        Servicios Jurídicos
      </h2>

      <div className="flex flex-col gap-6">
        {[
          ["Derecho Penal", "Defensa privada, querellas, cautelares."],
          ["Derecho de Familia", "Divorcios, alimentos, cuidado personal."],
          ["Derecho Migratorio", "Visa, residencia, expulsión, multas."],
          ["Derecho Civil", "Contratos, cobros, daños, posesión efectiva."]
        ].map(([titulo, texto], i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold mb-2">{titulo}</h3>
            <p className="text-gray-600">{texto}</p>
          </div>
        ))}
      </div>
    </div>

    {/* IMAGEN A LA DERECHA */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/martina2.jpg"
        alt="Martina Mansilla Abogada"
        className="w-[340px] h-[460px] object-cover rounded-3xl shadow-2xl border-4 border-white"
      />
    </div>

  </div>
</section>
      {/* TESTIMONIOS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Lo que valoran nuestros clientes
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-4">
                “Excelente atención, rápida respuesta y muy clara en todo el proceso.”
              </p>
              <h3 className="font-bold">Cliente Particular</h3>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-4">
                “Me sentí acompañada desde el primer día. Muy profesional.”
              </p>
              <h3 className="font-bold">Caso Familia</h3>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-4">
                “Resolvió mi consulta migratoria rápido y sin complicaciones.”
              </p>
              <h3 className="font-bold">Cliente Migratorio</h3>
            </div>

          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Atención en Osorno y todo Chile
            </h2>

            <p className="text-gray-600 text-lg mb-6">
              Representación judicial en Osorno y asesorías jurídicas online en todo Chile.
            </p>

            <div className="space-y-3 text-lg">
              <p>📍 Osorno, Chile</p>
              <p>⚖️ Atención presencial y online</p>
              <p>📞 +56 9 5835 4341</p>
              <p>✉️ mmansilla.csjr@gmail.com</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=Osorno,Chile&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* FORMULARIO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10">
            Solicita una Consulta
          </h2>

          <form
            action="https://formspree.io/f/xnjlonog"
            method="POST"
            className="bg-gray-50 p-8 rounded-3xl shadow-xl space-y-6"
          >
            <input type="text" name="nombre" placeholder="Nombre completo" required className="w-full border p-4 rounded-xl" />
            <input type="tel" name="telefono" placeholder="Teléfono" required className="w-full border p-4 rounded-xl" />
            <input type="email" name="email" placeholder="Correo electrónico" required className="w-full border p-4 rounded-xl" />
            <textarea name="mensaje" placeholder="Cuéntanos brevemente tu caso" rows="5" required className="w-full border p-4 rounded-xl" />

            <button className="w-full bg-slate-950 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition">
              Enviar Consulta
            </button>
          </form>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Necesitas ayuda legal hoy?
          </h2>

          <p className="text-gray-300 mb-8">
            Agenda una consulta inmediata con Martina Mansilla.
          </p>

          <a
            href="https://wa.me/56958354341"
            target="_blank"
            className="bg-green-500 px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © 2026 Martina Mansilla Marcos - Abogada
      </footer>

      {/* BOTONES FLOTANTES */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

        <a
          href="https://instagram.com/abogadamartinam"
          target="_blank"
          className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-2xl transition hover:scale-110 flex items-center justify-center"
        >
          <FaInstagram size={22} />
        </a>

        <a
          href="https://wa.me/56958354341"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition hover:scale-110 flex items-center justify-center"
        >
          <FaWhatsapp size={22} />
        </a>

      </div>

    </main>
  );
}