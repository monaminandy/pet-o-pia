import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Pet-O-Pia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}