import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Offset7 Cybersecurity",
  description: "Get in touch with the Offset7 team for cybersecurity solutions, threat intelligence services, or technical support. We're here to help protect your organization.",
  keywords: "contact Offset7, cybersecurity support, threat intelligence services, technical support, security consultation",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}