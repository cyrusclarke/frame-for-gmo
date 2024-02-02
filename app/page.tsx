import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmWSoYYbHfxQ64XT1jLmrkZ6eUtNX4hagbvWeGCmEYsFFV/0.jpg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'MICROSCOPE OR MASTERPIECE',
  description: 'Is it a MICROSCOPE OR MASTERPIECE',
  openGraph: {
    title: 'Is it a MICROSCOPE OR MASTERPIECE',
    description: 'A frame telling the story of MICROSCOPE OR MASTERPIECE',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmWSoYYbHfxQ64XT1jLmrkZ6eUtNX4hagbvWeGCmEYsFFV/0.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>MICROSCOPE OR MASTERPIECE</h1>
    </>
  );
}