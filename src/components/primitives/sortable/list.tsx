import { Fragment, useMemo, useState } from "react";
import type { Active, UniqueIdentifier } from "@dnd-kit/core";
import {
  DndContext,
  useSensors,
  useSensor,
  KeyboardSensor,
  PointerSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import Item from "./item";
import DragHandle from "./handle";
import Overlay from "./overlay";

type BaseItem = {
  id: UniqueIdentifier;
};

type SortableProps<T extends BaseItem> = {
  items: T[];
  renderItem(item: T): React.ReactNode;
  onChange(items: T[]): void;
};

const Sortable = <T extends BaseItem>({
  items,
  renderItem,
  onChange,
}: SortableProps<T>) => {
  const [active, setActive] = useState<Active | null>(null);
  const activeItem = useMemo(
    () => items.find((item) => item.id === active?.id),
    [active, items],
  );
  const sensors = useSensors(
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(PointerSensor),
  );

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) => setActive(active)}
      onDragEnd={({ active, over }) => {
        if (over && active.id !== over?.id) {
          const activeIndex = items.findIndex(({ id }) => id === active.id);
          const overIndex = items.findIndex(({ id }) => id === over.id);

          onChange(arrayMove(items, activeIndex, overIndex));
        }
        setActive(null);
      }}
      onDragCancel={() => {
        setActive(null);
      }}
    >
      <SortableContext items={items}>
        <ul className="m-0 p-0" role="application">
          {items.map((item) => {
            return <Fragment key={item.id}>{renderItem(item)}</Fragment>;
          })}
        </ul>
      </SortableContext>
      <Overlay>{activeItem ? renderItem(activeItem) : null}</Overlay>
    </DndContext>
  );
};

// Sortable.Item = Item;
// Sortable.DragHandle = DragHandle;

Sortable.Item = null;
Sortable.DragHandle = null;

export default Sortable;
