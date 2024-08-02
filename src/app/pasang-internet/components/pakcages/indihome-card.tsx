import clsx from "clsx";
import type { Package } from "./indihome.constant";
import AddOnImage from "./addon-image";
import IconChevronUp from "@/components/svgs/chevron-up";
import priceFormat from "@/lib/utils/price-format";

type Props = {
  item: Package;
  className?: string;
};

const IndiHomeCard = ({ item, className = "" }: Props) => {
  return (
    <div className={clsx(className, "flex h-full flex-col justify-between")}>
      <div className="mb-2 flex flex-row items-center justify-between">
        <div>
          {item.badge && (
            <p className="text-2xs overflow-hidden rounded-br-lg rounded-tl-lg border border-transparent bg-brand-pi-400 px-2 py-0.5 font-normal text-white">
              {item.badge}
            </p>
          )}
        </div>
        <p className="text-xs font-normal">
          <span className="font-bold text-brand-pi-400">IndiHome</span> by{" "}
          <span className="font-medium text-brand-pi-400">Telkomsel</span>
        </p>
      </div>
      <div className="mb-4 flex flex-row">
        <div className="mr-2 flex h-16 w-16 flex-none flex-col items-center justify-center overflow-hidden rounded-br-lg rounded-tl-lg rounded-tr-lg bg-gradient-to-r from-[#b90024] from-10% to-[#ff0025] p-2 text-center">
          <p className="m-0 text-2xl font-bold leading-none text-white">
            {item.speed}
          </p>
          <p className="m-0 text-sm font-normal leading-none text-white">
            Mbps
          </p>
        </div>
        <div className="flex-1">
          <h3 className="tex-base font-bold text-black">{item.name}</h3>
          <p className="text-sm font-normal text-black">
            Cocok digunakan untuk maks {item.devices} perangkat
          </p>
        </div>
      </div>
      <div className="mb-2">
        <p className="text-base font-semibold text-black">
          <span>{priceFormat(item.price)}</span>
          <span>/</span>
          <span className="text-xs font-semibold text-black">bulan</span>
        </p>
      </div>
      <div className="mb-6 flex flex-row items-center space-x-1">
        {item.addons.map((addon, idx) => {
          return (
            <div
              key={idx}
              className="relative flex h-6 w-6 items-center overflow-hidden"
            >
              <AddOnImage addon={addon} />
            </div>
          );
        })}
      </div>
      {/* <div>{item.benefits}</div> */}
      {/* <div>
        <ul>
          {item.benefits.map((benefit, idx) => {
            return (
              <li key={idx}>
                <p dangerouslySetInnerHTML={{ __html: benefit }} />
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="flex flex-row items-center justify-between">
        <button
          type="button"
          className="overflow-hidden rounded-2xl border border-transparent bg-brand-pi-400 px-3 py-2.5 text-sm font-semibold text-white"
        >
          Berlangganan
        </button>
        <button
          type="button"
          className="flex flex-row items-center px-3 py-3 text-sm font-semibold text-brand-pi-400"
        >
          Info Detail
          <IconChevronUp className="h-3.5 w-3.5 rotate-90 text-brand-pi-400" />
        </button>
      </div>
    </div>
  );
};

export default IndiHomeCard;
