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
      props.disabled && "bg-[#F0F0F4] cursor-not-allowed border-[#E5E5EB]",
    );

    const inputClass = cn(
      "w-full focus:outline-none",
      size === "medium" && "px-2 py-2.5",
      props.disabled && "bg-[#F0F0F4] cursor-not-allowed",
    );

    const iconWrapperClass = cn("pl-2", props.disabled && "opacity-50");

    return (
      <div
        ref={forwardedRef}
        className={cn("flex flex-row items-center", className, wrapperClass)}
      >
        <div className={iconWrapperClass}>{icon ? icon : null}</div>
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
    );
  },
);

InputBase.displayName = "InputBase";

export type { InputBaseElement, InputBaseProps };
export default InputBase;
