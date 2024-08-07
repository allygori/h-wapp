import { forwardRef } from "react";
import cn from "@/lib/utils/cn";

type InputTextareaElement = HTMLTextAreaElement;
type InputTextareaProps = Omit<React.ComponentProps<"textarea">, "size"> & {
  label?: string;
  variant?: "outline" | "ghost";
  size?: "small" | "medium" | "large";
  showMandatoryFlag?: boolean;
  required?: boolean;
  className?: string;
};
// type Props = React.ComponentProps<"textarea"> & {
//   label?: string;
//   variant?: "outline" | "ghost";
//   size?: "small" | "medium" | "large";
//   showMandatoryFlag?: boolean;
//   required?: boolean;
//   className?: string;
// };

const InputTextarea = forwardRef<InputTextareaElement, InputTextareaProps>(
  (props, forwardedRef) => {
    const {
      label = "",
      variant = "outline",
      size = "medium",
      showMandatoryFlag = false,
      required = false,
      className = "",
      ...rest
    } = props;

    const wrapperClass = cn(
      "overflow-hidden",
      variant === "outline" && "rounded-lg border border-gray-400",
      props.disabled &&
        "bg-[#F0F0F4] cursor-not-allowed border border-gray-300",
    );

    const textareaClass = cn(
      "w-full focus:outline-none",
      size === "medium" && "px-2 py-2.5",
      props.disabled && "bg-[#F0F0F4] cursor-not-allowed",
    );

    return (
      <div className={cn("mb-4 flex w-full flex-col", className)}>
        {label && (
          <label htmlFor={props.id} className={cn("mb-2 text-sm font-bold")}>
            {label}{" "}
            {showMandatoryFlag ? (
              required ? (
                <span className="ml-1 text-sm font-normal text-brand-pi-400">
                  *
                </span>
              ) : (
                <span className="ml-1 text-sm font-normal text-gray-400">
                  (opsional)
                </span>
              )
            ) : null}
          </label>
        )}
        <div
          className={cn("flex flex-row items-center", className, wrapperClass)}
        >
          <textarea
            ref={forwardedRef}
            className={cn(textareaClass)}
            {...rest}
          />
        </div>
      </div>
    );
  },
);

InputTextarea.displayName = "InputTextarea";

export type { InputTextareaElement, InputTextareaProps };
export default InputTextarea;
