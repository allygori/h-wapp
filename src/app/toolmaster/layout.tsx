import Header from "./_components/header";
import Footer from "./_components/footer";

export default function ToolmasterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
