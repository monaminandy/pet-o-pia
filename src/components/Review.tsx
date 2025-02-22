"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        title="⭐⭐⭐⭐⭐"
        titleone=" Excellent Pet Care Service!"
        description="Pet O Pia has been a lifesaver for my furry friend! Team always goes the extra mile. I love how 
        they keep me updated with real-time reports and photos. My pet always returns happy and well 
        taken care of. Highly recommend their services to any pet owner!"
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        title="⭐⭐⭐⭐"
        titleone="Trustworthy and Reliable"
        description="I’ve used Pet O Pia multiple times, and they never disappoint. The staff 
        is knowledgeable and treats my pet like family. I especially appreciate their attention 
        to detail and personalized care. It’s comforting to know my pet is in such safe hands."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        title="⭐⭐⭐⭐⭐"
        titleone="Best Decision Ever!"
        description="Choosing Pet O Pia was one of the best decisions I’ve ever made 
        for my pet’s well-being. From the very first interaction, their team has been nothing but 
        professional, compassionate, and attentive to every little detail. It’s clear that they genuinely care about 
        the animals they work with, and that care shines through in every aspect of their service.
        One thing that stands out to me is how thorough and organized they are. From the moment I signed up, 
        the process was smooth and easy. They took the time to understand my pet’s specific needs, preferences, 
        and even little quirks. 

"
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        title="⭐⭐⭐"
        titleone="Stress-Free Experience"
        description="Leaving my pet behind is always hard, but Pet O Pia makes the experience stress-free. 
        Their platform is easy to use, and the real-time monitoring feature is amazing! I can check in on 
        my pet anytime, which gives me peace of mind."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        title="⭐⭐⭐⭐⭐"
        titleone="Fantastic Service and Support"
        description="The team at Pet O Pia is simply fantastic! They’re 
        always available to answer my questions and provide top-notch 
        care for my pet. I love how they tailor their services to fit my pet’s 
        unique needs. Five stars all the way!"
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  title: string;
  titleone: string;
  description: React.ReactNode;
}

const GridItem = ({ area, title, titleone, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {titleone}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
