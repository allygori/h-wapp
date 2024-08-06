"use client";

import clsx from "clsx";
import { useContext, useState } from "react";
import type { Package } from "./indihome.constant";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import AddOnImage from "./addon-image";
import IconChevronUp from "@/components/svgs/chevron-up";
import IconCheckCircle from "@/components/svgs/check-circle";
import priceFormat from "@/lib/utils/price-format";
import { ModalContactContext, type ModalContactContextType } from "../modal";

type Props = {
  item: Package;
  className?: string;
};

const IndiHomeCard = ({ item, className = "" }: Props) => {
  const { showModal, setShowModal } = useContext(
    ModalContactContext,
  ) as ModalContactContextType;
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      className={clsx(
        className,
        "relative flex h-full w-full flex-col justify-between",
      )}
    >
      <div className="mb-2 flex flex-row items-center justify-between">
        <div>
          {item.badge && (
            <p className="overflow-hidden rounded-br-lg rounded-tl-lg border border-transparent bg-brand-pi-400 px-2 py-0.5 text-2xs font-normal text-white">
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
      <div className="flex flex-row items-center justify-between">
        <button
          type="button"
          className="overflow-hidden rounded-2xl border border-transparent bg-brand-pi-400 px-3 py-2.5 text-sm font-semibold text-white"
          onClick={() => {
            console.log("indihome-card.tsx Berlanggan button called");
            setShowModal(true);
          }}
        >
          Berlangganan
        </button>
        <button
          type="button"
          className="flex flex-row items-center px-3 py-3 text-sm font-semibold text-brand-pi-400"
          onClick={() => {
            setShowDetail(true);
          }}
        >
          Info Detail
          <IconChevronUp className="h-3.5 w-3.5 rotate-90 text-brand-pi-400" />
        </button>
      </div>

      {/* benefits */}
      {/* {showDetail ? ( */}
      <div
        className={clsx(
          "absolute top-0 z-10 flex h-full w-full translate-x-0 flex-col justify-between bg-white py-1 transition-all ease-in-out",
          // showDetail ? "translate-x-full" : "-translate-x-full",
          showDetail ? "left-0" : "-left-full -ml-24",
        )}
      >
        <ScrollArea.Root type="auto" className="h-[85%] w-full">
          <ScrollArea.Viewport className="flex h-full w-full flex-col">
            <ul className="mx-0 mb-4 mt-0 p-0">
              {(item.benefits || []).map((benefit, idx) => {
                return (
                  <li
                    key={idx}
                    className="mb-2 flex flex-row items-start text-sm"
                  >
                    <IconCheckCircle className="mr-2 mt-0.5 h-4 w-4 text-brand-pi-400" />
                    <span
                      className="block"
                      dangerouslySetInnerHTML={{ __html: benefit }}
                    />
                  </li>
                );
              })}
            </ul>
            <div>
              {(item.addons || []).length > 0 ? (
                <p className="mb-1 text-xs font-bold text-black">
                  Paket sudah termasuk:
                </p>
              ) : null}

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
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.ScrollAreaScrollbar
            orientation="vertical"
            className="flex w-1.5 touch-none select-none rounded-md bg-slate-200 p-0.5"
          >
            <ScrollArea.ScrollAreaThumb className="relative flex-1 rounded-md bg-slate-500 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-2 before:w-full before:min-w-4 before:-translate-x-1/2 before:-translate-y-1/2 hover:bg-slate-600" />
          </ScrollArea.ScrollAreaScrollbar>
        </ScrollArea.Root>
        <div className="flex h-[12%] w-full flex-row items-center justify-center">
          <button
            type="button"
            className="flex flex-row items-end justify-center overflow-hidden rounded-md bg-brand-pi-400 px-4 py-1.5 text-sm font-semibold text-white"
            onClick={() => {
              setShowDetail(false);
            }}
          >
            Tutup
          </button>
        </div>
      </div>
      {/* ) : null} */}
    </div>
  );
};

export default IndiHomeCard;
