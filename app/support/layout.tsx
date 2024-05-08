import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support Blockchain Data Product Research | Primo Data',
  description:
    'Support Blockchain Data product research with Primo Data — the choice for consultants, startups, investors and media seeking technology trends.',
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
