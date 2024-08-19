import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Spesification = ({ className = "" }: Props) => {
  return (
    <section className={cn(className)}>
      <h2 className="text-left text-sm font-medium">Spesifikasi</h2>
      <table className="w-full table-auto">
        <tbody>
          <tr>
            <th className="border-y border-slate-300 p-2 text-left text-sm font-normal text-[#19222a66]">
              Berat
            </th>
            <td className="border-y border-slate-300 p-2 text-sm text-[#19222ab3]">
              1000g
            </td>
          </tr>
          <tr>
            <th className="border-b border-slate-300 p-2 text-left text-sm font-normal text-[#19222a66]">
              Brand
            </th>
            <td className="border-b border-slate-300 p-2 text-sm text-[#19222ab3]">
              AIWA
            </td>
          </tr>
          <tr>
            <th className="border-b border-slate-300 p-2 text-left text-sm font-normal text-[#19222a66]">
              Dimensi
            </th>
            <td className="border-b border-slate-300 p-2 text-sm text-[#19222ab3]">
              12cm x 24cm x 5cm
            </td>
          </tr>
          <tr>
            <th className="border-b border-slate-300 p-2 text-left text-sm font-normal text-[#19222a66]">
              Material
            </th>
            <td className="border-b border-slate-300 p-2 text-sm text-[#19222ab3]">
              Stainless Steel
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Spesification;
