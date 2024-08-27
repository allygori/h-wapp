import Container from "@/components/container";
import { cn } from "@/lib/utils";
import {
  Hourglass,
  Frame,
  Rocket,
  MonitorSmartphone,
  ShieldCheck,
  MessageSquareText,
} from "lucide-react";

type Props = {
  className?: string;
};

export const WhyUs = ({ className = "" }: Props) => {
  return (
    <section className={cn(className, "py-8 lg:py-16")}>
      <Container className="w-full lg:w-8/12">
        <h2 className="mb-6 text-center text-2xl font-bold leading-normal md:text-4xl">
          Mengapa pilih{" "}
          <span className="text-brand-primary-500">Jasa Pembuatan Website</span>
          <br />
          di Halaman.App
        </h2>
        <p className="mb-8 text-center text-sm font-normal md:text-base">
          Tak hanya melayani jasa pembuatan website, kami juga memberikan
          layanan modifikasi desain website untuk mendukung performa bisnis
          Anda.
        </p>
        <div className="grid grid-cols-2 items-center justify-center gap-6 md:grid-cols-3 md:gap-8">
          <div className="shadow-simple flex h-40 w-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 p-2 md:h-56 md:w-56 lg:h-64 lg:w-64 lg:p-4">
            <div className="mb-4 flex aspect-square h-12 w-12 flex-col items-center justify-center overflow-hidden rounded-lg border border-[#DEFFEE] bg-[#DEFFEE] text-center md:h-16 md:w-16">
              <Hourglass stroke="#00DA71" className="h-5 w-5 md:h-8 md:w-8" />
            </div>
            <p className="text-center text-sm font-medium md:text-base">
              Pembuatan Website Cepat & Profesional
            </p>
          </div>
          <div className="shadow-simple flex h-40 w-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 p-2 md:h-56 md:w-56 lg:h-64 lg:w-64 lg:p-4">
            <div className="mb-4 flex aspect-square h-12 w-12 flex-col items-center justify-center overflow-hidden rounded-lg border border-[#FFF7E3] bg-[#FFF7E3] text-center md:h-16 md:w-16">
              <Frame stroke="#FF9900" className="h-5 w-5 md:h-8 md:w-8" />
            </div>
            <p className="text-center text-sm font-medium md:text-base">
              Desain Website Modern & Elegan
            </p>
          </div>
          <div className="shadow-simple flex h-40 w-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 p-2 md:h-56 md:w-56 lg:h-64 lg:w-64 lg:p-4">
            <div className="mb-4 flex aspect-square h-12 w-12 flex-col items-center justify-center overflow-hidden rounded-lg border border-[#F1F7FF] bg-[#F1F7FF] text-center md:h-16 md:w-16">
              <MonitorSmartphone
                stroke="#2639ED"
                className="h-5 w-5 md:h-8 md:w-8"
              />
            </div>
            <p className="text-center text-sm font-medium md:text-base">
              Website Responsif untuk tampilan Mobile & Desktop
            </p>
          </div>

          <div className="shadow-simple flex h-40 w-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 p-2 md:h-56 md:w-56 lg:h-64 lg:w-64 lg:p-4">
            <div className="mb-4 flex aspect-square h-12 w-12 flex-col items-center justify-center overflow-hidden rounded-lg border border-[#FFF2F8] bg-[#FFF2F8] text-center md:h-16 md:w-16">
              <Rocket stroke="#FF007A" className="h-5 w-5 md:h-8 md:w-8" />
            </div>
            <p className="text-center text-sm font-medium md:text-base">
              Website Anti Lemot & SEO Friendly
            </p>
          </div>

          <div className="shadow-simple flex h-40 w-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 p-2 md:h-56 md:w-56 lg:h-64 lg:w-64 lg:p-4">
            <div className="mb-4 flex aspect-square h-12 w-12 flex-col items-center justify-center overflow-hidden rounded-lg border border-[#f2e2fd] border-opacity-15 bg-[#C06EF3] bg-opacity-15 text-center md:h-16 md:w-16">
              <ShieldCheck stroke="#C06EF3" className="h-5 w-5 md:h-8 md:w-8" />
            </div>
            <p className="text-center text-sm font-medium md:text-base">
              Didukung Oleh Tim Berpengalaman
            </p>
          </div>

          <div className="shadow-simple flex h-40 w-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 p-2 md:h-56 md:w-56 lg:h-64 lg:w-64 lg:p-4">
            <div className="mb-4 flex aspect-square h-12 w-12 flex-col items-center justify-center overflow-hidden rounded-lg border border-[#f9fcc8] border-opacity-50 bg-[#f9fcc8] bg-opacity-50 text-center md:h-16 md:w-16">
              <MessageSquareText
                stroke="#d7df47"
                className="h-5 w-5 md:h-8 md:w-8"
              />
            </div>
            <p className="text-center text-sm font-medium md:text-base">
              Layanan Konsultasi Gratis
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
