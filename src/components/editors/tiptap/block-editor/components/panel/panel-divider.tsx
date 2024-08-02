import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

type PanelDividerProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

const PanelDivider = forwardRef<HTMLDivElement, PanelDividerProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Comp = asChild ? Slot : "div";
    const dividerClass = cn("border-b border-b-black/10 mb-2 pb-2", className);

    return (
      <Comp className={dividerClass} {...rest} ref={ref}>
        {children}
      </Comp>
    );
  },
);

PanelDivider.displayName = "PanelDivider";

export type { PanelDividerProps };
export default PanelDivider;
