import type { ElementType, ReactNode } from "react";
import Link from "next/link";

type Props = {
  as?: string;
  children?: ReactNode;
  href?: string;
  scroll?: boolean;
  className?: string;
};

const NavbarItemDesktop = ({
  as = "li",
  children,
  href = "/",
  scroll = false,
  className = "",
}: Props) => {
  const Component = as as ElementType;

  return (
    <Component className={className}>
      <Link
        href={href}
        className="block px-3 py-2 text-brand-100"
        aria-current="page"
        scroll={scroll}
      >
        {children}
      </Link>
    </Component>
  );
};

export default NavbarItemDesktop;
