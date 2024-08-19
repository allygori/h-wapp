"use client";

import Image from "next/image";
import Container from "@/components/container";
import LogoToolMaster from "@/public/assets/logo/toolmaster.svg";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="flex h-12 flex-row items-center border-b border-gray-200 bg-white shadow-md">
      <Container
        className="w-full md:w-10/12 lg:w-7/12 xl:w-5/12"
        classes={{ padding: "px-4 md:px-0" }}
      >
        {/* <LogoToolMaster /> */}
        <div className="flex flex-row items-center space-x-1 rtl:space-x-reverse">
          <Image
            src={LogoToolMaster}
            alt="Logo toolmaster"
            width={24}
            height={24}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-theme-1-primary-500 xl:text-2xl">
            Tool Master
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
