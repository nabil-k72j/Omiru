import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Icon } from "@iconify/react";

interface IconBtnProps {
  className?: string;
  href: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  icon: string;
  text: string;
}

export default function IconBtn({
  className,
  href,
  variant,
  icon,
  text,
}: IconBtnProps) {
  return (
    <Link
      href={href}
      className={cn(className, buttonVariants({ variant: variant }), "gap-4")}
    >
      <span>{text}</span>
      <Icon icon={icon} />
    </Link>
  );
}
