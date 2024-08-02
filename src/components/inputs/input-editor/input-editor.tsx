import clsx from "clsx";
import { Suspense } from "react";
import dynamic from "next/dynamic";
// import { EditorJs, type OutputData } from "@/components/editors";
import { type OutputData } from "@/components/editors";

const EditorJs = dynamic(() => import("../../editors/editor-js/editor"), {
  ssr: false,
});

type Props = {
  label?: string;
  id?: string;
  className?: string;
  co?: {
    label?: string;
    input?: string;
  };
  onChange?: (data: OutputData) => void;
};

const InputEditor = ({
  label,
  id,
  className = "",
  co,
  onChange = () => {},
}: Props) => {
  return (
    <div className={clsx("mb-4 flex w-full flex-col", className)}>
      {label && (
        <label
          htmlFor={id}
          className={clsx("mb-2 text-base font-bold", co?.label)}
        >
          {label}
        </label>
      )}
      {/* <Suspense> */}
      <EditorJs
        onChange={onChange}
        id={id}
        className={clsx(
          "rounded-lg border border-gray-300 px-2 py-2.5",
          co?.input,
        )}
      />
      {/* </Suspense> */}
    </div>
  );
};

export default InputEditor;
