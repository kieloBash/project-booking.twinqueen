import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <article className="mt-20">{children}</article>
      <Footer />
    </>
  );
}
