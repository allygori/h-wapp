import Container from "@/components/container";

type Props = {
  className?: string;
};

const Price = ({ className = "" }: Props) => {
  return (
    <section className={className}>
      <Container
        className={`flex w-full flex-row items-center justify-between bg-white md:w-10/12 lg:w-7/12 xl:w-5/12`}
        classes={{ padding: "px-3 md:px-5 pb-2 pt-4" }}
      >
        <div className="flex flex-row items-center">
          {/* price */}
          <div className="flex flex-row items-baseline">
            <span className="text-sm font-medium text-theme-1-primary-500">
              Rp
            </span>
            <span className="text-lg font-medium text-theme-1-primary-500">
              89.000
            </span>
          </div>
          {/* discount price */}
          <div className="mx-1 flex flex-shrink flex-grow-0 flex-row items-center truncate text-zinc-400 line-through">
            <span className="text-sm font-light">Rp</span>
            <span className="text-sm font-light">230.000</span>
          </div>
        </div>
        <div>
          <p className="text-xs font-normal">1.378 Terjual</p>
        </div>

        {/* discount precentage */}
        {/* <div className="bg-red-100 px-1 py-0.5 text-2xs font-semibold">
          <span className="text-red-400">-45%</span>
        </div> */}
      </Container>
    </section>
  );
};

export default Price;
