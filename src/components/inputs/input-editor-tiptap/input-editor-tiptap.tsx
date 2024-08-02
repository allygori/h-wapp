import clsx from "clsx";
import dynamic from "next/dynamic";
import { type OutputData } from "@/components/editors";

const Editor = dynamic(() => import("../../editors/tiptap/editor-01"), {
  ssr: false,
});

type Props = {
  label?: string;
  id?: string;
  className?: string;
  classes?: {
    label?: string;
    input?: string;
  };
  // onChange?: (data: OutputData) => void;
};

const InputEditor = ({
  label,
  id,
  className = "",
  classes,
  // onChange = () => {},
}: Props) => {
  return (
    <div className={clsx("mb-4 flex w-full flex-col", className)}>
      {label && (
        <label
          htmlFor={id}
          className={clsx("mb-2 text-base font-bold", classes?.label)}
        >
          {label}
        </label>
      )}
      <Editor
      // onChange={onChange}
      // id={id}
      // className={clsx(
      //   "rounded-lg border border-gray-300 px-2 py-2.5",
      //   classes?.input,
      // )}
      />
    </div>
  );
};

export default InputEditor;
