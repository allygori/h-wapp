import { addDays, format } from "date-fns";
import { id } from "date-fns/locale";
import Container from "@/components/container";
import IconTruck from "@/svgs/truck-02";
import IconShield from "@/svgs/shield-01";
import IconReturn from "@/svgs/return-02";

type Props = {
  className?: string;
};

const Guarantee = ({ className = "" }: Props) => {
  const today = new Date();
  const in3days = addDays(today, 3);
  const in1week = addDays(today, 7);

  const formatter = (date: Date | number | string, fmt: string) => {
    return format(date, fmt, {
      locale: id,
    });
  };

  return (
    <section className={className}>
      <Container
        className={`w-full bg-white md:w-10/12 lg:w-7/12 xl:w-5/12`}
        classes={{ padding: "px-0 md:px-5" }}
      >
        <div className="flex w-full items-start justify-start border-b border-t border-slate-200/90 px-3 py-2 lg:px-2">
          <IconTruck className="mr-2 h-5 w-5 text-theme-1-primary-150" />
          <p className="text-sm font-medium">
            Garansi Tiba: {formatter(in3days, "d")} -{" "}
            {formatter(in1week, "d MMMM")}
          </p>
        </div>
        <div className="flex w-full items-start justify-start border-b border-slate-200/90 px-3 py-2 lg:px-2">
          <IconShield className="mr-2 h-5 w-5 text-theme-1-primary-150" />
          <p className="text-sm font-medium">
            COD Cek Dulu - Bayar ketika sampai
          </p>
        </div>
        <div className="flex w-full items-start justify-start px-3 py-2 lg:px-2">
          <div className="mr-2 flex h-5 w-5 items-center justify-center">
            <IconReturn className="h-[1.1rem] w-[1.1rem] text-theme-1-primary-150" />
          </div>
          <div>
            <p className="text-sm font-medium">Jaminan Pengembalian Barang</p>
            <p className="text-xs text-gray-500">
              Jika pesanan tidak sesuai atau ada cacat barang
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Guarantee;
