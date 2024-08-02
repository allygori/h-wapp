import { useCallback } from "react";
import { Editor } from "@tiptap/react";

const useTextBubbleCommands = (editor: Editor) => {
  const onBold = useCallback(
    () => editor.chain().focus().toggleBold().run(),
    [editor],
  );
  const onItalic = useCallback(
    () => editor.chain().focus().toggleItalic().run(),
    [editor],
  );

  return {
    onBold,
    onItalic,
  };
};

export default useTextBubbleCommands;
