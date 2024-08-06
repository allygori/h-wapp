import cn from "@/lib/utils/cn";
import * as SelectPrimitive from "@radix-ui/react-select";
import IconChevronUp from "@/components/svgs/chevron-up";
import IconChevronDown from "@/components/svgs/chevron-down";
import IconCheck from "@/components/svgs/check";

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

const InputSelect2 = ({
  label = "",
  options = [],
  variant = "outline",
  size = "medium",
  className = "",
  ...props
}: Props) => {
  const wrapperClass = cn(
    "overflow-hidden w-auto min-w-44",
    variant === "outline" && "rounded-lg border border-gray-400",
    props.disabled && "bg-[#F0F0F4] cursor-not-allowed border-[#E5E5EB]",
  );

  const selectClass = cn(
    "focus:outline-none",
    size === "medium" && "px-2 py-2.5",
    props.disabled && "bg-[#F0F0F4] cursor-not-allowed",
  );

  return (
    <div className={cn("mb-4", className)}>
      {label && (
        <label
          htmlFor={props.id}
          className={cn("mb-2 block text-sm font-bold")}
        >
          {label}
        </label>
      )}
      <div className={cn("inline-block", wrapperClass)}>
        <SelectPrimitive.Root defaultValue="pekanbaru">
          <SelectPrimitive.Trigger asChild aria-label="Food">
            <button
              type="button"
              className={cn(
                "flex w-full flex-row items-center justify-between",
                selectClass,
              )}
            >
              <SelectPrimitive.Value />
              <SelectPrimitive.Icon className="ml-2">
                <IconChevronDown className="h-4 w-4 text-gray-800" />
              </SelectPrimitive.Icon>
            </button>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Content
            side="bottom"
            position="popper"
            sideOffset={5}
          >
            <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700">
              <IconChevronUp />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="absolute left-0 top-0 rounded-lg bg-white p-2 shadow-lg">
              <SelectPrimitive.Group>
                {options.map((option, key) => (
                  <SelectPrimitive.Item
                    disabled={option.value === "pekanbaru"}
                    key={`${option.value}-${key}`}
                    value={option.value.toLowerCase()}
                    className={cn(
                      "relative flex w-auto min-w-40 items-center rounded-md px-2 py-2 text-sm font-medium text-gray-700 focus:bg-gray-100",
                      "radix-disabled:opacity-50",
                      "select-none text-left focus:outline-none",
                    )}
                  >
                    <SelectPrimitive.ItemText>
                      {option.text}
                    </SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                      <IconCheck />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Group>
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700">
              <IconChevronDown className="h-4 w-4 text-gray-800" />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Root>
      </div>
    </div>
  );
};

export default InputSelect2;
