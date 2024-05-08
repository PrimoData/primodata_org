import { Map } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text"
                style={{ color: 'gold' }}
              >
                The Hub of Blockchain Data
              </h1>
              <p className="max-w-[500px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Search the most comprehensive directory of blockchain data
                resources on the internet.
              </p>
              <a
                className="text-lg text-black hover:bg-blue-500 inline-block px-6 py-4 rounded shadow-md shadow-white hover:shadow-xl"
                href="/blockchain-data"
                style={{ background: 'gold' }}
              >
                <span className="flex items-center">
                  <Map className="h-5 w-5 mr-2" />
                  The Directory
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
