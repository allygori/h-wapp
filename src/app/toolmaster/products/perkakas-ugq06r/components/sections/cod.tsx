import Image from "next/image";
import Container from "@/components/container";
import ImgCOD from "@/public/assets/img/cod/hQY7ORMCfFdo0Q9hQYtV4GnXovRPuQ1iPwBXYzuW0Eg.png";

type Props = {
  className?: string;
};

const COD = ({ className }: Props) => {
  return (
    <section className={className}>
      <Container className={`w-7/12`}>
        {/* image:cod */}
        <div className="mx-auto mb-3 flex flex-row items-center justify-center">
          <Image src={ImgCOD} alt="Bisa COD" />
        </div>
      </Container>
    </section>
  );
};

export default COD;
