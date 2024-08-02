import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

type PanelHeadlineProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

const PanelHeadline = forwardRef<HTMLDivElement, PanelHeadlineProps>(
  ({ asChild, className, children, ...rest }, ref) => {
    const Comp = asChild ? Slot : "div";
    const headlineClass = cn(
      "text-black/80 dark:text-white/80 text-xs font-medium mb-2 ml-1.5",
      className,
    );

    return (
      <Comp className={headlineClass} {...rest} ref={ref}>
        {children}
      </Comp>
    );
  },
);

PanelHeadline.displayName = "PanelHeadline";

export type { PanelHeadlineProps };
export default PanelHeadline;
