import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PricingPlan {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  is_popular: boolean;
  cta_text: string;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

export default function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section className="border-b border-black">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            Simple, Transparent Pricing
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black">
          {plans.map((plan) => (
            <div key={plan.id} className={`flex flex-col p-8 ${plan.is_popular ? 'bg-black text-white' : 'bg-white'}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-black text-xl uppercase tracking-tight">{plan.name}</h3>
                {plan.is_popular && (
                  <Badge className="bg-white text-black text-xs uppercase tracking-widest font-bold px-2">
                    Popular
                  </Badge>
                )}
              </div>
              <div className="mb-2">
                <span className="text-5xl font-black tracking-tighter">₹ {plan.price}</span>
                <span className={`text-sm ml-1 ${plan.is_popular ? 'text-neutral-400' : 'text-neutral-500'}`}>/month</span>
              </div>
              <p className={`text-sm mb-8 leading-relaxed ${plan.is_popular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {plan.description}
              </p>
              <div className={`w-full h-px mb-8 ${plan.is_popular ? 'bg-neutral-700' : 'bg-neutral-100'}`} />
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={14} className={`mt-0.5 shrink-0 ${plan.is_popular ? 'text-white' : 'text-black'}`} />
                    <span className={plan.is_popular ? 'text-neutral-300' : 'text-neutral-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/login">
                <Button className={`w-full font-bold uppercase tracking-wider text-sm ${
                  plan.is_popular ? 'bg-white text-black hover:bg-neutral-100' : 'bg-black text-white hover:bg-neutral-800'
                }`}>
                  {plan.cta_text}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}