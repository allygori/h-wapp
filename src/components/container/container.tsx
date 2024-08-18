import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  as?: string;
  children?: ReactNode;
  className?: string;
  autoMargin?: boolean;
  classes?: {
    padding?: string;
  };
};

const Container = ({
  as = "div",
  className = "",
  children,
  autoMargin = true,
  classes = {},
}: Props) => {
  const Component = as as ElementType;

  return (
    <Component
      className={cn(
        className,
        "container",
        autoMargin ? "mx-auto" : "",
        classes.padding,
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
