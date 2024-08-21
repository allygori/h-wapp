import Container from "@/components/container";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Footer = ({ className = "" }: Props) => {
  const year = new Date().getFullYear();

  return (
    <footer className={cn(className, "mt-8")}>
      <Container className="w-11/12 border-t border-slate-300 py-2 xl:w-10/12">
        <p className="m-0 text-center text-xs text-slate-400">
          © Copyright {year} Tool Master All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
