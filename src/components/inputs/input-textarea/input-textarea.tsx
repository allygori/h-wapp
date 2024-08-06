import cn from "@/lib/utils/cn";

type Props = React.ComponentProps<"textarea"> & {
  label?: string;
  variant?: "outline" | "ghost";
  size?: "small" | "medium" | "large";
  className?: string;
};

const InputTextarea = ({
  label = "",
  variant = "outline",
  size = "medium",
  className = "",
  ...props
}: Props) => {
  const wrapperClass = cn(
    "overflow-hidden",
    variant === "outline" && "rounded-lg border border-gray-400",
    props.disabled && "bg-[#F0F0F4] cursor-not-allowed border-[#E5E5EB]",
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
          {label}
        </label>
      )}
      <div
        className={cn("flex flex-row items-center", className, wrapperClass)}
      >
        <textarea className={cn(textareaClass)} {...props} />
      </div>
    </div>
  );
};

export default InputTextarea;
