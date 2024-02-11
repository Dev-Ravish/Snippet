import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const { userId } = auth();
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <Link href={"/"}>Logo</Link>
      </div>
      <div className="flex items-center gap-5">
        {userId ? (
          <div>
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
