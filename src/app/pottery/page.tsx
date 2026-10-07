import { Pottery } from '@/components/generated/Pottery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pottery — A Piece of Earth',
};

export default function Page() {
    return <Pottery />;
}