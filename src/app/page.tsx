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

          <div className="my-8 h-px w-24 bg-gold" />

          <p className="max-w-md text-lg text-white/80">
            Fuego, producto y tiempo. Sabor que se cocina despacio.
          </p>

          <a
            href="#"
            className="mt-10 border border-gold px-8 py-3 text-sm tracking-widest text-gold uppercase transition-colors hover:bg-gold hover:text-black"
          >
            Ver carta
          </a>
        </div>
      </section>
    </main>
  );
}
