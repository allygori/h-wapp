import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import ImageLogoWithTextWhite from "@/public/assets/logo/pasang-internet.svg";

type Props = {
  className?: string;
};

const FooterOne = ({ className = "" }: Props) => {
  const year = new Date().getFullYear();

  return (
    <footer className={clsx("m-0 bg-brand-pi-400", className)}>
      <Container className="flex w-11/12 flex-col bg-brand-pi-400 py-8 xl:w-10/12 xl:flex-row xl:py-12">
        <div className="mb-4 mr-0 w-full xl:mb-0 xl:mr-4 xl:w-5/12">
          {/* <IconLogoWithTextAside className="h-48 w-auto text-white" /> */}
          <div className="w-full xl:w-10/12">
            {/* <Image
              src={ImageLogoWithTextWhite}
              alt="Ika Gorden Logo Footer"
              height={32}
              className="mb-2.5 xl:mb-3"
            /> */}

            <div className="mb-4 flex flex-row">
              <svg
                fill="currentColor"
                height="800px"
                width="800px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 365.892 365.892"
                xmlSpace="preserve"
                className="mr-2 h-8 w-8 text-white"
              >
                <g>
                  <circle cx="182.945" cy="286.681" r="41.494" />
                  <path
                    d="M182.946,176.029c-35.658,0-69.337,17.345-90.09,46.398c-5.921,8.288-4.001,19.806,4.286,25.726
		c3.249,2.321,6.994,3.438,10.704,3.438c5.754,0,11.423-2.686,15.021-7.724c13.846-19.383,36.305-30.954,60.078-30.954
		c23.775,0,46.233,11.571,60.077,30.953c5.919,8.286,17.437,10.209,25.726,4.288c8.288-5.92,10.208-17.438,4.288-25.726
		C252.285,193.373,218.606,176.029,182.946,176.029z"
                  />
                  <path
                    d="M182.946,106.873c-50.938,0-99.694,21.749-133.77,59.67c-6.807,7.576-6.185,19.236,1.392,26.044
		c3.523,3.166,7.929,4.725,12.32,4.725c5.051-0.001,10.082-2.063,13.723-6.116c27.091-30.148,65.849-47.439,106.336-47.439
		s79.246,17.291,106.338,47.438c6.808,7.576,18.468,8.198,26.043,1.391c7.576-6.808,8.198-18.468,1.391-26.043
		C282.641,128.621,233.883,106.873,182.946,106.873z"
                  />
                  <path
                    d="M360.611,112.293c-47.209-48.092-110.305-74.577-177.665-74.577c-67.357,0-130.453,26.485-177.664,74.579
		c-7.135,7.269-7.027,18.944,0.241,26.079c3.59,3.524,8.255,5.282,12.918,5.281c4.776,0,9.551-1.845,13.161-5.522
		c40.22-40.971,93.968-63.534,151.344-63.534c57.379,0,111.127,22.563,151.343,63.532c7.136,7.269,18.812,7.376,26.08,0.242
		C367.637,131.238,367.745,119.562,360.611,112.293z"
                  />
                </g>
              </svg>

              <span className="ml-0 self-center whitespace-nowrap text-xl font-semibold uppercase text-white xl:text-2xl">
                Pasang Internet
              </span>
            </div>

            <p className="text-xs text-white xl:text-sm">
              Pasang Internet membantu mendorong pemerataan akses internet di
              Indonesia. Kami membantu pemasangan internet baru dari berbagai
              provider ternama.
            </p>
          </div>
        </div>
        <div className="mb-4 mr-0 flex-1 xl:mb-0 xl:mr-4">
          <h3 className="text-base text-white xl:text-lg">Jasa & Layanan</h3>

          <ul className="m-0 p-0">
            <li>
              <Link
                href="/pasang-internet"
                className="text-xs text-white hover:text-opacity-80 hover:underline md:text-sm"
              >
                IndiHome
              </Link>
            </li>
            <li>
              <Link
                href="/pasang-internet"
                className="text-xs text-white hover:text-opacity-80 hover:underline md:text-sm"
              >
                MyRepublic
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 mr-0 flex-1 xl:mb-0 xl:mr-4">
          <h3 className="text-base text-white xl:text-lg">Kontak</h3>
          <p className="mb-2 text-xs text-white md:mb-4 md:text-sm">
            +62 811 1111 0000
          </p>
          {/* <h3 className="text-base text-white xl:text-lg">Alamat</h3> */}
          {/* <address className="mb-2 text-xs not-italic text-white md:text-sm">
            Jalan Graha Mitra Citra blok K 13 no.3 Kelurahan Panongan, Kecamatan
            Panongan, <br />
            Jalan Citra Raya Boulevard, Cikupa, Kabupaten Tangerang, Banten
            15711.
          </address> */}
          <h3 className="text-sm text-white xl:text-base">Jam Operasional</h3>
          <p className="text-xs text-white md:text-sm">Senin-Minggu</p>
          <p className="text-xs text-white md:text-sm">08:00 - 20.00</p>
        </div>
      </Container>
      <Container className="w-11/12 bg-brand-pi-400 py-5 xl:w-10/12">
        <p className="text-center text-xs text-white">
          © Copyright {year} Pasang Internet All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default FooterOne;
