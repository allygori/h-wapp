import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

type PanelHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: string;
};

const PanelHeader = forwardRef<HTMLDivElement, PanelHeaderProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Comp = asChild ? Slot : "div";
    const headerClass = cn(
      "border-b border-b-black/10 text-sm mb-2 pb-2",
      className,
    );

    return (
      <Comp className={headerClass} {...rest} ref={ref}>
        {children}
      </Comp>
    );
  },
);

PanelHeader.displayName = "PanelHeader";

export type { PanelHeaderProps };
export default PanelHeader;
