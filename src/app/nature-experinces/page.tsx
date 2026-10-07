import { NatureExperinces } from '@/components/generated/NatureExperinces';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nature Experinces — A Piece of Earth',
};

export default function Page() {
    return <NatureExperinces />;
}