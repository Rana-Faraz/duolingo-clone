import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 bg-slate-200 p-2 lg:block">
      <div className="container flex h-full items-center justify-evenly">
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src={"/pk.svg"}
            alt="Pakistan"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Pakistan
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src={"/es.svg"}
            alt="Spanish"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src={"/fr.svg"}
            alt="French"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src={"/it.svg"}
            alt="Italian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button className="w-full" size={"lg"} variant={"ghost"}>
          <Image
            src={"/jp.svg"}
            alt="Japanese"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
}
