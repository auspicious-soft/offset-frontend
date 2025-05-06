"use client";

import ProtectedRoute from '@/components/ProtectedRoute';

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
}
