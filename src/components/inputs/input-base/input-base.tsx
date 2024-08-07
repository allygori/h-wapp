import { forwardRef } from "react";
import cn from "@/lib/utils/cn";

type InputBaseElement = HTMLInputElement;
type InputBaseProps = Omit<React.ComponentProps<"input">, "size"> & {
  icon?: React.ReactNode;
  variant?: "outline" | "ghost";
  size?: "small" | "medium" | "large";
  className?: string;
};

const InputBase = forwardRef<InputBaseElement, InputBaseProps>(
  (
    {
      icon,
      variant = "outline",
      size = "medium",
      className = "",
      ...props
    }: InputBaseProps,
    forwardedRef,
  ) => {
    const wrapperClass = cn(
      "overflow-hidden",
      variant === "outline" && "rounded-lg border border-gray-400",
      props.disabled &&
        "bg-[#F0F0F4] cursor-not-allowed border border-gray-300",
    );

    const inputClass = cn(
      "w-full focus:outline-none",
      size === "medium" && "px-2 py-2.5",
      props.disabled && "bg-[#F0F0F4] cursor-not-allowed",
      icon && "border-l border-gray-300",
    );

    const iconWrapperClass = cn(
      "pl-3 pr-3 overflow-hidden",
      props.disabled && "opacity-50",
    );

    return (
      <div ref={forwardedRef} className={cn("w-full", className)}>
        <div
          className={cn(
            "flex h-full w-full flex-row items-center",
            wrapperClass,
          )}
        >
          {icon ? <div className={cn(iconWrapperClass)}>{icon}</div> : null}
          {/* <p className="h-full">+62</p> */}
          <input
            type={props.type || "text"}
            name={props.name}
            id={props.id}
            {...props}
            className={cn(
              // "rounded-lg border border-gray-300 px-2 py-2.5",
              inputClass,
            )}
          />
        </div>
      </div>
    );
  },
);

InputBase.displayName = "InputBase";

export type { InputBaseElement, InputBaseProps };
export default InputBase;
