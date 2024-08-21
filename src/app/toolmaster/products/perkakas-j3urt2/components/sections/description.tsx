"use client";

import "next-cloudinary/dist/cld-video-player.css";
import { useRef } from "react";
import Image from "next/image";
import { CldVideoPlayer } from "next-cloudinary";

import Container from "@/components/container";
import { ButtonWA } from "@/components/buttons";
import SectionCOD from "./cod";
import SectionSpesification from "./spesification";
import IconShield from "@/svgs/shield-01";
import IconCustomerService from "@/svgs/customer-service-1";
import IconReturn from "@/svgs/return-02";

import Image01 from "@/public/assets/img/perkakas/images_1585831720306543901.png";
import Image02 from "@/public/assets/img/perkakas/images_9664821720306544956.png";
import Image03 from "@/public/assets/img/perkakas/images_3576611720306544943.png";

import Image04 from "@/public/assets/img/perkakas/4961431717475226380.jpg";
import Image05 from "@/public/assets/img/perkakas/a05397b2a2467fc7700e37cdda251ac5.jpeg";
import Image06 from "@/public/assets/img/perkakas/5adc538d4f2ac50cb01b0d2ee6006135.jpeg";
import Image07 from "@/public/assets/img/perkakas/hfe56623dfs33.jpg";

import OrderForm from "../form/order-form";

type Props = {
  className?: string;
};

