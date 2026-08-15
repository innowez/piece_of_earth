import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'A Piece of Earth',
  description:
    'A pottery studio and sanctuary in Wayanad, born from a deep love for the living world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,400&family=Cinzel:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
