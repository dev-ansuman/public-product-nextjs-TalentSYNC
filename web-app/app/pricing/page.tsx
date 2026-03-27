import { fetchStrapi } from '@/lib/strapi';
import PricingSection from '@/components/sections/PricingSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const revalidate = false;

export default async function PricingPage() {
  const plans = await fetchStrapi('/pricing-plans');

  return (
    <main className="pt-14">

      <PricingSection plans={plans} />

      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-black" />
            <span className="text-xs font-bold tracking-widest text-neutral-400">FAQs</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black">
            {[
              { q: 'Can I switch plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.' },
              { q: 'Is there a free trial?', a: 'The Free plan is free forever. You can also try Pro features for 14 days with no credit card required.' },
              { q: 'How does billing work?', a: 'Plans are billed monthly. You can cancel at any time and you won\'t be charged for the next billing cycle.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, debit cards, and bank transfers for Enterprise plans.' },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white p-8">
                <h3 className="font-black text-sm uppercase tracking-tight mb-3">{q}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">
            Questions? <br />Talk to Our Team.
          </h2>
          <Link href="/login">
            <Button size="lg" className="bg-white text-black font-bold uppercase tracking-wider hover:bg-neutral-100 px-8">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}