'use client';

import CompanyCard from './components/company-card';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Company = {
  name: string;
  website: string;
  twitter: string;
  logo: string;
  category: string;
  sponsor: string;
  description: string;
  slug: string;
};

const getData = async (companyId: string) => {
  const res = await fetch('/data/companies.json');
  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.statusText}`);
  }
  const companies = await res.json();
  const companyData = companies.find(
    (company: any) => company.slug === companyId,
  );
  if (!companyData) {
    throw new Error('Company not found');
  }
  return companyData;
};

export default function CompanyPage() {
  const params = useParams();
  const companyId = params.companyId;
  const [companyData, setCompanyData] = useState<Company | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const id = Array.isArray(companyId) ? companyId[0] : companyId;
      try {
        const data = await getData(id);
        setCompanyData(data);
      } catch (error) {
        console.error('Failed to fetch company data:', error);
      }
    };

    fetchData();
  }, [companyId]);

  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8">
            {companyData && <CompanyCard {...companyData} />}
          </div>
        </div>
      </div>
    </section>
  );
}
