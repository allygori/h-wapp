"use client";

import { useContext, useEffect, useState, Suspense } from "react";
import Container from "@/components/container";
import BackgroundImage from "@public/assets/img/hero/ccbe06199649759.6655870ca7846.jpg";
// import { ButtonWA1 } from "@components/buttons";
// import PeopleReview from "./people-review";
// import { EVENT_CONTACT_4_MAIN_HERO_1 } from "@/lib/ads/ga-events";

const MainHero = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 10);
      });
    };
  });

  return (
    <section
      className={`bg-brand-typography min-h-screen min-w-full`}
      // style={{
      //   // padding: scroll ? "0px" : `${header_height}px 0px`,
      //   backgroundImage: `url(${BackgroundImage.src})`,
      //   backgroundPosition: "center top",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      <Container className="debug1 flex w-full flex-row text-center">
        <div className="debug2 flex h-screen w-full flex-col items-center justify-center">
          <h1 className="text-brand-primary text-3xl font-bold leading-snug xl:text-4xl">
            Terapi Bayi Susah Tidur
          </h1>
          <span className="my-3 block h-2 w-4/12 rounded bg-[#f2f623]" />
          <p className="mb-5 text-base font-normal text-brand-400 xl:text-lg">
            Bantu Tidur Bayi Lebih Nyenyak Menjaga Kepala Bayi Tumbuh Sempurna
          </p>

          {/* <PeopleReview /> */}

          <Suspense>
            {/* <ButtonWA1
              className="uppercase"
              message="Halo IKA Gorden, saya ingin memesan gorden dan berkonsultasi mengenai "
              // gtmData={EVENT_CONTACT_4_MAIN_HERO_1}
            >
              KONSULTASI GRATIS
            </ButtonWA1> */}
          </Suspense>
        </div>
        {/* <div>Text HERE 2</div> */}
      </Container>
    </section>
  );
};

export default MainHero;
