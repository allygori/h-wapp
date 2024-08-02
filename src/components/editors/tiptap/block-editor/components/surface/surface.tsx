import { forwardRef, type HTMLProps } from "react";
import { cn } from "../../lib/utils";

type Props = HTMLProps<HTMLDivElement> & {
  withShadow?: boolean;
  withBorder?: boolean;
  className?: string;
};

const Surface = forwardRef<HTMLDivElement, Props>(
  (
    { children, className, withShadow = true, withBorder = true, ...props },
    ref,
  ) => {
    const surfaceClass = cn(
      className,
      "bg-white rounded-lg dark:bg-black",
      withShadow ? "shadow-sm" : "",
      withBorder ? "border border-neutral-200 dark:border-neutral-800" : "",
    );

    return (
      <div className={surfaceClass} {...props} ref={ref}>
        {children}
      </div>
    );
  },
);

Surface.displayName = "Surface";

export default Surface;
