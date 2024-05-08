// https://github.com/emanuelefavero/nextjs-app-router-blog/tree/main

import { Metadata } from 'next';

export const siteTitle = 'Blockchain Data Guides | Primo Data';

export const metadata: Metadata = {
  title: siteTitle,
  description:
    'Tutorials, videos, GitHub repos, and other resources for analyzing & visualizing blockchain data.',
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
