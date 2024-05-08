'use client';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { HeartHandshakeIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

interface ProductFilterItem {
  value: string;
  label: string;
}

interface ChainFilterItem {
  value: string;
  label: string;
}

interface CategoryFilterItem {
  value: string;
  label: string;
}

interface SponsorFilterItem {
  value: string;
  label: string;
}

interface Item {
  id: number;
  created_at: string;
  website: string;
  logo: string;
  name: string;
  sponsor: string;
  category: string;
  description: string;
  twitter: string;
  slug: string;
  chains: string;
  products: string;
}

const getData = async () => {
  const res = await fetch('/data/companies.json');
  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.statusText}`);
  }
  const data = await res.json();
  return data;
};

export function Directory() {
  const [items, setItems] = useState<Item[]>([]);
  const [productFilter, setProductFilter] = useState<ProductFilterItem[]>([]);
  const [chainFilter, setChainFilter] = useState<ChainFilterItem[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilterItem[]>(
    [],
  );
  const [sponsorFilter, setSponsorFilter] = useState<SponsorFilterItem[]>([]);
  const uniqueProducts = Array.from(
    new Set(
      items.flatMap((item) =>
        item.products
          ? item.products.split(';').map((product) => product.trim())
          : [],
      ),
    ),
  ).sort();

  const uniqueChains = Array.from(
    new Set(
      items.flatMap((item) =>
        item.chains ? item.chains.split(';').map((chain) => chain.trim()) : [],
      ),
    ),
  ).sort();

  const [descriptionFilter, setDescriptionFilter] = useState('');
  const uniqueSponsors = Array.from(new Set(items.map((item) => item.sponsor)));
  const uniqueCategories = Array.from(
    new Set(items.map((item) => item.category)),
  ).sort();
  const filteredItems = items
    .filter(
      (item) =>
        categoryFilter.length === 0 ||
        (item.category &&
          categoryFilter.some((category) =>
            item.category.includes(category.value),
          )),
    )
    .filter(
      (item) =>
        sponsorFilter.length === 0 ||
        (item.sponsor &&
          sponsorFilter.some((sponsor) =>
            item.sponsor.includes(sponsor.value),
          )),
    )
    .filter(
      (item) =>
        productFilter.length === 0 ||
        (item.products &&
          productFilter.every((product) =>
            item.products.includes(product.value),
          )),
    )
    .filter(
      (item) =>
        chainFilter.length === 0 ||
        (item.chains &&
          chainFilter.every((chain) => item.chains.includes(chain.value))),
    )
    .filter(
      (item) =>
        (item.description || '')
          .toLowerCase()
          .includes(descriptionFilter.toLowerCase()) ||
        (item.name || '')
          .toLowerCase()
          .includes(descriptionFilter.toLowerCase()),
    );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setItems(data); // Adjust according to the actual structure of your JSON
    };
    fetchData();
  }, []);

  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2 mb-0">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-black">
                Blockchain Data Directory
              </h1>
              <h2 className="max-w-[600px] text-zinc-500 md:text-xl mx-auto">
                Directory of companies and open source projects building tools
                to query, analyze, and visualize blockchain data.
              </h2>
            </div>

            <div className="w-full max-w-full space-y-4 mx-auto">
              {/* Categories */}
              <div className="grid grid-cols-12 gap-2 md:gap-4">
                <>
                  {/* Supporters */}
                  <div className="col-span-full lg:col-span-3 flex items-center">
                    <label
                      htmlFor="sponsorFilter"
                      className="inline-block text-md font-medium mr-2"
                    >
                      Supporters:
                    </label>
                    <Select
                      id="sponsorFilter"
                      isMulti
                      value={sponsorFilter}
                      onChange={(selected) => setSponsorFilter([...selected])}
                      options={uniqueSponsors.map((sponsor) => ({
                        value: sponsor,
                        label: sponsor,
                      }))}
                      className="w-full text-left px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Chains */}
                  <div className="col-span-full lg:col-span-3 flex items-center">
                    <label
                      htmlFor="chainFilter"
                      className="inline-block text-md font-medium mr-2"
                    >
                      Chains:
                    </label>
                    <Select
                      id="chainFilter"
                      isMulti
                      value={chainFilter}
                      onChange={(selected) => setChainFilter([...selected])}
                      options={uniqueChains.map((chain) => ({
                        value: chain,
                        label: chain,
                      }))}
                      className="w-full text-left px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Products */}
                  <div className="col-span-full lg:col-span-3 flex items-center">
                    <label
                      htmlFor="productFilter"
                      className="inline-block text-md font-medium mr-2"
                    >
                      Products:
                    </label>
                    <Select
                      id="productFilter"
                      isMulti
                      value={productFilter}
                      onChange={(selected) => setProductFilter([...selected])}
                      options={uniqueProducts.map((product) => ({
                        value: product,
                        label: product,
                      }))}
                      className="w-full text-left px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Categories */}
                  <div className="col-span-full lg:col-span-3 flex items-center">
                    <label
                      htmlFor="categoryFilter"
                      className="inline-block text-md font-medium mr-2"
                    >
                      Categories:
                    </label>
                    <Select
                      id="categoryFilter"
                      isMulti
                      value={categoryFilter}
                      onChange={(selected) => setCategoryFilter([...selected])}
                      options={uniqueCategories.map((category) => ({
                        value: category,
                        label: category,
                      }))}
                      className="w-full text-left px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Search */}
                  <div className="col-span-full lg:col-span-12 flex items-center">
                    <label
                      htmlFor="descriptionFilter"
                      className="inline-block text-md font-medium mr-2"
                    >
                      Search:
                    </label>
                    <input
                      id="descriptionFilter"
                      type="text"
                      value={descriptionFilter}
                      onChange={(e) => setDescriptionFilter(e.target.value)}
                      placeholder="Search name and description"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-full mt-8 md:mt-4">
                    <Table className="w-full text-left border-collapse rounded-lg shadow-lg">
                      <TableHeader>
                        <TableRow
                          className="bg-black hover:bg-black"
                          style={{ border: '2px solid yellow' }}
                        >
                          <TableHead
                            className="px-4 py-2 font-bold"
                            style={{
                              color: 'yellow',
                              border: '1px solid yellow',
                            }}
                          >
                            Name
                          </TableHead>
                          <TableHead
                            className="px-4 py-2 font-bold"
                            style={{
                              color: 'yellow',
                              border: '1px solid yellow',
                            }}
                          >
                            Chains
                          </TableHead>
                          <TableHead
                            className="px-4 py-2 font-bold"
                            style={{
                              color: 'yellow',
                              border: '1px solid yellow',
                            }}
                          >
                            Products
                          </TableHead>
                          <TableHead
                            className="px-4 py-2 font-bold"
                            style={{
                              color: 'yellow',
                              border: '1px solid yellow',
                            }}
                          >
                            Category
                          </TableHead>
                          <TableHead
                            className="px-4 py-2 font-bold"
                            style={{
                              color: 'yellow',
                              border: '1px solid yellow',
                            }}
                          >
                            Description
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredItems.map((item, index) => (
                          <TableRow key={index} className="hover:bg-gray-100">
                            <TableCell className="border px-4 py-2 md:min-w-[320px] text-center">
                              <a
                                href={`/company/${item.slug}`}
                                rel="noreferrer"
                                className="text-xl font-bold text-black"
                              >
                                <img
                                  src={item.logo}
                                  alt={item.name}
                                  className="hover:shadow-2xl transition-shadow duration-200 rounded-full border-2 inline mr-2 mb-2"
                                  style={{ height: '50px', width: '50px' }}
                                />
                                <div>{item.name}</div>
                              </a>

                              <div className="sm:col-span-2">
                                <span className="mt-1 text-sm text-gray-900 -mr-2">
                                  <Link
                                    href={item.website}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <div
                                      className={buttonVariants({
                                        size: 'icon',
                                        variant: 'ghost',
                                      })}
                                    >
                                      <Icons.link className="h-4 w-4" />
                                    </div>
                                  </Link>
                                </span>

                                {item.twitter && (
                                  <span className="mt-1 text-sm text-gray-900">
                                    <Link
                                      href={item.twitter}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <div
                                        className={buttonVariants({
                                          size: 'icon',
                                          variant: 'ghost',
                                        })}
                                      >
                                        <Icons.twitter className="h-4 w-4 fill-current" />
                                      </div>
                                    </Link>
                                  </span>
                                )}
                              </div>

                              {item.sponsor === '1. Gold' &&
                                item.name != 'Allium' && (
                                  <div>
                                    <span
                                      className="text-xs font-light rounded-md py-1 px-2 my-2 ml-2 inline-flex items-center"
                                      style={{ background: 'gold' }}
                                    >
                                      <HeartHandshakeIcon
                                        size={16}
                                        className="mr-1"
                                      />
                                      Supporter
                                    </span>
                                  </div>
                                )}
                              {item.sponsor === '2. Silver' && (
                                <div>
                                  {' '}
                                  <span
                                    className="text-xs font-light rounded-md py-1 px-2 my-2 ml-2 inline-flex items-center"
                                    style={{ background: 'silver' }}
                                  >
                                    <HeartHandshakeIcon
                                      size={16}
                                      className="mr-1"
                                    />
                                    Supporter
                                  </span>
                                </div>
                              )}
                              {item.sponsor === '3. Bronze' && (
                                <div>
                                  {' '}
                                  <span
                                    className="text-xs font-light rounded-md py-1 px-2 my-2 ml-2 inline-flex items-center"
                                    style={{ background: '#cd7f32' }}
                                  >
                                    <HeartHandshakeIcon
                                      size={16}
                                      className="mr-1"
                                    />
                                    Supporter
                                  </span>
                                </div>
                              )}
                            </TableCell>
                            <TableCell className="border px-4 py-2 md:min-w-[200px]">
                              {item.chains &&
                                item.chains.split(';').map((chain, index) => (
                                  <span
                                    key={index}
                                    className="text-xs rounded-full py-1 px-2 my-1 ml-2 inline-flex items-center bg-slate-300 text-black"
                                  >
                                    {chain}
                                  </span>
                                ))}
                            </TableCell>
                            <TableCell className="border px-4 py-2 md:min-w-[200px]">
                              {item.products &&
                                item.products
                                  .split(';')
                                  .map((product, index) => (
                                    <span
                                      key={index}
                                      className="text-xs rounded-full py-1 px-2 my-1 ml-2 inline-flex items-center bg-slate-300 text-black"
                                    >
                                      {product}
                                    </span>
                                  ))}
                            </TableCell>
                            <TableCell className="border px-4 py-2 md:min-w-[200px]">
                              {item.category}
                            </TableCell>
                            <TableCell className="border px-4 py-2">
                              <p className="text-sm text-slate-500">
                                {item.description}
                              </p>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
