import { useState } from "react";
import { Editor } from "@tiptap/react";
import { List, arrayMove } from "react-movable";
import * as Popover from "@radix-ui/react-popover";
import useData from "../../hooks/use-data";
import useContentItemActions from "../../hooks/use-content-item-actions";
import Toolbar from "../toolbar";
import Icon from "../icon";
import Surface from "../surface";
import { DropdownButton } from "../dropdown";

type ContentItemMenuProps = {
  editor: Editor;
};

const ContentItemMenu = ({ editor }: ContentItemMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [items, setItems] = useState([]);
  const data = useData();
  const actions = useContentItemActions(
    editor,
    data.currentNode,
    data.currentNodePos,
  );

  return (
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
    </div>
  );

  // return (
  //   <List
  //     values={items}
  //     onChange={({ oldIndex, newIndex }) =>
  //       setItems(arrayMove(items, oldIndex, newIndex))
  //     }
  //     renderList={({ children, props }) => {
  //       return <ul {...props}>{children}</ul>;
  //     }}
  //     renderItem={({ value, props }) => {
  //       return (
  //         <li key={props.key} {...props}>
  //           {value}
  //         </li>
  //       );
  //     }}
  //   />
  // );
};

export default ContentItemMenu;
