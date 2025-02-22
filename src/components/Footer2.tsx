"use client";
import { FloatingDock } from "@/components/ui/floating-dock2";
import {
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <Image
          src="/icon3.jpg"
          width={20}
          height={20}
          alt="Instagram Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <Image
          src="/icon1.jpg"
          width={20}
          height={20}
          alt="Facebook Logo"
        />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[5rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
