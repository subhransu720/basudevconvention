import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Basudev Convention',
  description: 'Explore our comprehensive range of event services at Basudev Convention.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 