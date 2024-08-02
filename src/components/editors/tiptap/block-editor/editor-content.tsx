import { forwardRef, useRef } from "react";
import { EditorProvider } from "@tiptap/react";
import type { EditorProviderProps, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ExtensionKit from "./extensions/extension-kit";

export type EditorContentProps = Omit<EditorProviderProps, "content"> & {
  readonly children?: React.ReactNode;
  readonly initialContent?: JSONContent;
  readonly className?: string;
};

const EditorContent = forwardRef<HTMLDivElement, EditorContentProps>(
  (props, ref) => {
    const { children, initialContent, className, ...rest } = props;

    return (
      <div ref={ref} className={className}>
        <EditorProvider
          {...rest}
          content={initialContent}
          extensions={[StarterKit, ExtensionKit]}
        >
          {children}
        </EditorProvider>
      </div>
    );
  },
);

EditorContent.displayName = "EditorContent";

export default EditorContent;
