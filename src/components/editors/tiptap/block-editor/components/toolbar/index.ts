import ToolbarWrapper, { type ToolbarWrapperProps } from "./toolbar-wrapper";
import ToolbarButton, { type ToolbarButtonProps } from "./toolbar-button";
import ToolbarDivider, { type ToolbarDividerProps } from "./toolbar-divider";

const Toolbar = {
  Wrapper: ToolbarWrapper,
  Divider: ToolbarDivider,
  Button: ToolbarButton,
};

export type { ToolbarWrapperProps, ToolbarButtonProps, ToolbarDividerProps };
export { ToolbarWrapper, ToolbarDivider, ToolbarButton };
export default Toolbar;
