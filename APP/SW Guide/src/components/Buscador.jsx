export default function Buscador() {
  return (
    <section className="grid place-items-center min-h-[5rem]">
      <div className="flex gap-4">
        <input
          className="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
          type="text"
          placeholder="Personaje"
        />
        <button className="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600">
          Buscar
        </button>
      </div>
    </section>
  );
}
  