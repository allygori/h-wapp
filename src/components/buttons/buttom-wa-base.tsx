"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { sendGAEvent } from "@next/third-parties/google";
import IconWA from "@/svgs/whatsapp-01";

type ButtonWABaseProps = {
  children?: ReactNode;
  message?: string;
  className?: string;
  classes?: {
    padding?: string;
    rounded?: string;
    icon?: string;
    text?: string;
  };
  gclidShouldExists?: boolean;
  gtmData?: {
    event?: string;
    value?: Object;
  };
};

const ButtonWABase = ({
  children,
  message = "",
  gclidShouldExists = true,
  gtmData,
  className = "",
  classes,
}: ButtonWABaseProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [link, setLink] = useState("");
  const hasGclid = searchParams.has("gclid");

  // generate wa number
  useEffect(() => {
    const param = searchParams.get("cs");
    let WANumber = process?.env?.NEXT_PUBLIC_WA_NUMBER;
    if (searchParams.has("cs") && param !== "") {
      if (param == "1") {
        WANumber = process?.env?.NEXT_PUBLIC_WA_NUMBER_CS1;
      } else if (param == "2") {
        WANumber = process?.env?.NEXT_PUBLIC_WA_NUMBER_CS2;
      } else {
        WANumber = process?.env?.NEXT_PUBLIC_WA_NUMBER;
      }
    } else {
      WANumber = process?.env?.NEXT_PUBLIC_WA_NUMBER;
    }

    setLink(
      encodeURI(
        `https://wa.me/${WANumber}${message !== "" ? `?text=${message}` : ""}`,
      ),
    );
  }, [searchParams, message]);

  const paddingClass =
    classes?.padding ||
    "px-3.5 py-3.5 md:px-5 md:py-3.5 lg:px-5 lg:py-3.5 xl:px-4 xl:py-3";
  const roundedClass = classes?.rounded || "rounded-xl";
  const iconClass =
    classes?.icon || "mr-1 h-4 w-4 text-white md:mr-2 md:h-5 md:w-5";
  const textClass =
    classes?.text ||
    "inline-block text-xs font-semibold text-white md:text-sm lg:text-sm xl:text-base";

  const handleSendGAEvent = (event: React.MouseEvent) => {
    // only when has gclid & the flag gclidShouldExists = true
    if (!hasGclid && gclidShouldExists) {
      return false;
    }

    if (gtmData?.event) {
      event.preventDefault();

      const url = event?.currentTarget?.getAttribute("href") || "";
      const callback = () => {
        if (typeof url != "undefined") {
          router.push(url);
        }
      };

      sendGAEvent("event", gtmData?.event || "", {
        ...(gtmData?.value || {}),
        event_callback: callback,
        event_timeout: 2000,
      });

      return true;
    }

    return false;
  };

  return (
    <Link
      href={link}
      role="button"
      className={clsx(
        "bg-[#25d366] hover:bg-[#03c85d] hover:transition-colors hover:duration-200 hover:ease-in-out active:shadow-inner",
        "inline-flex flex-row items-center justify-center",
        "border border-transparent",
        paddingClass,
        roundedClass,
        className,
      )}
      onClick={handleSendGAEvent}
    >
      {/* bg-[#29af3e] */}
      <IconWA className={iconClass} />
      <span className={textClass}>{children}</span>
    </Link>
  );
};

export type { ButtonWABaseProps };
export default ButtonWABase;
