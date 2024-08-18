"use client";

import type { ReactNode } from "react";
import { forwardRef, useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

type Ref = HTMLAnchorElement;
type Props = {
  children?: ReactNode;
  message?: string;
  className?: string;
};

const ButtonWA = forwardRef<Ref, Props>((props, ref) => {
  const { children, message = "", className = "" } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [link, setLink] = useState("");

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

  return (
    <Suspense>
      <Link ref={ref} href={link} role="button" className={className}>
        {children}
      </Link>
    </Suspense>
  );
});

ButtonWA.displayName = "ButtonWA";

export default ButtonWA;
