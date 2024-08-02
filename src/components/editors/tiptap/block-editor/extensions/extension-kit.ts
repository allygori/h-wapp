// import Document from "./document";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Highlight from "@tiptap/extension-highlight";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import GlobalDragHandle from "tiptap-extension-global-drag-handle";
import AutoJoiner from "tiptap-extension-auto-joiner";
import Heading from "./nodes/heading";
import Command from "./nodes/command";

const ExtensionKit = () => [
  // Document,
  Bold,
  Italic,
  Document,
  Paragraph,
  Text,
  Highlight.configure({ multicolor: true }),
  Heading.configure({
    levels: [1, 2, 3, 4, 5, 6],
  }),
  Command,
  GlobalDragHandle,
  AutoJoiner,
];

export default ExtensionKit;
