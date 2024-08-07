import cn from "@/lib/utils/cn";

type OptionItem = {
  text: string;
  value: any;
  disabled?: boolean;
};

type Props = Omit<React.ComponentProps<"select">, "size"> & {
  label?: string;
  options?: OptionItem[];
  variant?: "outline" | "ghost";
  size?: "small" | "medium" | "large";
  className?: string;
};

const InputSelect = ({
  label = "",
  options = [],
  variant = "outline",
  size = "medium",
  className = "",
  ...props
}: Props) => {
  const wrapperClass = cn(
    "overflow-hidden",
    variant === "outline" && "rounded-lg border border-gray-400",
    props.disabled && "bg-[#F0F0F4] cursor-not-allowed border border-gray-300",
  );

  const selectClass = cn(
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
        <select className={cn(selectClass)} {...props}>
          {options.map((option, idx) => {
            return (
              <option
                key={idx}
                value={option.value}
                disabled={option.disabled}
                className={cn(
                  "my-2 block text-sm font-normal first:my-0 last:mb-0",
                  option.disabled
                    ? "cursor-not-allowed text-gray-400"
                    : "text-gray-900",
                )}
              >
                {option.text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default InputSelect;
