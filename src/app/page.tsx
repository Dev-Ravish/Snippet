import Image from "next/image";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div>
        <UserButton afterSignOutUrl="/"></UserButton>
      </div>
      Hello WOrld!
    </main>
  );
}
