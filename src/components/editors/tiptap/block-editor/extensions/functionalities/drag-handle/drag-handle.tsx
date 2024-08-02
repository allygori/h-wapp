import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";

const EXTENSION_NAME = "drag-handle";

const DragHandle = Extension.create({
  name: EXTENSION_NAME,

  priority: 200,

  addOptions() {},

  addProseMirrorPlugins() {},
});
