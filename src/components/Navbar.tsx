import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const { userId } = auth();
  return (
    
    <div className="flex justify-between items-center p-4">
      <div>
        <Link href={"/"}>Logo</Link>
      </div>
      <div className="flex items-center gap-5">
        <ModeToggle/>
        <Link href={"/record"} className={cn(buttonVariants({variant:"outline"}),"hover:bg-green-300")}>Free Demo</Link>
        <Link href={"/gpt-record"} className={cn(buttonVariants({variant:"outline"}),"hover:bg-red-300")}>Paid</Link>

        {userId ? (
          <div>
            {" "}
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className={buttonVariants()}>
            <Link href={"/sign-in"}>SignIn</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
