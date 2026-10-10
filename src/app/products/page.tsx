import { Products } from '@/components/generated/Products';
import type { Metadata } from 'next';
import { preload } from 'react-dom';

export const metadata: Metadata = {
    title: 'Products — A Piece of Earth',
};

export default function Page() {
    preload('/images/e435442310b5e5e616b37cd991d317d3bfd1b0e1.webp', { as: 'image' });
    return <Products />;
}