const Description = ({ className = "" }: Props) => {
  const priceRef = useRef<HTMLDivElement | null>(null);

  const scroll = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    window.scrollTo({
      top: priceRef?.current?.offsetTop ? priceRef?.current?.offsetTop - 40 : 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={className}>
      <Container
        className={`w-full bg-white md:w-10/12 lg:w-7/12 xl:w-5/12`}
        classes={{ padding: "px-3 md:px-5 py-4" }}
      >
        {/* <h2 className="mb-2 text-sm font-semibold text-black">Deskripsi</h2> */}
        {/* title-short-description */}
        <div className="mb-4 flex w-full flex-col">
          <h2 className="mb-2 text-center text-base font-semibold md:text-lg">
            Pernahkah anda melihat orang yang ada dibawah ini? Atau anda sendiri
            pernah <strong className="">mengalaminya</strong>?
          </h2>

          {/* <h2 className="mb-2 text-center text-base font-semibold">
            Pernah Liat Orang Yang Ada Dibawah ini? Atau Anda Sendiri Pernah
            Mengalaminya?
          </h2> */}

          <div className="mb-4 flex w-full flex-col">
            <Image src={Image01} alt="Motor mogok 1" />
            <Image src={Image02} alt="Motor mogok 2" />
            <Image src={Image03} alt="Mobil mogok 3" />
          </div>

          <p className="mb-4 text-center text-sm md:text-base lg:text-base">
            Jangan khawatir, sekarang jika Anda mempunya alat ini, Anda akan
            tenang dan tidak khawatir lagi. Dengan ukuran yang minimal, namun
            memiliki hasil <strong>maksimal</strong>.
          </p>
          <p className="mb-4 text-center text-sm md:text-base lg:text-base">
            Toolsnya lengkap bisa digunakan untuk membuka baut dan mur model
            apapun. Bahan terbuat dari Baja yang TAHAN KARAT.{" "}
            <strong>Awet hingga bertahun-tahun!</strong>
          </p>

          <button
            type="button"
            className="mx-auto mb-8 self-center overflow-hidden rounded-lg border border-transparent bg-theme-1-primary-500 px-4 py-2.5 text-center text-base font-bold text-white"
            onClick={scroll}
          >
            Saya Mau
          </button>

          <div className="mx-auto mb-8 flex w-full flex-row items-center justify-center overflow-hidden rounded-md border border-transparent bg-theme-1-primary-50">
            <CldVideoPlayer
              width="848"
              height="480"
              src="videos/snbgq0f820hhlkxh7fwm"
              colors={{
                base: "#2a44e2",
                accent: "#ff0000",
                text: "#ffffff",
              }}
            />
          </div>

          <SectionSpesification className="mb-4" />

          <div className="mb-4">
            <h2 className="text-left text-base font-semibold">
              High Quality Material
            </h2>
            <p className="mb-0 text-left text-sm md:text-base lg:text-base">
              Terbaut dari stainless steel murni sehingga sangat kokoh dan tahan
              lama.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-left text-base font-semibold">Carrying Box</h2>
            <p className="mb-0 text-left text-sm md:text-base lg:text-base">
              Anda juga mendapat kotak untuk menaruh semua set kunci pas ini
              beserta dengan tangkai pegangannya. Kotak penyimpan ini terbuat
              dari plastik dan memiliki bentuk yang <em>compact</em>, sehingga
              mudah dibawa.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-left text-base font-semibold">
              Package Contents
            </h2>
            <p className="mb-0 text-left text-sm md:text-base lg:text-base">
              Barang-barang yang Anda dapat dalam kotak produk:
            </p>
            <ul className="ml-5 list-outside list-disc p-0">
              <li className="p-0 text-sm md:text-base">
                1 buah mata sok 3/8&quot; ukuran 21 mm
              </li>
              <li className="p-0 text-sm md:text-base">
                1 buah sambungan sok 3/8&quot; panjang 3&quot;
              </li>
              <li className="p-0 text-sm md:text-base">
                1 buah sambungan sok 1/4&quot; x 3/8&quot;
              </li>
              <li className="p-0 text-sm md:text-base">
                1 buah disc 3/8&quot;
              </li>
              <li className="p-0 text-sm md:text-base">
                1 buah gagang sok ratchet 3/8&quot;
              </li>
              <li className="p-0 text-sm md:text-base">
                1 buah obeng sok 1/4&quot;
              </li>
              <li className="p-0 text-sm md:text-base">
                14 buah mata sok 1/4&quot; ukuran mm 4 - 4,5 - 5 - 5,5 - 6 - 6,5
                - 7 - 7,5 - 8 - 9 - 10 - 11 - 12 - 13
              </li>
              <li className="p-0 text-sm md:text-base">
                14 buah mata sok 1/4&quot; ukuran inch 5/32 - 3/16 - 7/32 - 1/4
                - 9/32 - 5/16 - 11/32 - 3/8 - 13/32 - 7/16 - 15/32 - 1/2 - 17/32
                - 9/16
              </li>
              <li className="p-0 text-sm md:text-base">
                3 buah mata sok (8 PT) ukuran inch 1/4 - 5/16 - 3/8
              </li>
              <li className="p-0 text-sm md:text-base">
                2 buah mata sok 3/8 ukuran mm 15 - 16{" "}
              </li>
              <li className="p-0 text-sm md:text-base">
                Dilengkapi box plastik
              </li>
            </ul>
          </div>

          <div className="mb-4 flex w-full flex-col">
            <Image src={Image04} alt="Image 4" />
            <Image src={Image05} alt="Image 5" />
            <Image src={Image06} alt="Image 6" />
            <Image src={Image07} alt="Image 7" />
          </div>
        </div>

        <div
          ref={priceRef}
          className="mb-4 flex flex-col items-center justify-center"
        >
          <p className="mb-4 text-center text-lg font-semibold">
            Miliki Kunci Pas 40 Pcs Multipurpose, dengan harga:
          </p>
          <div className="mx-1 mb-4 flex flex-shrink flex-grow-0 flex-row items-center truncate text-red-500 line-through">
            <span className="text-lg font-light">Rp</span>
            <span className="text-lg font-light">186.100</span>
          </div>
          <div className="mx-1 mb-4 flex flex-shrink flex-grow-0 flex-row items-center truncate text-red-500 line-through">
            <span className="text-lg font-light">Rp</span>
            <span className="text-lg font-light">120.000</span>
          </div>
          <div className="mb-4">
            <p className="text-center text-base font-bold">
              Diskon{" "}
              <span className="text-green-500">
                <strong>52%</strong>
              </span>{" "}
              dari harga awal, Kesempatan Terbatas!
            </p>
          </div>
          <div className="mb-4 flex flex-row items-baseline">
            <span className="text-base font-medium text-theme-1-primary-500">
              Rp
            </span>
            <span className="text-xl font-medium text-theme-1-primary-500">
              89.300
            </span>
          </div>
        </div>
        <div className="flex w-full flex-row justify-center">
          <OrderForm />
        </div>
        {/* <div className="flex flex-col items-center justify-center">
          <ButtonWA
            className="bg-brand-100 hover:bg-brand-95 overflow-hidden rounded-lg border border-transparent px-6 py-4 text-center font-medium text-white"
            message="Halo, saya ingin memesan perkakas. Apakah bener mendapat diskon 61%?"
            classes={{
              text: "text-base md:text-lg",
            }}
          >
            Chat via WhatsApp
          </ButtonWA>
          <div className="mt-4">
            <p className="mb-2 text-center text-2xs font-medium text-zinc-900">
              KLIK TOMBOL DI ATAS
            </p>
            <p className="text-center text-2xs font-medium text-zinc-900">
              Otomatis akan diarahkan <br /> ke customer service kami via
              WhatsApp
            </p>
          </div>
        </div> */}

        <SectionCOD />

        <div>
          <h2 className="mb-4 text-center text-lg font-bold">
            Belanja 100% Aman
          </h2>
          <div className="-mx-2 flex flex-row items-center md:-mx-4">
            <div className="mx-2 md:mx-4">
              <IconShield className="mx-auto h-16 w-16 text-theme-1-primary-400 md:h-24 md:w-24" />
              <h3 className="mb-2 text-center text-sm font-semibold md:text-base">
                BISA COD
              </h3>
              <p className="text-left text-xs font-normal leading-tight md:text-sm">
                Tidak perlu repot ke ATM, Anda dapat bayar produk ini di rumah
              </p>
            </div>
            <div className="mx-2 md:mx-4">
              <IconCustomerService className="mx-auto h-16 w-16 text-theme-1-primary-400 md:h-24 md:w-24" />
              <h3 className="mb-2 text-center text-sm font-semibold md:text-base">
                CS Profesional
              </h3>
              <p className="text-left text-xs font-normal leading-tight md:text-sm">
                Tidak perlu repot ke ATM, Anda dapat bayar produk ini di rumah
              </p>
            </div>
            <div className="mx-2 md:mx-4">
              <IconReturn className="mx-auto h-16 w-16 text-theme-1-primary-400 md:h-24 md:w-24" />
              <h3 className="mb-2 text-center text-sm font-semibold md:text-base">
                Kemudahan Retur
              </h3>
              <p className="text-left text-xs font-normal leading-tight md:text-sm">
                Tidak perlu repot ke ATM, Anda dapat bayar produk ini di rumah
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Description;
