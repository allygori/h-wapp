import clsx from "clsx";
import { useContext } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { SortableItemContext } from "./shared/context";
import IconThreeDots from "@/components/svgs/three-dots";
// import IconChevronDown1 from "@/components/svgs/chevron-down-1";
import IconChevronUp from "@/components/svgs/chevron-up";
import IconChevronDown from "@/components/svgs/chevron-down";
// import IconTrash1 from "@/components/svgs/trash-1";
import IconArchive from "@/components/svgs/archive";

const items = [
  {
    id: "width",
    label: "Width",
    defaultValue: "100%",
  },
  {
    id: "max-width",
    label: "Max. Width",
    defaultValue: "15rem",
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

type Props = {};

const Action = ({}: Props) => {
  // const { attributes, listeners, ref } = useContext(SortableItemContext);

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>
        <button
          type="button"
          className="overflow-hidden p-2 hover:rounded-md hover:bg-black hover:bg-opacity-5"
        >
          <IconThreeDots className="h-4 w-4" />
        </button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content
        align="center"
        sideOffset={4}
        className={clsx(
          "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
          "z-50 w-auto max-w-60 rounded-lg p-1 shadow-md",
          "border border-gray-100 bg-white",
        )}
      >
        <PopoverPrimitive.Arrow className="fill-current text-white" />
        <ul className="m-0 space-y-2 p-0 py-1">
          <li className="list-none overflow-hidden rounded-md border border-transparent px-2 py-1 text-sm text-black hover:bg-black/5">
            <button type="button" className="flex flex-row items-center">
              <IconChevronUp className="mr-1.5 h-4 w-4" />
              <span>Move Up</span>
            </button>
          </li>
          <li className="list-none overflow-hidden rounded-md border border-transparent px-2 py-1 text-sm text-black hover:bg-black/5">
            <button type="button" className="flex flex-row items-center">
              <IconChevronDown className="mr-1.5 h-4 w-4" />
              <span>Move Down</span>
            </button>
          </li>
          <li className="list-none overflow-hidden rounded-md border border-transparent px-2 py-1 text-sm text-red-400 hover:bg-black/5 hover:text-red-500">
            <button type="button" className="flex flex-row items-center">
              <IconArchive className="mr-1.5 h-4 w-4 text-red-400 hover:text-red-500" />
              <span>Archive</span>
            </button>
          </li>
        </ul>
        {/* <h3 className="text-sm font-medium text-gray-900">
          Dimensions
        </h3> */}

        <PopoverPrimitive.Close
          className={clsx(
            "absolute right-3.5 top-3.5 inline-flex items-center justify-center rounded-full p-1",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
          )}
        >
          {/* <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700 " /> */}
        </PopoverPrimitive.Close>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
};

export default Action;
