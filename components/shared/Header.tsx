import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <section className="p-4 sm:p-8 flex justify-center sm:justify-between items-center">
        <h1 className="scroll-m-20 text-5xl font-semibold tracking-tight">
          <span className="text-primary">O</span>miru
        </h1>

        <div className="hidden sm:flex items-center gap-4">
          <Link
            className={cn(buttonVariants(), "w-full sm:w-auto")}
            href="/sign-in"
          >
            Sign In
          </Link>

          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full sm:w-auto"
            )}
            href="/sign-up"
            target="_blank"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </header>
  );
}
