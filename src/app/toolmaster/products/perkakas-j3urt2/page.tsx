import Container from "@/components/container";
import SliderImages from "./components/sections/slider";
import Price from "./components/sections/price";
import Guarantee from "./components/sections/guarantee";
import Description from "./components/sections/description";
// import CTA from "./components/sections/cta";

// type Props = {
//   className?: string | undefined;
// };

const Page = () => {
  return (
    <main className="bg-[#f6f6f6]">
      <Container
        className={`w-full bg-white md:w-10/12 lg:w-7/12 xl:w-5/12`}
        classes={{ padding: "px-0 md:px-5" }}
      >
        {/* section:images */}
        <SliderImages />
      </Container>

      {/* section:price */}
      <Price />

      {/* section:product-name */}
      <section className="">
        <Container
          className={`w-full bg-white md:w-10/12 lg:w-7/12 xl:w-5/12`}
          classes={{ padding: "px-3 md:px-5 pb-4" }}
        >
          <h1 className="m-0 text-sm font-medium uppercase md:text-base">
            Kunci Pas 40 Pcs Multipurpose Combination Socket Wrench Set
          </h1>
        </Container>
      </section>

      {/* section:guarantee */}
      <Guarantee className="mb-2" />

      {/* section:description */}
      <Description className="py-0" />

      {/* section:cta */}
      {/* <CTA /> */}
    </main>
  );
};

export default Page;
