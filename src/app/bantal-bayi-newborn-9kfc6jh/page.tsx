"use client";

import { useEffect } from "react";
import { changeTheme } from "@/lib/utils";
import Hero from "./_components/hero";

type Props = {};

const Page = ({}: Props) => {
  useEffect(() => {
    changeTheme("bcf");

    return () => {
      changeTheme("");
    };
  }, []);

  return (
    <main>
      <Hero />
    </main>
  );
};

export default Page;
