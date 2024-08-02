import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

type PanelFooterProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

const PanelFooter = forwardRef<HTMLDivElement, PanelFooterProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Comp = asChild ? Slot : "div";
    const footerClass = cn(
      "border-t border-black/10 text-sm mt-2 pt-2",
      className,
    );

    return (
      <Comp className={footerClass} {...rest} ref={ref}>
        {children}
      </Comp>
    );
  },
);

PanelFooter.displayName = "PanelFooter";

export type { PanelFooterProps };
export default PanelFooter;
