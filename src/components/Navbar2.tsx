"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu2";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-5" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-20 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
            <MenuItem setActive={setActive} active={null} item="About Us"></MenuItem>
        </Link>
        
        <Link href="/pets">
            <MenuItem setActive={setActive} active={null} item="Pets"></MenuItem>
        </Link>
        <Link href="/content">
        <MenuItem setActive={setActive} active={null} item="Content"></MenuItem>
        </Link>

        <Link href="/services">
        <MenuItem setActive={setActive} active={null} item="Services"></MenuItem>
        </Link>
      
        <Link href="/dashboard">
        <MenuItem setActive={setActive} active={null} item="Dashboard"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={null} item="Contact Us"></MenuItem>
      </Menu>
    </div>
  );
}
