import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Icon } from "@iconify/react";
import { links } from "@/lib/consts";
import { Jersey_15} from "next/font/google";
import { checkRole } from "@/lib/roles";

const Jer = Jersey_15({
  weight: ['400']
});

export default async function SideMenu() {

  const role = await checkRole()

  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e">
      <div>
        <div className="inline-flex size-16 items-center justify-center group relative">
          {/* Temporary Logo */}
          <span className={cn("text-primary text-2xl sm:text-5xl", Jer.className)}>O</span>
        </div>

        <div className="border-t">
          <div className="px-2">
            <div className="py-4">
              <Link
                href="/dashboard"
                className={cn(
                  "group relative",
                  buttonVariants({ variant: "ghost" })
                )}
              >
                <Icon
                  icon={"material-symbols:space-dashboard"}
                  className="text-muted-foreground"
                />
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-muted px-2 py-1.5 text-xs font-medium text-foreground  group-hover:visible">
                  Dashbaord
                </span>
              </Link>
            </div>

            <ul className="space-y-1 border-t pt-4">
              {links.map((link, index) => (
                <li key={index} className={cn(link.isRestricted && !["owner", "admin"].includes(role ?? '') ? 'hidden' : 'visible')}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group relative",
                      buttonVariants({ variant: "ghost" })
                    )}
                  >
                    <Icon icon={link.icon} className="text-muted-foreground" />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-muted px-2 py-1.5 text-xs font-medium text-foreground  group-hover:visible">
                      {link.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t p-2">
        <SignOutButton>
          <Button className="group relative" variant={"ghost"}>
            <Icon
              icon={"octicon:sign-out-16"}
              className="text-muted-foreground"
            />
            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-muted px-2 py-1.5 text-xs font-medium text-foreground  group-hover:visible">
              Sign Out
            </span>
          </Button>
        </SignOutButton>
      </div>
    </div>
  );
}
