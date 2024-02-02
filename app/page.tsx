import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "START"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmXw1AAkJFASvdWJVNcGv97nQKznyN58XeXo7H2SmNqUUR/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'MICROSCOPE OR MASTERPIECE',
  description: 'A frame telling the story of MICROSCOPE OR MASTERPIECE',
  openGraph: {
    title: 'MICROSCOPE OR MASTERPIECE',
    description: 'A frame telling the story of MICROSCOPE OR MASTERPIECE',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmXw1AAkJFASvdWJVNcGv97nQKznyN58XeXo7H2SmNqUUR/0.png`],
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