import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity News & Updates | Offset7",
  description: "Stay informed with the latest cybersecurity news, threat intelligence, data breaches, and security innovations from around the world.",
  keywords: "cybersecurity news, threat intelligence, data breaches, security updates, cyber attacks, ransomware news",
  alternates: {
    canonical: "/newss",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}