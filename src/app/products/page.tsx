import { Products } from '@/components/generated/Products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Products — A Piece of Earth',
};

export default function Page() {
    return <Products />;
}
