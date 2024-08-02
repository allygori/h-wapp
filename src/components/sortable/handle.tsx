import { useContext } from "react";
import { SortableItemContext } from "./shared/context";
import IconDrag from "@/components/svgs/drag";
import clsx from "clsx";

const items = [
  {
    id: "width",
    label: "Width",
    defaultValue: "100%",
  },
  {
    id: "max-width",
    label: "Max. Width",
    defaultValue: "300px",
  },
  {
    id: "height",
    label: "Height",
    defaultValue: "25px",
  },
  {
    id: "max-height",
    label: "Max. Height",
    defaultValue: "none",
  },
];

type Props = {
  className?: string;
};

const SortableHandle = ({ className = "" }: Props) => {
  const { attributes, listeners, ref } = useContext(SortableItemContext);

  return (
    <button
      type="button"
      className={clsx(
        "overflow-hidden p-2 hover:rounded-md hover:bg-black hover:bg-opacity-5",
        className,
      )}
      {...attributes}
      {...listeners}
      ref={ref}
    >
      <IconDrag className="h-4 w-4" />
    </button>
  );

  // return (
  //   <div className="flex flex-col items-center justify-center">
  //     <button type="button">
  //       <IconArrowUp className="h-4 w-4" />
  //     </button>
  //     <button
  //       type="button"
  //       className="overflow-hidden p-2 hover:rounded-sm hover:bg-black hover:bg-opacity-5"
  //       {...attributes}
  //       {...listeners}
  //       ref={ref}
  //     >
  //       <IconDrag className="h-4 w-4" />
  //     </button>
  //     <button type="button">
  //       <IconArrowUp className="h-4 w-4 rotate-180" />
  //     </button>
  //   </div>
  // );
};

export default SortableHandle;
