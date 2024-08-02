"use client";

import clsx from "clsx";
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import ConfigContext, { type ConfigContextType } from "@/context/config";
import Container from "@/components/container";
import Navbar from "../navbar";
import ImageLogo from "@/public/assets/logo/pasang-internet.svg";

type Props = {
  className?: string;
};

const HeaderOne = ({ className = "" }: Props) => {
  const { header_height } = useContext(ConfigContext) as ConfigContextType;
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
    <header
      className={clsx(
        "fixed start-0 top-0 z-20 w-full",
        className,
        scroll
          ? `animate-fade-in-down border-b border-gray-200 bg-white`
          : "bg-transparent py-4",
      )}
      style={{ height: header_height }}
    >
      <Container className="mx-auto flex h-full w-11/12 flex-wrap items-center justify-between xl:w-10/12">
        <Link
          href="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <Image src={ImageLogo} alt="Ika Gorden Logo" width={32} height={32} />
          <span className="ml-0 self-center whitespace-nowrap text-xl font-semibold uppercase text-brand-100 xl:text-2xl">
            Pasang Internet
          </span>
        </Link>
        <Navbar />
      </Container>
    </header>
  );
};

export default HeaderOne;
