import { Contact } from '@/components/contact';
import { Features } from '@/components/features';
import { Hero } from '@/components/hero';
import { Markets } from '@/components/markets';
import { Supporters } from '@/components/supporters';

export default function IndexPage() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section style={{ backgroundColor: 'gold' }}>
        <Features />
        {/* <Markets /> */}
      </section>{' '}
      <section>
        <Supporters />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}
