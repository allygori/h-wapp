import clsx from "clsx";
import { useContext } from "react";
import Container from "@/components/container";
import IndiHomeCardBest from "../pakcages/indihome-card-best";
import ConfigContext, { type ConfigContextType } from "@/context/config";

type Props = {
  className?: string;
};

const Hero = ({ className = "" }: Props) => {
  const { header_height } = useContext(ConfigContext) as ConfigContextType;

  const mostCheaper = {
    speed: 30,
    name: "Paket Digital JITU 1 30 Mbps",
    description: "Cocok digunakan untuk maks 3 perangkat",
    devices: 3,
    badge: "Paling Populer",
    price: 265_000,
    package_group: "Paket 1P (Internet)",
    addons: [],
    benefits: [
      "Bebas biaya pasang (Normal Rp500.000)",
      "Kecepatan internet hingga 30 Mbps",
    ],
  };

  const bestOffer = {
    speed: 50,
    name: "Paket Complete 1P 50 Mbps",
    description: "Cocok digunakan untuk maks 5 perangkat",
    devices: 5,
    badge: "Penawaran Terbaik",
    price: 405_000,
    package_group: "Paket 1P (Internet)",
    addons: [],
    benefits: [
      "Bebas biaya pasang (Normal Rp500.000)",
      "Kecepatan internet hingga 50 Mbps",
      "Kuota keluarga 15GB untuk 6 nomor",
      "30 menit voice & 30 SMS seluruh operator",
      "Unlimited voice & SMS sesama member",
      "Kuota Orbit 20 GB (belum termasuk modem Orbit Rp 425.000)",
    ],
  };

  const mostPricy = {
    speed: 100,
    name: "Paket IndiHome Gamer 3P 100 Mbps",
    description: "Cocok digunakan untuk maks 10 perangkat",
    devices: 10,
    price: 965_000,
    package_group: "Paket 3P (Internet+TV+Phone)",
    addons: [
      "indihome-tv",
      "disney-hotstar",
      "gameqoo",
      "pijar-belajar",
      "langit-musik",
    ],
    benefits: [
      "Bebas biaya pasang (Normal Rp500.000)",
      "Kecepatan internet hingga 100 Mbps",
      "Paket TV <span class='text-red-500'>81 Channel</span>",
      "Telepon Rumah 100 Menit",
    ],
  };

  return (
    <section
      className={clsx(
        `bg-brand-580 h-full min-w-full pt-24 lg:min-h-screen`,
        className,
      )}
      // style={{ marginTop: header_height }}
    >
      <Container className="flex w-full flex-col items-center justify-center px-2 md:w-11/12 md:justify-start lg:h-screen lg:w-11/12 lg:flex-row lg:justify-start lg:space-x-2 xl:w-10/12 xl:justify-start">
        <div className="flex h-full w-full flex-col items-center justify-center lg:h-screen">
          {/* <h1 className="inline-block w-8/12 overflow-hidden bg-gradient-to-b from-[#555] to-black bg-clip-text text-center text-2xl font-extrabold leading-snug text-transparent lg:text-5xl lg:leading-tight">
            <span className="inline-block">
              Pemasangan Baru Internet Unlimited di Pekanbaru dan Sekitarnya
            </span>
          </h1> */}
          <h1 className="inline-block w-full overflow-hidden bg-gradient-to-b from-[#0e336c] from-15% to-[#001a41] bg-clip-text text-center text-3xl font-extrabold leading-snug text-transparent lg:w-8/12 lg:text-5xl lg:leading-tight">
            <span className="inline-block">
              Pemasangan Baru Internet Unlimited di Pekanbaru dan Sekitarnya
            </span>
          </h1>
          <span className="bg-brand-2-200 my-3 block h-2 w-4/12 rounded-br rounded-tr" />
          <p className="mb-2 w-full text-center text-sm font-normal text-[#666] md:mb-8 lg:w-8/12 xl:text-lg">
            Terlengkap! Berbagai macam provider, antara lain: IndiHome,
            MyRepublic, Iconnet, Biznet Home, Telkomsel Orbit, Oxygen.id Home,
            MNC Play, Faznet & Iziroam
          </p>
          {/* <div className="mb-8">
            <button
              type="button"
              className="overflow-hidden rounded-lg border border-transparent bg-brand-pi-400 px-5 py-3 text-sm font-semibold text-white"
            >
              Cek Paketnya
            </button>
          </div> */}
          <div className="mb-4 flex w-full flex-row flex-nowrap items-center overflow-x-auto px-8 md:min-h-[25rem] md:flex-wrap md:overflow-x-hidden lg:w-10/12">
            <div className="mr-4 h-full w-10/12 flex-none py-8 md:w-full md:flex-1">
              <IndiHomeCardBest
                item={mostCheaper}
                className="overflow-hidden rounded-lg border border-transparent bg-white p-4 shadow-simple"
              />
            </div>
            <div className="mx-4 h-full w-10/12 flex-none md:w-full md:flex-1">
              <IndiHomeCardBest
                item={bestOffer}
                isPrimary={true}
                className="overflow-hidden rounded-lg border border-transparent bg-white p-4 shadow-simple md:h-full"
              />
            </div>
            <div className="ml-4 h-full w-10/12 flex-none py-8 md:w-full md:flex-1">
              <IndiHomeCardBest
                item={mostPricy}
                className="h-full overflow-hidden rounded-lg border border-transparent bg-white p-4 shadow-simple"
              />
            </div>
          </div>
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
