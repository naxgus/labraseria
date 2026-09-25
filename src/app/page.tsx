import ReservationForm from "./reservation-form";

const menu = [
  {
    category: "Para empezar",
    items: [
      { name: "Provolone a la brasa", desc: "Queso fundido con orégano y pan tostado", price: "9" },
      { name: "Pimientos del piquillo", desc: "Asados al carbón con aceite de oliva virgen", price: "8" },
      { name: "Croquetas de la casa", desc: "Cocido lento, bechamel cremosa", price: "10" },
    ],
  },
  {
    category: "A la brasa",
    items: [
      { name: "Chuletón madurado", desc: "Vaca vieja, 45 días de maduración · 1 kg", price: "58" },
      { name: "Entrecot de ternera", desc: "Con patatas y pimientos asados", price: "24" },
      { name: "Costillar ibérico", desc: "Glaseado y terminado al fuego", price: "19" },
    ],
  },
  {
    category: "Para cerrar",
    items: [
      { name: "Tarta de queso", desc: "Cremosa, horneada al estilo de la casa", price: "7" },
      { name: "Helado de vainilla", desc: "Con aceite de oliva y sal en escamas", price: "6" },
    ],
  },
];

// Para usar tus fotos: copia las imágenes a public/assets y pon la ruta en `src`,
// por ejemplo "/assets/brasa.jpg". Sin `src` se muestra un hueco reservado.
const gallery: { src?: string; alt: string; span: string }[] = [
  { alt: "La brasa", span: "col-span-2 row-span-2" },
  { alt: "Chuletón", span: "" },
  { alt: "El local", span: "" },
  { alt: "Postres", span: "" },
  { alt: "La barra", span: "" },
  { alt: "Nuestra mesa", span: "col-span-2 md:col-span-1" },
];

