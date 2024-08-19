import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Image404 from "@/public/assets/img/error/404.svg";
import Container from "@/components/container";

type Props = {
  className?: string;
};

const NotFound = ({ className = "" }: Props) => {
  return (
    <>
      {/* header */}
      {/* <HeaderOne /> */}

      <main className={cn("min-h-screen w-full", className)}>
        <Container className="flex min-h-screen w-full flex-col items-center justify-center px-5 md:w-11/12 lg:my-14 lg:w-11/12 xl:w-10/12">
          <div>
            <h1 className="text-brand-100 text-center text-3xl font-bold lg:text-5xl">
              404
            </h1>
            <p className="text-brand-100 text-center text-lg lg:text-xl">
              Halaman tidak ditemukan
            </p>
            <p className="text-brand-100 text-center text-sm lg:text-base">
              Kami tidak dapat menemukan halaman yang Anda cari
            </p>
          </div>

          <div className="relative my-2 h-96 w-10/12 lg:my-8 lg:h-80 xl:w-8/12">
            <Image
              src={Image404.src}
              alt="Image 404 not found"
              fill={true}
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>

          <Link
            href="/"
            className="border-brand-100 bg-brand-100 overflow-hidden rounded-xl border px-4 py-3 text-center text-base text-white"
          >
            Halaman Utama
          </Link>
        </Container>
      </main>

      {/* footer */}
      {/* <FooterOne /> */}
    </>
  );
};

export default NotFound;
