import type { ElementType, ReactNode } from "react";
import { useContext } from "react";
import Link from "next/link";
import ConfigContext, { type ConfigContextType } from "../config";

type Props = {
  as?: string;
  children?: ReactNode;
  href?: string;
  scroll?: boolean;
  className?: string;
};

const NavbarItemMobile = ({
  as = "li",
  children,
  href = "/",
  scroll = false,
  className = "",
}: Props) => {
  const Component = as as ElementType;
  const { setShowMobileNav } = useContext(ConfigContext) as ConfigContextType;

  const handleClick = () => {
    setShowMobileNav(false);
  };

  return (
    <Component className={className}>
      <Link
        href={href}
        className="block w-full py-2 text-brand-100"
        aria-current="page"
        scroll={scroll}
        onClick={handleClick}
      >
        {children}
      </Link>
    </Component>
  );
};

export default NavbarItemMobile;
