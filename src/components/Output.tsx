import { HoverEffect } from "../components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Maximum Possibility",
    description:
      "Boredom. Accuracy Rate: 84%",
    link: "https://netflix.com",
  },
  {
    title: "Other Possibilities",
    description:
      "Anxiety or Stress. Accuracy Rate: 12% Attention-Seeking. Accuracy Rate: 4%",
    link: "https://google.com",
  },
];
