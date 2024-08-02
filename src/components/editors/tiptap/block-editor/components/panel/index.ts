import Panel, { type PanelProps } from "./panel";
import PanelHeader, { type PanelHeaderProps } from "./panel-header";
import PanelHeadline, { type PanelHeadlineProps } from "./panel-headline";
import PanelDivider, { type PanelDividerProps } from "./panel-divider";
import PanelSection, { type PanelSectionProps } from "./panel-section";
import PanelFooter, { type PanelFooterProps } from "./panel-footer";

const Root = Panel;
const Header = PanelHeader;
const Headline = PanelHeadline;
const Divider = PanelDivider;
const Section = PanelSection;
const Footer = PanelFooter;

export type {
  PanelProps,
  PanelHeaderProps,
  PanelHeadlineProps,
  PanelDividerProps,
  PanelSectionProps,
  PanelFooterProps,
};
export {
  Panel,
  PanelHeader,
  PanelHeadline,
  PanelDivider,
  PanelSection,
  PanelFooter,
  //
  Root,
  Header,
  Headline,
  Divider,
  Section,
  Footer,
};
