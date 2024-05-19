import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
      <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
        <Image src="/hero.svg" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="max-w-[480px] text-center text-xl font-bold text-neutral-600 lg:text-3xl">
          Learn, practice and master new langueages with Languingo.
        </h1>
        <div className="flex w-full max-w-[330px] flex-col items-center gap-y-3">
          <ClerkLoading>
            <Loader className="size-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <Button size={"lg"} variant={"secondary"} asChild>
                <Link href={"/learn"}>Continue Learning</Link>
              </Button>
            </SignedIn>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button variant="secondary" size={"lg"} className="w-full">
                  Get started
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button
                  variant="primary-outline"
                  size={"lg"}
                  className="w-full"
                >
                  Already have an account
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
