import { Metadata } from "next";
import HomePage from "./components/HomePage";

export const metadata: Metadata = {
  title: "Offset7 - Cybersecurity Monitoring & Threat Intelligence",
  description: "Stay ahead of cyber threats with Offset7. Get real-time monitoring, threat intelligence, and actionable insights to protect your organization from evolving digital risks.",
  keywords: "cybersecurity, threat intelligence, cyber threats, data protection, ransomware, phishing, darkweb monitoring",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
