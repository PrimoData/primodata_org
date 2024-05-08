import { siteTitle } from './layout';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

type AllPostsData = {
  date: string;
  title: string;
  id: string;
  img: string;
  preview: string;
}[];

export const metadata = {
  title: siteTitle,
};

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <>
      <div className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            {/* Title */}
            <section className="flex flex-col justify-center space-y-8 text-center">
              <div className="space-y-2 mb-0">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-black mb-5">
                  Blockchain Data Guides
                </h1>
                <h2 className="max-w-[1000px] text-zinc-500 md:text-xl mx-auto">
                  Tutorials, videos, GitHub repos, and other resources for
                  analyzing & visualizing blockchain data.
                </h2>
              </div>
            </section>

            {/* Posts */}
            <section className="flex flex-col justify-center space-y-8">
              <div className="text-md py-1">
                {allPostsData.map(({ id, title, img, preview }) => (
                  <div
                    key={id}
                    className="border border-gray-200 rounded-md p-4 max-w-xl mx-auto bg-white shadow-lg transform hover:scale-105 transition-transform duration-200 mb-5"
                  >
                    <img
                      alt="Blog Post"
                      className="w-full object-cover rounded-t-md mb-4 h-36 md:h-64"
                      src={`${img}`}
                    />
                    <div className="px-4 py-2">
                      <h2 className="text-2xl font-bold mb-2 text-gray-800">
                        {title}
                      </h2>
                      <p className="text-base text-gray-700 mb-4">{preview}</p>
                      <Link
                        className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md"
                        style={{ background: 'gold' }}
                        href={`/guides/${id}`}
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
