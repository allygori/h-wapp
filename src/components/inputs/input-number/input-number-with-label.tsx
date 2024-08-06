import clsx from "clsx";

type Props = React.ComponentProps<"input"> & {
  label?: string;
  className?: string;
  co?: {
    label?: string;
    input?: string;
  };
};

const InputNumber = ({ label = "", co, className = "", ...props }: Props) => {
  return (
    <div className={clsx("mb-4 flex w-full flex-col", className)}>
      {label && (
        <label
          htmlFor={props.id}
          className={clsx("mb-2 text-base font-bold", co?.label)}
        >
          {label}
        </label>
      )}
      <input
        type="text"
        name={props.name}
        id={props.id}
        {...props}
        className={clsx(
          "rounded-lg border border-gray-300 px-2 py-2.5",
          co?.input,
        )}
      />
    </div>
  );
};

export default InputNumber;
