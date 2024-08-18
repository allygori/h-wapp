import type { CSSProperties, PropsWithChildren } from "react";
import { useMemo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { SortableItemContext } from "./shared/context";
import { cn } from "@/lib/utils";

type Props = {
  id: UniqueIdentifier;
  className?: string;
  // children?: React.ReactNode;
};

const SortableItem = ({
  children,
  id,
  className = "",
}: PropsWithChildren<Props>) => {
  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });
  const context = useMemo(
    () => ({ attributes, listeners, ref: setActivatorNodeRef }),
    [attributes, listeners, setActivatorNodeRef],
  );

  const style: CSSProperties = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <SortableItemContext.Provider value={context}>
      <li
        className={cn(className, "shadow-simple")}
        ref={setNodeRef}
        style={style}
      >
        {children}
      </li>
    </SortableItemContext.Provider>
  );

  // return (
  //   <div className="flex flex-row rounded-xl border border-transparent bg-white px-4 py-8">
  //     {/* <Handle /> */}
  //     <div className="h-10 w-full flex-1">{children}</div>
  //   </div>
  // );
};

export default SortableItem;
