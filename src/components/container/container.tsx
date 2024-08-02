import type { ElementType, ReactNode } from "react";
import clsx from "clsx";

type Props = {
  as?: string;
  children?: ReactNode;
  className?: string;
  autoMargin?: boolean;
};

const Container = ({
  as = "div",
  className = "",
  children,
  autoMargin = true,
}: Props) => {
  const Component = as as ElementType;

  return (
    <Component
      className={clsx(className, "container", autoMargin ? "mx-auto" : "")}
    >
      {children}
    </Component>
  );
};

export default Container;
