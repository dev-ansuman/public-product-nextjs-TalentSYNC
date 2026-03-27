import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center border-b border-black pt-14">
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-none max-w-5xl mb-8">
          {title}
        </h1>
        <div className="w-full h-px bg-black mb-8" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed">
            {subtitle}
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <Link href={ctaLink}>
              <Button size="lg" className="bg-black text-white font-bold uppercase tracking-wider hover:bg-neutral-800 px-8 group">
                {ctaText}
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" size="lg" className="font-bold uppercase tracking-wider border-black px-8 hover:bg-black hover:text-white transition-colors">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-3 border border-black divide-x divide-black ">
          {[
            { value: '10x', label: 'Faster Hiring' },
            { value: '4', label: 'Role Types' },
            { value: '100%', label: 'Automated Parsing' },
          ].map(({ value, label }) => (
            <div key={label} className="px-6 py-5 text-center">
              <p className="text-3xl font-black tracking-tighter">{value}</p>
              <p className="text-xs uppercase tracking-widest text-neutral-700 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}