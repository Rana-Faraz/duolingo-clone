"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  icon: string;
  href: string;
};

export function SidebarItem({ href, icon, label }: Props) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      variant={active ? "sidebar-outline" : "sidebar"}
      className="h-[52px] justify-start"
      asChild
    >
      <Link href={href}>
        <Image src={icon} alt={label} height={32} width={32} className="mr-5" />
        {label}
      </Link>
    </Button>
  );
}
