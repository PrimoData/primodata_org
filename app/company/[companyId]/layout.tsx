// https://github.com/emanuelefavero/nextjs-app-router-blog/tree/main

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Data Company | Primo Data',
  description:
    'Primo Data is a directory of companies and open source projects building tools to query, analyze, and visualize blockchain data.',
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
