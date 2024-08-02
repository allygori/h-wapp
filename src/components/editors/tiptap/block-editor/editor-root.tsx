import type { FC, ReactNode } from "react";
import BlockEditorRootContext from "./context/root";

export type EditorRootProps = {
  children?: ReactNode;
};

const EditorRoot: FC<EditorRootProps> = ({ children }: EditorRootProps) => {
  return (
    <BlockEditorRootContext.Provider value={{}}>
      {children}
    </BlockEditorRootContext.Provider>
  );
};

export default EditorRoot;