const navLinks = [
  { href: "#sobre-nosotros", label: "Nosotros" },
  { href: "#menu", label: "Menú" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

function Divider() {
  return <div className="my-8 h-px w-24 bg-gold" />;
}

export default function Home() {
  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-background/80 backdrop-blur">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-6 py-3 sm:justify-between"
      >
        <a href="#inicio" className="font-serif text-lg font-bold text-white">
          La <span className="text-gold">Brasería</span>
        </a>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs tracking-widest text-white/80 uppercase">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-gold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>

    <main>
      <section
        id="inicio"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.14)_0%,transparent_65%)]"
        />

        <div className="relative flex flex-col items-center">
          <p className="mb-6 text-sm tracking-[0.4em] text-gold uppercase">
            Cocina a la brasa
          </p>

          <h1 className="font-serif text-6xl font-bold tracking-tight text-white sm:text-8xl">
            La <span className="text-gold">Brasería</span>
          </h1>

          <Divider />

          <p className="max-w-md text-lg text-white/80">
            Fuego, producto y tiempo. Sabor que se cocina despacio.
          </p>

          <a
            href="#menu"
            className="mt-10 border border-gold px-8 py-3 text-sm tracking-widest text-gold uppercase transition-colors hover:bg-gold hover:text-black"
          >
            Ver carta
          </a>
        </div>
      </section>

      <section
        id="sobre-nosotros"
        className="mx-auto flex max-w-3xl scroll-mt-20 flex-col items-center px-6 py-20 sm:py-28 text-center"
      >
        <p className="mb-4 text-sm tracking-[0.4em] text-gold uppercase">
          Nuestra historia
        </p>
        <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
          Sobre <span className="text-gold">nosotros</span>
        </h2>
        <Divider />
        <p className="text-lg leading-relaxed text-white/80">
          En La Brasería cocinamos como se ha hecho siempre: con brasas de
          encina, producto de temporada y sin prisa. Cada pieza pasa por el
          fuego el tiempo justo para que hable por sí sola.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          Trabajamos con productores cercanos y maduramos nuestra carne en casa.
          Un espacio cálido donde sentarse, compartir y disfrutar de la mesa.
        </p>

        <dl className="mt-16 grid w-full grid-cols-1 gap-10 border-t border-gold/30 pt-12 sm:grid-cols-3">
          {[
            ["Brasa", "de encina"],
            ["45 días", "de maduración"],
            ["100 %", "producto local"],
          ].map(([value, label]) => (
            <div key={value}>
              <dt className="font-serif text-3xl text-gold">{value}</dt>
              <dd className="mt-2 text-sm tracking-widest text-white/60 uppercase">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        id="menu"
        className="relative scroll-mt-20 border-t border-gold/20 px-6 py-20 sm:py-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_60%)]"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-4 text-sm tracking-[0.4em] text-gold uppercase">
            La carta
          </p>
          <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            <span className="text-gold">Menú</span>
          </h2>
          <Divider />
        </div>

        <div className="relative mx-auto mt-4 grid max-w-4xl gap-16 md:grid-cols-2">
          {menu.map((group) => (
            <div key={group.category}>
              <h3 className="mb-8 border-b border-gold/40 pb-3 font-serif text-2xl text-gold">
                {group.category}
              </h3>
              <ul className="space-y-7">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-medium text-white">{item.name}</span>
                      <span
                        aria-hidden
                        className="flex-1 translate-y-[-3px] border-b border-dotted border-white/25"
                      />
                      <span className="font-serif text-gold">{item.price} €</span>
                    </div>
                    <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="galeria"
        className="scroll-mt-20 border-t border-gold/20 px-6 py-20 sm:py-28"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-4 text-sm tracking-[0.4em] text-gold uppercase">
            Nuestro espacio
          </p>
          <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            <span className="text-gold">Galería</span>
          </h2>
          <Divider />
        </div>

        <div className="mx-auto mt-4 grid max-w-5xl auto-rows-[14rem] grid-cols-2 gap-3 md:auto-rows-[16rem] md:grid-cols-3 md:gap-4">
          {gallery.map((photo, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden border border-gold/20 bg-white/[0.03] ${photo.span}`}
            >
              {photo.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)]">
                  <span className="text-xs tracking-[0.3em] text-gold/60 uppercase">
                    {photo.alt}
                  </span>
                </div>
              )}
            </figure>
          ))}
        </div>
      </section>

      <section
        id="contacto"
        className="relative scroll-mt-20 border-t border-gold/20 px-6 py-20 sm:py-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08)_0%,transparent_60%)]"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-4 text-sm tracking-[0.4em] text-gold uppercase">
            Reserva tu mesa
          </p>
          <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            <span className="text-gold">Contacto</span>
          </h2>
          <Divider />
        </div>

        <div className="relative mx-auto mt-4 grid max-w-5xl gap-16 md:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h3 className="mb-2 font-serif text-xl text-gold">Dirección</h3>
              <p className="text-white/80">Calle Ejemplo, 12</p>
              <p className="text-white/80">28000 Madrid</p>
            </div>
            <div>
              <h3 className="mb-2 font-serif text-xl text-gold">Horario</h3>
              <p className="text-white/80">Martes a domingo</p>
              <p className="text-white/80">13:00 – 16:00 · 20:00 – 23:30</p>
            </div>
            <div>
              <h3 className="mb-2 font-serif text-xl text-gold">Teléfono</h3>
              <p className="text-white/80">+34 600 000 000</p>
            </div>
          </div>

          <ReservationForm />
        </div>
      </section>
    </main>

    <footer className="border-t border-gold/20 px-6 py-10 text-center">
      <p className="font-serif text-xl text-white">
        La <span className="text-gold">Brasería</span>
      </p>
      <p className="mt-2 text-xs tracking-widest text-white/50 uppercase">
        © {new Date().getFullYear()} La Brasería · Todos los derechos reservados
      </p>
    </footer>
    </>
  );
}
