import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Venues | Basudev Convention',
  description: 'Explore our elegant venues including grand ballroom, conference hall, garden pavilion, and royal suite. Perfect for weddings, corporate events, and special occasions.',
};

export default function VenueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 