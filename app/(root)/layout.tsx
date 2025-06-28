import Sidebar from "@/components/Sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Evant", lastName: "Valery" };
  return (
    <main className="flex h-screen w-full font-main">
      <Sidebar user={loggedIn} />
      {children}
    </main>
  );
}
