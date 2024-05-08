export default function IndexPage() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2 mb-0">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-black">
                Annual Sponsorship
              </h1>
              <p className="max-w-[800px] text-zinc-500 md:text-xl mx-auto">
                Support our mission of providing Blockchain Data and AI product
                research to the public for free.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8 text-center">
            <script
              async
              src="https://js.stripe.com/v3/pricing-table.js"
            ></script>
            <stripe-pricing-table
              pricing-table-id="prctbl_1OK1WCFeD2alz4YixUYhKQda"
              publishable-key="pk_live_51OJiRnFeD2alz4YilXpP2jaSvC4OOrk4p4KrtoyBvnuemZHCXdGP8frqSJGTJ8nSFIYukCvg5QZOFj895Sy2qshF00ccHJRxWp"
            ></stripe-pricing-table>
          </div>
        </div>
      </div>
    </section>
  );
}
