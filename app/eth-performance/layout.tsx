import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethereuem Blockchain Data Performance | Primo Data',
  description:
    'See how fast blockchain data providers can retrieve data from the Ethereum blockchain.',
};

interface CompanyLayoutProps {
  children: React.ReactNode;
}

export default function CompanyLayout({ children }: CompanyLayoutProps) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
