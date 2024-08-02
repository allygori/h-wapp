"use client";

import { useCallback } from "react";
import type { ReactNode } from "react";
import { Placement, Props } from "tippy.js";
import Tippy from "@tippyjs/react/headless";
import ShortcutKey from "./shortcut-key";

type TooltipProps = {
  children?: string | ReactNode;
  enabled?: boolean;
  title?: string;
  shortcut?: string[];
  tippyOptions?: Omit<Partial<Props>, "content">;
  content?: ReactNode;
};

type TippyProps = {
  "data-placement": Placement;
  "data-reference-hidden"?: string;
  "data-escaped"?: string;
};

const Tooltip = ({
  children,
  enabled = true,
  title,
  shortcut,
  tippyOptions = {},
}: TooltipProps) => {
  const renderTooltip = useCallback(
    (attrs: TippyProps) => {
      return (
        <span
          className="z-[999] flex items-center gap-2 rounded-lg border border-neutral-100 bg-white px-2.5 py-1 shadow-sm"
          tabIndex={-1}
          data-placement={attrs["data-placement"]}
          data-reference-hidden={attrs["data-reference-hidden"]}
          data-escaped={attrs["data-escaped"]}
        >
          {title && (
            <span className="text-xs font-medium text-neutral-500">
              {title}
            </span>
          )}
          {shortcut && (
            <span className="flex items-center gap-0.5">
              {shortcut.map((shortcutKey) => (
                <ShortcutKey key={shortcutKey}>{shortcutKey}</ShortcutKey>
              ))}
            </span>
          )}
        </span>
      );
    },
    [shortcut, title],
  );

  if (enabled) {
    return (
      <Tippy
        delay={500}
        offset={[0, 8]}
        touch={false}
        zIndex={99999}
        appendTo={document.body}
        {...tippyOptions}
        render={renderTooltip}
      >
        <span>{children}</span>
      </Tippy>
    );
  }

  return <>{children}</>;
};

export default Tooltip;
