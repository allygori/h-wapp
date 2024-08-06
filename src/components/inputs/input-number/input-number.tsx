import cn from "@/lib/utils/cn";

type Props = React.ComponentProps<"input"> & {
  label?: string;
  className?: string;
  classes?: {
    input?: string;
  };
};

const InputNumber = ({
  label = "",
  classes = {},
  className = "",
  ...props
}: Props) => {
  return (
    <div className={cn("mb-4 flex w-full flex-col", className)}>
      <input
        type="text"
        name={props.name}
        id={props.id}
        {...props}
        className={cn(
          "rounded-lg border border-gray-300 px-2 py-2.5",
          classes?.input,
        )}
      />
    </div>
  );
};

export default InputNumber;
