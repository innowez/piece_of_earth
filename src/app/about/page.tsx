import type { Metadata } from 'next';
import { AboutUs } from '@/components/generated/AboutUs';

export const metadata: Metadata = {
  title: 'About Us — A Piece of Earth',
};

export default function Page() {
  return <AboutUs />;
}
