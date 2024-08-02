import { useContext, useEffect, useMemo, useState } from "react";
import { Editor, useEditor, type JSONContent } from "@tiptap/react";
import { INITIAL_CONTENT } from "../lib/data/initial-content";
import ExtensionKit from "../extensions/extension-kit";
import StarterKit from "@tiptap/starter-kit";

declare global {
  interface Window {
    editor: Editor | null;
  }
}

const useBlockEditor = () => {
  const [content, setContent] = useState<JSONContent | null>(null);
  const editor = useEditor(
    {
      autofocus: true,
      extensions: [...ExtensionKit()],
      editorProps: {
        attributes: {
          autocomplte: "off",
          autocorrect: "off",
          autocapitalize: "off",
          class: "min-h-full",
        },
      },
      onCreate: ({ editor }) => {
        // provider?.on("synced", () => {
        //   if (editor.isEmpty) {
        //     editor.commands.setContent(INITIAL_CONTENT)
        //   }
        // })
      },
      onUpdate: ({ editor }) => {
        const json = editor.getJSON();
        setContent(json);
      },
    },
    [],
  );

  const characterCount = editor?.storage?.characterCount || {
    characters: () => 0,
    words: () => 0,
  };

  window.editor = editor;

  return {
    editor,
    content,
    characterCount,
  };
};

export default useBlockEditor;
