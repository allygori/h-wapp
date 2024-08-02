import { forwardRef } from "react";
import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import Button, { type ButtonProps } from "../button/button";
import Tooltip from "../tooltip";

type ToolbarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  activeClassName?: string;
  tooltip?: string;
  tooltipShortcut?: string[];
  buttonSize?: ButtonProps["buttonSize"];
  variant?: ButtonProps["variant"];
};

const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  (props, ref) => {
    const {
      children,
      buttonSize = "icon",
      variant = "ghost",
      tooltip,
      tooltipShortcut,
      className,
      activeClassName,
      ...rest
    } = props;
    const buttonlClass = cn("gap-1 min-w-[2rem] px-2 w-auto", className);

    const content = (
      <Button
        activeClassName={activeClassName}
        className={buttonlClass}
        variant={variant}
        buttonSize={buttonSize}
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    );

    if (tooltip) {
      return (
        <Tooltip title={tooltip} shortcut={tooltipShortcut}>
          {content}
        </Tooltip>
      );
    }

    return content;
  },
);

ToolbarButton.displayName = "Toolbar.Button";

export type { ToolbarButtonProps };
export default ToolbarButton;
