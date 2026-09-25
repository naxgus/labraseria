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

function Divider() {
  return <div className="my-8 h-px w-24 bg-gold" />;
}

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
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
        className="mx-auto flex max-w-3xl scroll-mt-8 flex-col items-center px-6 py-28 text-center"
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
        className="relative scroll-mt-8 border-t border-gold/20 px-6 py-28"
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
    </main>
  );
}
