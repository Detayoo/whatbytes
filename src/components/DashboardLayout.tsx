// import "./globals.css";
import { Header, Sidebar } from "@/components";

export const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div lang="en font-mono">
      <div className="flex flex-col w-full h-screen bg-white">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};
