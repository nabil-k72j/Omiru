import { Metadata } from "next";

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
    <main className="min-h-screen flex justify-center p-24">{children}</main>
  );
}
