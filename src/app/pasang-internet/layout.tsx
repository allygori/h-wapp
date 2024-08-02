import { ConfigProvider } from "@/context/config";
import { HeaderOne } from "./components/headers";
import { FooterOne } from "./components/footers";

type Props = Readonly<{
  children: React.ReactNode;
}>;

const PasangInternetLayout = ({ children = "" }: Props) => {
  return (
    <ConfigProvider>
      {/* header:header-one */}
      <HeaderOne />

      {/* main:content */}
      <>{children}</>

      {/* footer:footer-one */}
      <FooterOne />
    </ConfigProvider>
  );
};

export default PasangInternetLayout;
