import Buscador from "./Buscador";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <Buscador />
        </div>
      </div>
    </section>
  );
}
