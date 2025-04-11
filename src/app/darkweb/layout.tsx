import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darkweb Incidents & Threat Intelligence | Offset7",
  description: "Monitor darkweb incidents, data breaches, and emerging threats. Get insights into ransomware attacks, leaked credentials, and cybercriminal activities.",
  keywords: "darkweb monitoring, data breaches, ransomware attacks, threat intelligence, leaked credentials, cybercriminal activities",
  alternates: {
    canonical: "/darkweb",
  },
};

export default function DarkwebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}