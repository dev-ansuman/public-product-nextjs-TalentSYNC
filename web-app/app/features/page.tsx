import { fetchStrapi } from '@/lib/strapi';
import FeaturesSection from '@/components/sections/FeaturesSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const revalidate = false;

export default async function FeaturesPage() {
  const features = await fetchStrapi('/features');

  return (
    <main className="pt-14">
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
              Built for Modern Teams
            </h1>
            <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
              Every feature in TalentSYNC is designed to eliminate manual work and help your team make better hiring decisions, faster.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection features={features} preview={false} />

      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
            Ready to Transform your Hiring?
          </h2>
          <Link href="/pricing">
            <Button size="lg" className="bg-black text-white font-bold uppercase tracking-wider hover:bg-neutral-800 px-8 group">
              View Pricing
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}