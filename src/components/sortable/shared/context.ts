import { createContext } from "react";
import type { DraggableSyntheticListeners } from "@dnd-kit/core";

type SortableItemContextType = {
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
};

const SortableItemContext = createContext<SortableItemContextType>({
  attributes: {},
  listeners: undefined,
  ref() {},
});

export type { SortableItemContextType };
export { SortableItemContext };
