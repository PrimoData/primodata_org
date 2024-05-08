import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { HeartHandshakeIcon } from 'lucide-react';
import Link from 'next/link';

interface CompanyCardProps {
  name: string;
  website: string;
  twitter: string;
  logo: string;
  category: string;
  sponsor: string;
  description: string;
}

export default function CompanyCard({
  name,
  website,
  twitter,
  logo,
  category,
  sponsor,
  description,
}: CompanyCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white shadow-xl sm:rounded-lg border">
        <div className="px-4 py-5 sm:px-6">
          <img className="h-12 w-auto" src={logo} alt="" />
          <h1 className="text-xl leading-6 font-medium text-gray-900 my-3">
            {name}
          </h1>
          {sponsor === 'Gold' && (
            <span
              className="text-xs font-light rounded-md py-1 px-2 my-2 inline-flex items-center"
              style={{ background: 'gold' }}
            >
              <HeartHandshakeIcon size={16} className="mr-1" />
              Supporter
            </span>
          )}
          {sponsor === 'Silver' && (
            <span
              className="text-xs font-light rounded-md py-1 px-2 my-2 inline-flex items-center"
              style={{ background: 'silver' }}
            >
              <HeartHandshakeIcon size={16} className="mr-1" />
              Supporter
            </span>
          )}
          {sponsor === 'Bronze' && (
            <span
              className="text-xs font-light rounded-md py-1 px-2 my-2 inline-flex items-center"
              style={{ background: '#cd7f32' }}
            >
              <HeartHandshakeIcon size={16} className="mr-1" />
              Supporter
            </span>
          )}
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-2 flex items-center">
              <div className="mt-1 text-sm text-gray-900">
                <Link href={website} target="_blank" rel="noreferrer">
                  <div
                    className={buttonVariants({
                      size: 'icon',
                      variant: 'ghost',
                    })}
                  >
                    <Icons.link className="h-5 w-5" />
                  </div>
                </Link>
              </div>
              {twitter && (
                <div className="mt-1 text-sm text-gray-900">
                  <Link href={twitter} target="_blank" rel="noreferrer">
                    <div
                      className={buttonVariants({
                        size: 'icon',
                        variant: 'ghost',
                      })}
                    >
                      <Icons.twitter className="h-5 w-5 fill-current" />
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Category</dt>
              <dd className="mt-1 text-sm text-gray-900 bg-gray-200 rounded px-2 py-1 inline-block">
                {category}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <h3 className="mt-1 text-sm text-gray-900">{description}</h3>
            </div>
          </dl>
          {twitter && (
            <div className="sm:col-span-2 mt-10">
              <dt className="text-sm font-medium text-gray-500">
                Lastest Tweets
              </dt>
              <div>
                <a
                  className="twitter-timeline"
                  href={`${twitter}?ref_src=twsrc%5Etfw`}
                >
                  Tweets by {name}
                </a>{' '}
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
