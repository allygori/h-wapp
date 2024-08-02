import { memo } from "react";
import { BubbleMenu, Editor } from "@tiptap/react";
import Icon from "../../icon";
import Toolbar from "../../toolbar";
import useTextBubbleStates from "../../../hooks/use-text-bubble-states";
import useTextBubbleCommands from "../../../hooks/use-text-bubble-commands";

const MemoButton = memo(Toolbar.Button);

type TextBubbleProps = {
  editor: Editor;
};

const TextBubble = ({ editor }: TextBubbleProps) => {
  const states = useTextBubbleStates(editor);
  const commands = useTextBubbleCommands(editor);

  return (
    <BubbleMenu
      tippyOptions={{ popperOptions: { placement: "top-start" } }}
      editor={editor}
      pluginKey="text-bubble"
      shouldShow={states.shouldShow}
      updateDelay={100}
    >
      <Toolbar.Wrapper>
        <MemoButton
          tooltip="Bold"
          tooltipShortcut={["Mod", "B"]}
          onClick={commands.onBold}
          active={states.isBold}
        >
          <Icon name="Bold" />
        </MemoButton>
        <MemoButton
          tooltip="Italic"
          tooltipShortcut={["Mod", "I"]}
          onClick={commands.onItalic}
          active={states.isItalic}
        >
          <Icon name="Italic" />
        </MemoButton>
      </Toolbar.Wrapper>
    </BubbleMenu>
  );
};

export default TextBubble;
