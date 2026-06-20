import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WorkNow - Connect with skilled workers',
  description: 'A platform to connect customers with skilled workers for various services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
