import { ModeToggle } from "@/components/theme-provider/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center p-24 gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <span className="text-primary">O</span>miru
      </h1>
      <ModeToggle />

      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign-In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
