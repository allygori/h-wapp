import { forwardRef, type HTMLProps } from "react";
import { cn } from "../../lib/utils";
import Surface from "../surface";

type ToolbarWrapperProps = HTMLProps<HTMLDivElement> & {
  isVertical?: boolean;
  shouldShowContent?: boolean;
};

const ToolbarWrapper = forwardRef<HTMLDivElement, ToolbarWrapperProps>(
  (props, ref) => {
    const {
      children,
      isVertical = false,
      shouldShowContent = true,
      className,
      ...rest
    } = props;
    const classes = cn(
      "text-black inline-flex h-full leading-none gap-0.5",
      isVertical ? "flex-col p-2" : "flex-row p-1 items-center",
      className,
    );

    return (
      shouldShowContent && (
        <Surface className={classes} {...rest} ref={ref}>
          {children}
        </Surface>
      )
    );
  },
);

ToolbarWrapper.displayName = "Toolbar.Wrapper";

export type { ToolbarWrapperProps };
export default ToolbarWrapper;
