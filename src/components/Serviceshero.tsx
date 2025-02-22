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
    title: "Pet Shops",
    description:
      "Your one-stop shop for happy, healthy pets. Find everything from premium food to playful toys.",
    link: "https://stripe.com",
  },
  {
    title: "Veterians",
    description:
      "A paw-sitive thank you: We appritiate your servicce and offer special benefits for your furry companions.",
    link: "https://netflix.com",
  },
  {
    title: "Grooming",
    description:
      "From gentle baths to stylish cuts, our grooming services keep your pet healthy and looking their best.",
    link: "https://google.com",
  },
  {
    title: "Breeding",
    description:
      "Our focus is on ethical breeding, with thorough health screenings and careful selection, to produce happy and healthy companions.",
    link: "https://meta.com",
  },
  {
    title: "Training",
    description:
      "Unlock your pet's full potential with our positive reinforcement training, building a stronger bond and a happier home.",
    link: "https://amazon.com",
  },
  {
    title: "Pet Care",
    description:
      "We offer a curated selection of high-quality pet supplies, ensuring your furry friend receives the best care at every stage of life.",
    link: "https://microsoft.com",
  },
];
