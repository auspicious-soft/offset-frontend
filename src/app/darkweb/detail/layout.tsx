import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darkweb Incident Details | Offset7",
  description: "Detailed analysis of darkweb incidents, data breaches, and cybersecurity threats. Get comprehensive insights into specific cyber incidents.",
  keywords: "darkweb incident details, cyber threat analysis, data breach details, cybersecurity incident report",
  alternates: {
    canonical: "/darkweb/detail",
  },
};

export default function DarkwebDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}