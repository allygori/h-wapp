import { Editor } from "@tiptap/react";
import isTableGripSelected from "./is-table-grip-selected";

// import {
//   AiWriter,
//   AiImage,
//   Figcaption,
//   HorizontalRule,
//   ImageBlock,
//   ImageUpload,
//   Link,
//   CodeBlock,
// } from "../../extensions";

const isCustomNodeSelected = (editor: Editor, node: HTMLElement) => {
  const customNodes: string[] = [
    // HorizontalRule.name,
    // ImageBlock.name,
    // ImageUpload.name,
    // CodeBlock.name,
    // ImageBlock.name,
    // Link.name,
    // AiWriter.name,
    // AiImage.name,
    // Figcaption.name,
  ];

  return (
    customNodes.some((type) => editor.isActive(type)) ||
    isTableGripSelected(node)
  );
};

export default isCustomNodeSelected;
