import clsx from "clsx";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import * as Slider from "@radix-ui/react-slider";
import { INDIHOMES } from "./indihome.constant";
import IndiHomeCard from "./indihome-card";
import Container from "@/components/container";
import ChevronDown from "@/components/svgs/chevron-down";
import groupBy from "@/lib/utils/group-by";
import priceFormat from "@/lib/utils/price-format";

type Props = {
  className?: string;
};

const Packages = ({ className = "" }: Props) => {
  const [priceFilter, setPriceFilter] = useState([0, 1_000_000]);
  const group = groupBy(INDIHOMES, (pkg) => pkg.package_group);

  const priceFilterChange = (value: number[]) => {
    setPriceFilter(value);
  };

  return (
    <section className={clsx(className, "bg-brand-neutral-150")}>
      <Container className="w-full lg:w-10/12">
        {/* <pre>{JSON.stringify(pkg1, null, 2)}</pre> */}
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              type="button"
              className="inline-flex flex-row items-center overflow-hidden rounded-3xl border border-transparent bg-brand-pi-400 px-2 py-1 text-sm text-white"
            >
              <span>Harga: 0 - Rp 50.000</span>
              <ChevronDown className="ml-1 h-4 w-4 text-white" />
            </button>
          </Popover.Trigger>
          <Popover.Content
            className="shadow-simple h-auto min-h-32 w-72 min-w-48 rounded-lg bg-white p-3"
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

        {Object.keys(group).map((key, idx) => {
          return (
            <div key={`${key}-${idx}`} className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-black">{key}</h2>
              <ul className="m-0 grid grid-cols-4 gap-6 p-0">
                {group[key].map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="shadow-simple overflow-hidden rounded-lg border border-transparent bg-white p-4"
                    >
                      <IndiHomeCard item={item} />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Packages;
