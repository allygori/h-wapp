import clsx from "clsx";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("../../editors/tiptap/block-editor/block-editor"),
  {
    ssr: false,
  },
);

type Props = {
  label?: string;
  id?: string;
  className?: string;
  classes?: {
    label?: string;
    input?: string;
  };
};

const InputBlackEditor = ({ label, id, className = "", classes }: Props) => {
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
      <Editor />
    </div>
  );
};

export default InputBlackEditor;
