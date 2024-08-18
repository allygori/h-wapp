import type { Metadata } from "next";

const SLUG = "gorden-kantor";
const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "ikagorden.com";

export const metadata: Metadata = {
  title: "Bantal Bayi Newborn - Menjaga Kepala Bayi Tumbuh Sempurna",
  description:
    "Jasa pembuatan gorden kantor vertical blind, horizontal blind, roller blind, wooden blind dan model lainnya.",
  alternates: {
    canonical: `https://${HOSTNAME}/${SLUG}`,
  },
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

const GordenKantorLayout = ({ children = "" }: Props) => {
  return (
    <>
      {/* main:content */}
      {children}
    </>
  );
};

export default GordenKantorLayout;
