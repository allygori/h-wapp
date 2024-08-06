import clsx from "clsx";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import * as Slider from "@radix-ui/react-slider";
import * as CheckboxGroup from "@allygory/checkbox-group";
import * as LabelPrimitive from "@allygory/label";
import IconChevronDown from "@/components/svgs/chevron-down";
import IconFilter2 from "@/components/svgs/filter-2";
import IconCheck from "@/components/svgs/check";
import { INDIHOMES } from "./indihome.constant";
import priceFormat from "@/lib/utils/price-format";
import groupBy from "@/lib/utils/group-by";

type Props = {};

const PackagesFilter = ({}: Props) => {
  const [priceFilter, setPriceFilter] = useState([0, 1_000_000]);
  const group = groupBy(INDIHOMES, (pkg) => pkg.package_group);

  const priceFilterChange = (value: number[]) => {
    setPriceFilter(value);
  };

  return (
    <div className="-mx-1 mb-8 flex flex-row">
      <div className="mx-1 flex flex-none flex-row items-center">
        <IconFilter2 className="h-5 w-5 text-gray-400" />
      </div>
      <div className="flex-0 mx-1">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              type="button"
              className="inline-flex flex-row items-center overflow-hidden rounded-md border border-gray-400 px-4 py-2 text-sm text-gray-400"
            >
              <span>Harga: 0 - Rp 50.000</span>
              <IconChevronDown className="ml-1 h-4 w-4 text-gray-400" />
            </button>
          </Popover.Trigger>
          <Popover.Content
            className="z-20 h-auto min-h-32 w-72 min-w-48 rounded-lg bg-white p-3 shadow-simple"
            sideOffset={5}
            align="start"
          >
            <form action="" className="w-full">
              <div className="mb-4 flex w-full flex-row items-center justify-between">
                <div className="mr-2 w-6/12">
                  <label
                    className="text-sm font-normal text-gray-400"
                    htmlFor="minPrice"
                  >
                    Min
                  </label>
                  <input
                    className="w-full overflow-hidden rounded-md border border-gray-300 p-2 focus:outline-none"
                    id="minPrice"
                    defaultValue={0}
                    placeholder="0"
                  />
                </div>
                <div className="w-6/12">
                  <label
                    className="text-sm font-normal text-gray-400"
                    htmlFor="maxPrice"
                  >
                    Max
                  </label>
                  <input
                    className="w-full overflow-hidden rounded-md border border-gray-300 p-2 focus:outline-none"
                    id="maxPrice"
                    defaultValue={1_000_000}
                    placeholder="1.000.000"
                  />
                </div>
              </div>

              <div className="w-full">
                <Slider.Root
                  min={0}
                  max={1_000_000}
                  step={1_000}
                  defaultValue={[0, 1_000_000]}
                  aria-label="value"
                  className="relative flex h-5 w-64 touch-none items-center"
                  onValueChange={priceFilterChange}
                >
                  <Slider.Track className="relative h-1 w-full grow rounded-full bg-gray-300">
                    <Slider.Range className="absolute h-full rounded-full bg-brand-pi-400" />
                  </Slider.Track>
                  <Slider.Thumb
                    className={clsx(
                      "block h-5 w-5 rounded-full border border-gray-300 bg-white",
                      "focus:outline-none",
                    )}
                  />
                  <Slider.Thumb
                    className={clsx(
                      "block h-5 w-5 rounded-full border border-gray-300 bg-white",
                      "focus:outline-none",
                    )}
                  />
                </Slider.Root>
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="w-6/12">{priceFormat(priceFilter[0])}</div>
                  <div className="w-6/12">{priceFormat(priceFilter[1])}</div>
                </div>
              </div>
            </form>
          </Popover.Content>
        </Popover.Root>
      </div>
      <div className="flex-0 mx-1">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              type="button"
              className="inline-flex flex-row items-center overflow-hidden rounded-md border border-gray-400 px-4 py-2 text-sm text-gray-400"
            >
              <span>Harga: 0 - Rp 50.000</span>
              <IconChevronDown className="ml-1 h-4 w-4 text-gray-400" />
            </button>
          </Popover.Trigger>
          <Popover.Content
            className="z-20 h-auto min-h-32 w-72 min-w-48 rounded-lg bg-white p-3 shadow-simple"
            sideOffset={5}
            align="start"
          >
            <CheckboxGroup.Root
              name="number_of_device"
              defaultValue={["1", "2"]}
              className={clsx("flex flex-col")}
            >
              <CheckboxGroup.Item
                value="1"
                className={clsx("mb-2 flex flex-row items-center")}
              >
                <CheckboxGroup.CheckboxGroupIndicator className="flex h-5 w-5 flex-row items-center justify-center overflow-hidden rounded-md border text-gray-900">
                  <IconCheck className="h-4 w-4 self-center text-gray-900" />
                </CheckboxGroup.CheckboxGroupIndicator>
                <LabelPrimitive.Label className="ml-2 select-none text-sm font-medium text-gray-900">
                  Test 1
                </LabelPrimitive.Label>
              </CheckboxGroup.Item>
              <CheckboxGroup.Item
                value="2"
                className={clsx("mb-2 flex flex-row items-center")}
              >
                {/* <CheckboxGroup.CheckboxGroupIndicator className="flex h-5 w-5 flex-row items-center justify-center overflow-hidden rounded-md border text-gray-900 radix-state-checked:bg-brand-pi-400 radix-state-unchecked:bg-gray-100 dark:radix-state-unchecked:bg-gray-900">
                  <IconCheck className="h-4 w-4 self-center text-white" />
                </CheckboxGroup.CheckboxGroupIndicator> */}
                <LabelPrimitive.Label className="ml-2 select-none text-sm font-medium text-gray-900">
                  Test 2
                </LabelPrimitive.Label>
              </CheckboxGroup.Item>
              <CheckboxGroup.Item
                value="3"
                className={clsx("mb-2 flex flex-row items-center")}
              >
                <CheckboxGroup.CheckboxGroupIndicator className="flex h-5 w-5 flex-row items-center justify-center overflow-hidden rounded-md border text-gray-900">
                  <IconCheck className="h-4 w-4 self-center text-gray-900" />
                </CheckboxGroup.CheckboxGroupIndicator>
                <LabelPrimitive.Label className="ml-2 select-none text-sm font-medium text-gray-900">
                  Test 3
                </LabelPrimitive.Label>
              </CheckboxGroup.Item>
            </CheckboxGroup.Root>
            <pre>{JSON.stringify({}, null, 2)}</pre>
          </Popover.Content>
        </Popover.Root>
      </div>
    </div>
  );
};

export default PackagesFilter;
