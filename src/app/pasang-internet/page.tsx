"use client";

import { useRef } from "react";
import SectionHero from "./components/hero/hero";
import SectionIndihomePackages from "./components/pakcages/indihome-packages";

type Props = {};

const GordenKantorPage = ({}: Props) => {
  const stepsRef = useRef<HTMLElement | null>(null);

  return (
    <main className="min-h-screen min-w-full bg-gray-100">
      {/* section:hero */}
      <SectionHero />

      {/* section:indihome-packages */}
      <SectionIndihomePackages />
    </main>
  );
};

export default GordenKantorPage;
