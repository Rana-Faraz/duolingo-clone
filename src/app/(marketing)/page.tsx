import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex max-w-[200px] flex-col space-y-4 p-4">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primary-outline">Primary outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary-outline">Secondary outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger-outline">Danger outline</Button>
      <Button variant="super">Super</Button>
      <Button variant="super-outline">Super outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="sidebar">Sidebar</Button>
      <Button variant="sidebar-outline">Sidebar outline</Button>
    </div>
  );
}
