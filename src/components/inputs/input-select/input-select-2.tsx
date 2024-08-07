import { forwardRef } from "react";
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

type InputSelectElement = HTMLButtonElement;
type InputSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  label?: string;
  placeholder?: string;
  options?: OptionItem[];
  variant?: "outline" | "ghost";
  size?: "small" | "medium" | "large";
  showMandatoryFlag?: boolean;
  required?: boolean;
  className?: string;
  // onChange: (value: string) => void | undefined;
  onValueChange?: (value: string) => void | undefined;
};

const InputSelect2 = forwardRef<InputSelectElement, InputSelectProps>(
  (props, forwardedRef) => {
    const {
      label = "",
      placeholder = undefined,
      options = [],
      variant = "outline",
      size = "medium",
      showMandatoryFlag = false,
      required = false,
      className = "",
      onValueChange = () => {},
      ...rest
    } = props;

    const wrapperClass = cn(
      "overflow-hidden w-auto min-w-44",
      variant === "outline" && "rounded-lg border border-gray-400",
      props.disabled &&
        "bg-[#F0F0F4] cursor-not-allowed border border-gray-300",
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
        <div className={cn("inline-block", wrapperClass)}>
          <SelectPrimitive.Root
            name={props.name}
            value={props.value as string}
            // onValueChange={(val) => {
            //   return props.onChange({ target: { value: val}});
            // }}
            // onValueChange={props.onChange}
            onValueChange={onValueChange}
            defaultValue={props.defaultValue as string}
            disabled={props.disabled}
            required={required}
          >
            <SelectPrimitive.Trigger
              ref={forwardedRef}
              aria-label={label}
              className={cn(
                "flex w-full flex-row items-center justify-between",
                // "data-[placeholder]:text-muted-foreground",
                "data-[placeholder]:text-gray-400",
                selectClass,
              )}
            >
              {/* <button
              type="button"
              className={cn(
                "flex w-full flex-row items-center justify-between",
                selectClass,
              )}
            > */}
              <SelectPrimitive.Value
                placeholder={placeholder}
                // className="text-gray-300"
              />
              <SelectPrimitive.Icon className="ml-2">
                <IconChevronDown className="h-4 w-4 text-gray-800" />
              </SelectPrimitive.Icon>
              {/* </button> */}
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
                      disabled={option.disabled}
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
  },
);

InputSelect2.displayName = "InputSelect";

export type { InputSelectElement, InputSelectProps };
export default InputSelect2;
