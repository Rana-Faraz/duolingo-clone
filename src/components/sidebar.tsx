import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SheetTrigger } from "./ui/sheet";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  const menuItems = [
    {
      label: "Learn",
      icon: "/learn.svg",
      href: "/learn",
    },
    {
      label: "Leaderboard",
      icon: "/leaderboard.svg",
      href: "/leaderboard",
    },
    {
      label: "Quests",
      icon: "/quests.svg",
      href: "/quests",
    },
    {
      label: "shop",
      icon: "/shop.svg",
      href: "/shop",
    },
  ];
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        className,
      )}
    >
      <Link href={"/learn"}>
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/mascot.svg" alt="Mascot" width={40} height={40} />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Languingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        {menuItems.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="size-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
