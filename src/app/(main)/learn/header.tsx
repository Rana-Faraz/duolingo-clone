import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
};
export function Header({ title }: Props) {
  return (
    <div className="sticky top-0 mb-5 flex items-center justify-between border-b-2 bg-white pb-3 text-neutral-400 lg:z-50 lg:mt-[-28px] lg:pt-[28px]">
      <Button asChild variant={"ghost"} size={"sm"}>
        <Link href={"#"}>
          <ArrowLeft className="size-5 stroke-2 text-neutral-400" />
        </Link>
      </Button>
      <h1>{title}</h1>
      <div />
    </div>
  );
}
