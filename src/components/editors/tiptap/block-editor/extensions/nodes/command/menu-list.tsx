import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  Fragment,
} from "react";
import { Editor } from "@tiptap/core";
import type { Command, CommandList } from "./command-list.constant";
import Surface from "../../../components/surface";
import { DropdownButton } from "../../../components/dropdown";
import Icon from "../../../components/icon";

type Props = {
  editor: Editor;
  items: CommandList[];
  command: (command: Command) => void;
  className?: string;
};

const MenuList = forwardRef((props: Props, ref) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const activeItem = useRef<HTMLButtonElement>(null);
  const [selectedCommandListIndex, setSelectedCommandListIndex] = useState(0);
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(0);

  // Anytime the groups change, i.e. the user types to narrow it down, we want to
  // reset the current selection to the first menu item
  useEffect(() => {
    setSelectedCommandListIndex(0);
    setSelectedCommandIndex(0);
  }, [props.items]);

  const selectItem = useCallback(
    (groupIndex: number, commandIndex: number) => {
      const command = props.items[groupIndex].commands[commandIndex];
      props.command(command);
    },
    [props],
  );

  useImperativeHandle(ref, () => {
    return {
      onKeyDown: ({ event }: { event: React.KeyboardEvent }) => {
        if (event.key === "ArrowDown") {
          if (!props.items.length) {
            return false;
          }

          const commands = props.items[selectedCommandIndex].commands;
          let newCommandIndex = selectedCommandIndex + 1;
          let newCommandListIndex = selectedCommandListIndex;

          if (commands.length - 1 < newCommandIndex) {
            newCommandIndex = 0;
            newCommandListIndex = selectedCommandIndex + 1;
          }

          if (props.items.length - 1 < newCommandListIndex) {
            newCommandListIndex = 0;
          }

          setSelectedCommandIndex(newCommandIndex);
          setSelectedCommandListIndex(newCommandListIndex);

          return true;
        }

        if (event.key === "ArrowUp") {
          if (!props.items.length) {
            return false;
          }

          let newCommandIndex = selectedCommandIndex - 1;
          let newCommandListIndex = selectedCommandListIndex;

          if (newCommandIndex < 0) {
            newCommandListIndex = selectedCommandListIndex - 1;
            newCommandIndex =
              props.items[newCommandIndex]?.commands.length - 1 || 0;
          }

          if (newCommandListIndex < 0) {
            newCommandListIndex = props.items.length - 1;
            newCommandIndex = props.items[newCommandIndex].commands.length - 1;
          }

          setSelectedCommandIndex(newCommandIndex);
          setSelectedCommandListIndex(newCommandListIndex);

          return true;
        }

        if (event.key === "Enter") {
          if (
            !props.items.length ||
            selectedCommandListIndex === -1 ||
            selectedCommandIndex === -1
          ) {
            return false;
          }

          selectItem(selectedCommandListIndex, selectedCommandIndex);

          return true;
        }

        return false;
      },
    };
  });

  useEffect(() => {
    if (activeItem.current && scrollContainer.current) {
      const offsetTop = activeItem.current.offsetTop;
      const offsetHeight = activeItem.current.offsetHeight;

      scrollContainer.current.scrollTop = offsetTop - offsetHeight;
    }
  }, [selectedCommandIndex, selectedCommandListIndex]);

  const createCommandClickHandler = useCallback(
    (commandListIndex: number, commandIndex: number) => {
      return () => {
        selectItem(commandListIndex, commandIndex);
      };
    },
    [selectItem],
  );

  if (!props.items.length) {
    return null;
  }

  return (
    <Surface
      ref={scrollContainer}
      className="max-h-[min(80vh, 24rem)] mb-8 flex-wrap overflow-auto p-2 text-black"
    >
      <div className="grid grid-cols-1 gap-0.5">
        {props.items.map((commandList, commandListIndex: number) => {
          return (
            <Fragment key={`${commandList.title}-wrapper`}>
              <div
                className="col-[1/-1] mx-2 mt-4 select-none text-[0.65rem] font-semibold uppercase tracking-wider text-neutral-500 first:mt-0.5"
                key={`${commandList.title}`}
              >
                {commandList.title}
              </div>
              {commandList.commands.map((command, commandIndex: number) => {
                return (
                  <DropdownButton
                    key={`${command.label}`}
                    isActive={
                      selectedCommandListIndex === commandListIndex &&
                      selectedCommandIndex === commandIndex
                    }
                    onClick={createCommandClickHandler(
                      commandListIndex,
                      commandIndex,
                    )}
                  >
                    <Icon name={command.iconName} className="mr-1" />
                    {command.label}
                  </DropdownButton>
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </Surface>
  );
});

MenuList.displayName = "MenuList";

export default MenuList;
