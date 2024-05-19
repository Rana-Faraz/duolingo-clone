import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/mascot.svg" alt="Mascot" width={40} height={40} />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Languingo
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost">Sign in</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
}
