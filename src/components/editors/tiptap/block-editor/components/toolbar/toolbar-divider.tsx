import { forwardRef, type HTMLProps } from "react";
import { cn } from "../../lib/utils";

type ToolbarDividerProps = HTMLProps<HTMLDivElement> & {
  horizontal?: boolean;
};

const ToolbarDivider = forwardRef<HTMLDivElement, ToolbarDividerProps>(
  (props, ref) => {
    const { children, horizontal = false, className, ...rest } = props;
    const classes = cn(
      "bg-neutral-200 dark:bg-neutral-800",
      horizontal
        ? "w-full min-w-[1.5rem] h-[1px] my-1 first:mt-0 last:mt-0"
        : "h-full min-h-[1.5rem] w-[1px] mx-1 first:ml-0 last:mr-0",
      className,
    );

    return <div className={classes} {...rest} ref={ref} />;
  },
);

ToolbarDivider.displayName = "Toolbar.Divider";

export type { ToolbarDividerProps };
export default ToolbarDivider;
