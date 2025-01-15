import Header from "@/components/shared/Header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            All Your Digital Tools in One Place
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              Simplify, Create, Share.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            From quick image uploads to real-time HTML editing and organized
            note-taking, Omiru has you covered.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className={cn(buttonVariants(), "w-full sm:w-auto")}
              href="/sign-in"
            >
              Get Started
            </Link>

            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full sm:w-auto"
              )}
              href="https://github.com/nabil-k72j/Omiru"
              target="_blank"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
