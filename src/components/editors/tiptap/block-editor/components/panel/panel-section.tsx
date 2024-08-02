import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

type PanelSectionProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

const PanelSection = forwardRef<HTMLDivElement, PanelSectionProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Comp = asChild ? Slot : "div";
    const sectionClass = cn("mt-4 first:mt-1", className);

    return (
      <Comp className={sectionClass} {...rest} ref={ref}>
        {children}
      </Comp>
    );
  },
);

PanelSection.displayName = "PanelSection";

export type { PanelSectionProps };
export default PanelSection;
