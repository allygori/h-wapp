"use client";

import { useEffect, useRef, useState, useContext } from "react";
import SectionHero from "./components/hero/hero";
import SectionIndihomePackages from "./components/pakcages/indihome-packages";
// import ContactModal from "./components/modal/contact";
import {
  // ModalContactProvider,
  ModalContactContext,
  ModalContact,
  type ModalContactContextType,
} from "./components/modal";

type Props = {};

const Page = ({}: Props) => {
  const stepsRef = useRef<HTMLElement | null>(null);
  const [showModal, setShowModal] = useState(false);
  // const context = useContext(ModalContactContext) as ModalContactContextType;

  // console.log("Page.tsx context", context);

  // useEffect(() => {
  //   console.log("Page.tsx context:", context);
  // }, [context]);

  return (
    <main className="min-h-screen min-w-full bg-gray-100">
      <ModalContactContext.Provider value={{ showModal, setShowModal }}>
        {/* section:hero */}
        <SectionHero />

        {/* section:indihome-packages */}
        <SectionIndihomePackages />

        {/* <ContactModal open={openModal} /> */}

        <ModalContact
          open={showModal}
          // open={context?.showModal}
          // closeModal={context?.closeModal}
        />
        {/* test */}
      </ModalContactContext.Provider>
    </main>
  );
};

export default Page;
