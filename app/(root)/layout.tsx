import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Evant", lastName: "Valery" };
  return (
    <main className="flex h-screen w-full font-main">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <div>
            <MobileNav user={loggedIn} />
          </div>
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
        </div>
        {children}
      </div>
    </main>
  );
}
