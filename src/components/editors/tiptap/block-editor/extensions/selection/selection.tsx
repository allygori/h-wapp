import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Decoration, DecorationSet } from "@tiptap/pm/view";

const EXTENSION_NAME = "selection";

const Selection = Extension.create({
  name: EXTENSION_NAME,

  addProseMirrorPlugins() {
    const { editor } = this;

    return [
      new Plugin({
        key: new PluginKey(EXTENSION_NAME),
        props: {
          decorations(state) {
            if (state.selection.empty) {
              return null;
            }

            if (editor.isFocused === true) {
              return null;
            }

            return DecorationSet.create(state.doc, [
              Decoration.inline(state.selection.from, state.selection.to, {
                class: EXTENSION_NAME,
              }),
            ]);
          },
        },
      }),
    ];
  },
});

export default Selection;
