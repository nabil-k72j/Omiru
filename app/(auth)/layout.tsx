import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Omiru | Auth",
  description:
    "Omiru is a versatile web application designed to simplify everyday digital tasks. With features like quick image uploads, an online HTML editor, and a note management system, Omiru serves as your all-in-one productivity platform.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col items-center p-28 space-y-4">
      <Link
        href={"/"}
        className="absolute top-8 left-10 scroll-m-20 text-5xl font-semibold tracking-tight"
      >
        <span className="text-primary">O</span>miru
      </Link>
      {children}
    </main>
  );
}
