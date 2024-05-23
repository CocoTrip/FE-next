import React from 'react';
import { AppProviders } from '../AppProviders';

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1024px] px-6 py-8 text-slate-900">
      <AppProviders>{children}</AppProviders>
    </div>
  );
}
