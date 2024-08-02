import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { NodeViewContent, NodeViewWrapper, Editor } from "@tiptap/react";
import React from "react";
import Toolbar from "../../../components/toolbar";
import Icon from "../../../components/icon";
import Surface from "../../../components/surface";
import { DropdownButton } from "../../../components/dropdown";
import useData from "../../../hooks/use-data";
import useContentItemActions from "../../../hooks/use-content-item-actions";

type ContentItemMenuProps = {
  editor: Editor;
};

const ViewWrapper = ({ editor }: ContentItemMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [items, setItems] = useState([]);
  const data = useData();
  const actions = useContentItemActions(
    editor,
    data.currentNode,
    data.currentNodePos,
  );

  return (
    <NodeViewWrapper className="node-view-wrapper">
      <div className="flex items-center gap-0.5">
        <Toolbar.Button onClick={actions.handleAdd}>
          <Icon name="Plus" />
        </Toolbar.Button>
        <Popover.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Popover.Trigger asChild>
            <Toolbar.Button>
              <Icon name="GripVertical" />
            </Toolbar.Button>
          </Popover.Trigger>
          <Popover.Content side="bottom" align="start" sideOffset={8}>
            <Surface className="flex min-w-[16rem] flex-col p-2">
              <Popover.Close>
                <DropdownButton onClick={actions.resetTextFormatting}>
                  <Icon name="RemoveFormatting" />
                  Clear Formatting
                </DropdownButton>
              </Popover.Close>
              <Popover.Close>
                <DropdownButton onClick={actions.resetTextFormatting}>
                  <Icon name="Clipboard" />
                  Copy to Clipboard
                </DropdownButton>
              </Popover.Close>
              <Popover.Close>
                <DropdownButton onClick={actions.resetTextFormatting}>
                  <Icon name="Copy" />
                  Duplicate
                </DropdownButton>
              </Popover.Close>
              <Toolbar.Divider horizontal />
            </Surface>
          </Popover.Content>
        </Popover.Root>
      </div>{" "}
      <NodeViewContent />
    </NodeViewWrapper>
  );
};

export default ViewWrapper;
