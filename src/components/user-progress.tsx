import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: {
    title: string;
    imgSrc: string;
  };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};
export function UserProgress({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) {
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Button asChild variant={"ghost"}>
        <Link href={"/courses"}>
          <Image
            src={activeCourse.imgSrc}
            alt={activeCourse.title}
            width={32}
            height={32}
            className="rounded-md border"
          />
        </Link>
      </Button>
      <Button asChild variant={"ghost"} className="text-orange-500">
        <Link href={"/shop"}>
          <Image
            src="/points.svg"
            alt="Points"
            width={24}
            height={24}
            className="mr-2"
          />
          {points}
        </Link>
      </Button>
      <Button asChild variant={"ghost"} className="text-rose-500">
        <Link href={"/shop"}>
          <Image
            src="/heart.svg"
            alt="Heart"
            width={24}
            height={24}
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="stroke-3 size-4" />
          ) : (
            hearts
          )}
        </Link>
      </Button>
    </div>
  );
}
