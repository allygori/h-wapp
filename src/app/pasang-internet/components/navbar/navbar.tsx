import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { MENUS, type Menu } from "./menus.constant";
import IconArrowBottom from "@/components/svgs/chevron-down";
import ImageLogo from "@/public/assets/logo/pasang-internet.svg";
import NavbarItemMobile from "./navbar-item-mobile";
import NavbarItemDesktop from "./navbar-item-desktop";
import ConfigContext, { type ConfigContextType } from "@/context/config";

type Props = {
  className?: string;
};

const Navbar = ({ className = "" }: Props) => {
  const { show_mobile_nav, setShowMobileNav } = useContext(
    ConfigContext,
  ) as ConfigContextType;

  const handleOpen = () => {
    setShowMobileNav(true);
  };

  useEffect(() => {
    if (show_mobile_nav) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "scroll";
      };
    }
  }, [show_mobile_nav]);

  return (
    <nav className={className}>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={handleOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5 text-brand-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* nav:desktop */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse">
            {MENUS.map((item, idx) => {
              return (
                <NavbarItemDesktop
                  key={idx}
                  href={item?.href}
                  scroll={item?.scroll}
                >
                  {item?.label}
                </NavbarItemDesktop>
              );
            })}
          </ul>
        </div>
        {/* nav:mobile */}
        {show_mobile_nav ? (
          <div
            className="absolute left-0 top-0 min-h-screen w-full bg-brand-pi-400 py-4 md:hidden md:w-auto"
            id="navbar-dropdown"
          >
            <Container className="mx-auto mb-2 flex h-full w-11/12 flex-wrap items-center justify-between xl:w-10/12">
              <Link
                href="/"
                className="flex items-center space-x-2 rtl:space-x-reverse"
              >
                <Image
                  src={ImageLogo}
                  alt="Pasang Internet Logo"
                  width={32}
                  height={32}
                />
                <span className="ml-0 self-center whitespace-nowrap text-xl font-semibold uppercase text-white xl:text-2xl">
                  Pasang Internet
                </span>
              </Link>
              {/* button:close */}
              <div>
                <button
                  type="button"
                  className="flex items-center justify-center text-4xl text-brand-100"
                  onClick={() => {
                    setShowMobileNav(false);
                  }}
                >
                  &times;
                </button>
              </div>
            </Container>

            <Container className="mx-auto flex h-full w-11/12 flex-col flex-wrap">
              <ul className="m-0 p-0">
                {MENUS.map((item: Menu, idx) => {
                  return (
                    <NavbarItemMobile
                      key={idx}
                      href={item?.href}
                      scroll={item?.scroll}
                      className=""
                    >
                      {item?.label}
                    </NavbarItemMobile>
                  );
                })}
              </ul>
            </Container>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
