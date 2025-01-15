import { ModeToggle } from "@/components/theme-provider/ModeToggle";


export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Omiru</h1>
      <ModeToggle />
    </div>
  );
}
