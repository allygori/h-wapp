import clsx from "clsx";
import Container from "@/components/container";

type Props = {
  className?: string;
};

const Hero = ({ className = "" }: Props) => {
  return (
    <section
      className={clsx(`bg-brand-580 h-full min-h-screen min-w-full`, className)}
    >
      <Container className="flex w-full flex-col items-center justify-center md:w-11/12 md:justify-start lg:h-screen lg:w-11/12 lg:flex-row lg:justify-start lg:space-x-2 xl:w-10/12 xl:justify-start">
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <h1 className="inline-block w-8/12 overflow-hidden bg-gradient-to-b from-[#555] to-black bg-clip-text text-center text-2xl font-extrabold leading-snug text-transparent lg:text-5xl lg:leading-tight">
            <span className="inline-block">
              Pemasangan Baru Internet Unlimited di Pekanbaru dan Sekitarnya
            </span>
          </h1>
          <span className="bg-brand-2-200 my-3 block h-2 w-4/12 rounded-br rounded-tr" />
          <p className="mb-5 w-8/12 text-center text-base font-normal text-[#666] xl:text-lg">
            Terlengkap berbagai provider, diantaranya: IndiHome, MyRepublic,
            Iconnet, Biznet Home, Telkomsel Orbit, Oxygen.id Home, MNC Play,
            Faznet & Iziroam
          </p>
          {/* <p className="mb-5 text-base font-normal text-[#666] xl:text-lg">
            Pemasangan internet unlimited terlengkap di pekanbaru dan
            sekitarnya. Berbagai macam provider, diantaranya IndiHome,
            MyRepublic, Iconnet, Biznet Home, Telkomsel Orbit, Oxygen.id Home,
            MNC Play, Faznet & Iziroam. Hubungi tim sales kami untuk informasi
            lebih lanjut.
          </p> */}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
