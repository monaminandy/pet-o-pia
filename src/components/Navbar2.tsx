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
        

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Pet Shop"
              description="The Pet Shop in Petopia offers more than just pet supplies—it's 
              a complete experience for pet lovers, ensuring your pet’s well-being is 
              always the top priority."
            />
            <ProductItem
              title="Pet Care"
              description="At Petopia, pet care isn’t just a service—it’s our passion. We provide a loving 
              and nurturing environment tailored to every pet’s unique needs, from playful puppies to curious 
              kittens and beyond."/>
            <ProductItem
              title="Veterinarians"
              description="Veterinarians in Petopia are dedicated professionals who prioritize the health and well-being of your pets."
            />
            <ProductItem
              title="Grooming Center"
              description="The Grooming Center in Petopia offers top-tier grooming services to keep your pets looking and feeling their best."
            />
          </div>
        </MenuItem>
        <Link href="/dashboard">
        <MenuItem setActive={setActive} active={null} item="Dashboard"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={null} item="Contact Us"></MenuItem>
      </Menu>
    </div>
  );
}
