import LeftSidebar from "./sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative bg-black pl-48 flex-1 bg-accent-50 flex text-black-1">
      <LeftSidebar />
      <div className="flex-1 w-full h-full p-4">{children}</div>
    </main>
  );
}
