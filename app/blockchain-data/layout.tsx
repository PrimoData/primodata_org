import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Data Directory | Primo Data',
  description:
    'Explore top Blockchain Data Analytics products with Primo Data — the choice for consultants, startups, investors, and media seeking technology trends.',
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
