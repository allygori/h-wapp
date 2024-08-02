"use client";

import "./styles/index.css";
import { EditorContent } from "@tiptap/react";
import useBlockEditor from "./hooks/use-block-editor";
import { useRef } from "react";
import { TextBubble } from "./components/bubbles";
import { ContentItemMenu } from "./components/menus";
import ViewWrapper from "./extensions/nodes/view-wrapper";

type Props = {};

const BlockEditor = (props: Props) => {
  const { editor, content } = useBlockEditor();
  const menuContainerRef = useRef(null);

  if (!editor) {
    return null;
  }

  return (
    // <EditorContext.Provider>
    <div className="flex flex-row">
      <div
        className="flex h-full w-7/12 border border-neutral-300"
        ref={menuContainerRef}
      >
        <div className="relative flex h-full flex-1 flex-col">
          <EditorContent editor={editor} className="flex-1 overflow-y-auto" />
          {/* <ContentItemMenu editor={editor} /> */}
          <ViewWrapper editor={editor} />
          <TextBubble editor={editor} />
        </div>
      </div>
      <div className="w-5/12">
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div>
    </div>
    // </EditorContext.Provider>
  );
};

export default BlockEditor;

// VERSION WITH ROOT AND CONTENT
// import EditorRoot from "./editor-root";
// import EditorContent from "./editor-content";

// type Props = {
//   className?: string;
// };

// const BlockEditor = ({ className = "" }: Props) => {
//   return (
//     <EditorRoot>
//       <EditorContent className={className}></EditorContent>
//     </EditorRoot>
//   );
// };

// export default BlockEditor;
