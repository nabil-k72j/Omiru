import SideMenu from "@/components/shared/SideMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omiru | Dashboard",
  description:
    "Omiru is a versatile web application designed to simplify everyday digital tasks. With features like quick image uploads, an online HTML editor, and a note management system, Omiru serves as your all-in-one productivity platform.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <SideMenu />
      <div className="flex-grow">{children}</div>
    </main>
  );
}
