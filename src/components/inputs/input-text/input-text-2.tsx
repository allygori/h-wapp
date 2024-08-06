import clsx from "clsx";
import InputBase, { type InputBaseProps } from "../input-base/input-base";

type Props = InputBaseProps & {
  label?: string;
  className?: string;
};

const InputText = ({ label = "", className = "", ...props }: Props) => {
  return (
    <div className={clsx("mb-4 flex w-full flex-col", className)}>
      {label && (
        <label htmlFor={props.id} className={clsx("mb-2 text-sm font-bold")}>
          {label}
        </label>
      )}
      <InputBase {...props} size="medium" variant="outline" />
    </div>
  );
};

export default InputText;
