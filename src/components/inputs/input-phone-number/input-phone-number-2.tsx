import clsx from "clsx";
import { forwardRef, useState } from "react";
// import InputBase, { type InputBaseProps } from "../input-base/input-base";
import IconWhatsApp from "@/components/svgs/whatsapp";
import cn from "@/lib/utils/cn";

type InputPhoneNumberElement = HTMLInputElement;
type InputPhoneNumberProps = Omit<React.ComponentProps<"input">, "size"> & {
  label?: string;
  icon?: React.ReactNode;
  variant?: "outline" | "ghost";
  size?: "small" | "medium" | "large";
  showMandatoryFlag?: boolean;
  required?: boolean;
  className?: string;
};

type InputValue = React.ComponentProps<"input">["value"];

// type Props = InputPhoneNumberProps & {
//   label?: string;
//   className?: string;
//   onChange?: () => void;
// };

const InputPhoneNumber2 = forwardRef<
  InputPhoneNumberElement,
  InputPhoneNumberProps
>((props, forwardedRef) => {
  const {
    icon,
    label,
    variant = "outline",
    size = "medium",
    showMandatoryFlag = false,
    required = false,
    className = "",
    onChange = () => {},
    ...rest
  } = props;
  const [formattedValue, setFormattedValue] = useState<InputValue>(props.value);
  const wrapperClass = cn(
    "overflow-hidden",
    variant === "outline" && "rounded-lg border border-gray-400",
    props.disabled && "bg-[#F0F0F4] cursor-not-allowed border border-gray-300",
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

  const formatPhoneNumber = (num: InputValue) => {
    let cleaned = ("" + num).replace(/\D/g, "");
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      let intlCode = match[1] ? "+62 " : "";
      return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setFormattedValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    } else {
      setFormattedValue((prev) => prev?.toString().replace(/[^\d.-]+/g, ""));
      // setFormattedValue((prev) => formatPhoneNumber(prev));
      // setFormattedValue((prev): InputValue => {
      //   if (prev !== null) {
      //     return formatPhoneNumber(prev);
      //   }
      //   return undefined;
      // });
    }
  };

  return (
    <div className={clsx("mb-4 flex w-full flex-col", className)}>
      {/* <div className="">
      <IconWhatsApp className="h-4 w-4" />
      </div> */}
      {label && (
        <label htmlFor={props.id} className={clsx("mb-2 text-sm font-bold")}>
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

      <div className={cn("w-full", className)}>
        <div
          className={cn(
            "flex h-full w-full flex-row items-center",
            wrapperClass,
          )}
        >
          {icon ? <div className={cn(iconWrapperClass)}>{icon}</div> : null}
          {/* <p className="h-full">+62</p> */}
          <input
            ref={forwardedRef}
            type={"tel"}
            name={props.name}
            id={props.id}
            {...rest}
            // size="medium"
            // variant="outline"
            value={formattedValue}
            minLength={9}
            maxLength={16}
            pattern="^[0-9\b]+$"
            onChange={handleChange}
            className={cn(inputClass)}
          />
        </div>
      </div>

      {/* <InputBase
          icon={<IconWhatsApp className="h-5 w-5 text-green-400" />}
          {...props}
          type="tel"
          size="medium"
          variant="outline"
          minLength={9}
          maxLength={14}
          pattern="^[0-9\b]+$"
          onChange={handleChange}
        /> */}
    </div>
  );
});

InputPhoneNumber2.displayName = "InputPhoneNumber";

export type { InputPhoneNumberElement, InputPhoneNumberProps };
export default InputPhoneNumber2;
