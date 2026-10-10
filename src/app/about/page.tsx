import type { Metadata } from 'next';
import { AboutUs } from '@/components/generated/AboutUs';
import { preload } from 'react-dom';

export const metadata: Metadata = {
  title: 'About Us — A Piece of Earth',
};

export default function Page() {
  preload('/images/74ff52e3-1f6a-4da4-8acf-4c5a11373ff7.webp', { as: 'image' });
  return <AboutUs />;
}

