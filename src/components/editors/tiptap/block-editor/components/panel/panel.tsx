import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";
import Surface from "../surface";

type PanelProps = React.HTMLAttributes<HTMLDivElement> & {
  spacing?: "medium" | "small";
  noShadow?: boolean;
  asChild?: boolean;
};

const Panel = forwardRef<HTMLDivElement, PanelProps>(
  ({ asChild, className, children, spacing, noShadow, ...rest }, ref) => {
    const Comp = asChild ? Slot : "div";
    const panelClass = cn(
      "p-2",
      spacing === "small" && "p-[0.2rem]",
      className,
    );

    return (
      <Comp ref={ref} {...rest}>
        <Surface className={panelClass} withShadow={!noShadow}>
          {children}
        </Surface>
      </Comp>
    );
  },
);

Panel.displayName = "Panel";

export type { PanelProps };
export default Panel;
