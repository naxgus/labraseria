"use client";

import { useState } from "react";

const field =
  "w-full border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:border-gold focus:outline-none";
const label = "mb-2 block text-xs tracking-widest text-gold uppercase";

export default function ReservationForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-gold/40 px-8 py-14 text-center">
        <p className="font-serif text-3xl text-gold">Gracias</p>
        <p className="mt-4 text-white/80">
          Hemos recibido tu solicitud de reserva. Te confirmaremos por teléfono
          o correo lo antes posible.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 text-sm tracking-widest text-gold uppercase underline underline-offset-4"
        >
          Nueva reserva
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-6 sm:grid-cols-2"
    >
      <div>
        <label htmlFor="nombre" className={label}>
          Nombre
        </label>
        <input id="nombre" name="nombre" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="telefono" className={label}>
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          autoComplete="tel"
          className={field}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className={label}>
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="fecha" className={label}>
          Fecha
        </label>
        <input
          id="fecha"
          name="fecha"
          type="date"
          required
          className={`${field} scheme-dark`}
        />
      </div>
      <div>
        <label htmlFor="hora" className={label}>
          Hora
        </label>
        <input
          id="hora"
          name="hora"
          type="time"
          required
          className={`${field} scheme-dark`}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="personas" className={label}>
          Personas
        </label>
        <select id="personas" name="personas" defaultValue="2" className={`${field} scheme-dark`}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n} className="bg-background">
              {n} {n === 1 ? "persona" : "personas"}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="notas" className={label}>
          Comentarios (opcional)
        </label>
        <textarea
          id="notas"
          name="notas"
          rows={3}
          placeholder="Alergias, celebraciones, preferencias…"
          className={field}
        />
      </div>
      <button
        type="submit"
        className="border border-gold px-8 py-3 text-sm tracking-widest text-gold uppercase transition-colors hover:bg-gold hover:text-black sm:col-span-2"
      >
        Reservar mesa
      </button>
    </form>
  );
}
