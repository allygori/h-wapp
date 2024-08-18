"use client";

import { useState } from "react";
import Sortable from "@/components/primitives/sortable";

function createRange<T>(
  length: number,
  initializer: (index: number) => T,
): T[] {
  return [...new Array(length)].map((_, index) => initializer(index));
}

const getMockItems = () => {
  return createRange(4, (index) => ({ id: index + 1 }));
};

type Props = {};

const Homepage = ({}: Props) => {
  const [items, setItems] = useState(getMockItems);

  return (
    <main className="min-h-screen w-8/12">
      <Sortable
        items={items}
        onChange={setItems}
        renderItem={(item) => {
          return (
            <Sortable.Item
              id={item.id}
              className="mb-4 flex list-none flex-row justify-between overflow-hidden rounded-xl border border-transparent bg-white px-4 py-8 shadow-sm"
            >
              <Sortable.DragHandle className="mr-2" />
              <div className="flex-1">{item.id}</div>
              <Sortable.Action />
            </Sortable.Item>
          );
        }}
      />
      {/* <Sortable.Item>Test</Sortable.Item>
      </Sortable> */}
    </main>
  );
};

export default Homepage;
