import Container from "@/components/container";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Pricing = ({ className = "" }: Props) => {
  return (
    <section className={cn(className, "py-8 lg:py-16")}>
      <Container className="w-full lg:w-8/12">
        <h2 className="mb-6 text-center text-2xl font-bold leading-normal lg:text-4xl">
          Paket Website Apa yang Cocok untuk Saya?
        </h2>
        <p className="mb-2 text-center text-sm font-normal md:mb-8 md:text-base">
          Konsultasikan pada kami website impian Anda. GRATIS! Dengan senang
          hati kami akan membantu Anda menciptakan website impian dengan paket
          yang tepat.
        </p>
        <div className="flex flex-col md:flex-row lg:-mx-4">
          <div className="shadow-simple my-8 flex-1 overflow-hidden rounded-2xl border border-gray-300 px-8 py-16 lg:mx-4">
            <h3 className="mb-2 text-xl font-bold text-brand-primary-500">
              SATU HALAMAN
            </h3>
            <p className="mb-1 text-brand-primary-500">
              <span className="text-xl font-bold">Rp</span>
              <span className="text-xl font-bold">&nbsp;525.000&nbsp;</span>
              <span className="text-base">/tahun ke-1</span>
            </p>
            <p className="mb-4 text-sm text-brand-primary-500">
              Perpanjangan Rp 525.000 /tahun
            </p>
            <ul className="list-disc p-0 text-sm">
              <li>Buat sendiri dengan website builder</li>
              <li>Halaman website sesuai kapasitas</li>
              <li>Email profesional sesuai kapasitas</li>
              <li>Revisi design mandiri</li>
            </ul>
          </div>
          <div className="shadow-simple flex-1 overflow-hidden rounded-2xl border border-gray-300 bg-brand-primary-500 px-8 py-16 lg:mx-4">
            <h3 className="mb-2 text-2xl font-bold text-white">ONLINE</h3>
            <p className="mb-2 text-lg font-bold text-white line-through decoration-orange-400">
              <span>Rp&nbsp;</span>
              <span>1.999.000</span>
            </p>
            <p className="mb-1 text-white">
              <span className="text-2xl font-bold">Rp</span>
              <span className="text-2xl font-bold">&nbsp;999.000&nbsp;</span>
              <span className="text-base">/tahun ke-1</span>
            </p>
            <p className="text-sm text-white">Perpanjangan Rp 800.000 /tahun</p>
            <hr className="my-8 text-white" />
            <ul className="mx-4 list-disc p-0 text-sm text-white">
              <li>1 halaman website</li>
              <li>1 email profesional</li>
              <li>1x revisi design</li>
              <li>1x / 3 bulan kuota update</li>
            </ul>
          </div>
          <div className="shadow-simple my-8 flex-1 overflow-hidden rounded-2xl border border-gray-300 px-8 py-16 lg:mx-4">
            <h3 className="mb-2 text-xl font-bold text-brand-primary-500">
              ENTRY
            </h3>
            <p className="mb-1 text-brand-primary-500">
              <span className="text-xl font-bold">Rp</span>
              <span className="text-xl font-bold">&nbsp;1.799.000&nbsp;</span>
              <span className="text-base">/tahun ke-1</span>
            </p>
            <p className="mb-4 text-sm text-brand-primary-500">
              Perpanjangan Rp 1.300.000 /tahun
            </p>
            <ul className="mx-4 list-disc p-0 text-sm">
              <li>3 halaman website</li>
              <li>3 email profesional</li>
              <li>1x revisi design</li>
              <li>1x / bulan kuota update</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
