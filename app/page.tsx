import { Button } from "@/app/components/ui/button";

const Home = () => {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
      <section className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur">
        <span className="w-fit rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-200">
          Tailwind pronto
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          FSW Barber
        </h1>
        <p className="max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
          O Tailwind CSS ja esta configurado neste projeto. Agora voce pode usar
          classes utilitarias direto nos componentes da pasta <code>app</code>.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="rounded-2xl bg-white px-4 py-2 font-semibold text-neutral-950">
            bg-white
          </div>
          <div className="rounded-2xl bg-amber-400 px-4 py-2 font-semibold text-neutral-950">
            text-neutral-950
          </div>
          <div className="rounded-2xl border border-white/15 px-4 py-2 text-neutral-200">
            rounded-2xl
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button>Agendar agora</Button>
          <Button variant="outline">Ver servicos</Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
