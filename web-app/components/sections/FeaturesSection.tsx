import { FileText, BarChart2, Calendar, Shield, Zap, Users, type LucideIcon } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  features: Feature[];
  preview?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  FileText,
  BarChart2,
  Calendar,
  Shield,
  Zap,
  Users,
};

export default function FeaturesSection({ features, preview = false }: FeaturesSectionProps) {
  const displayed = preview ? features.slice(0, 4) : features;

  return (
    <section className="border-b border-black">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            {/* <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-black" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Features</span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              Everything you need to hire better
            </h2>
          </div>
          <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
            A complete recruitment toolkit built for modern teams - from first resume to final offer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black">
          {displayed.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <div key={feature.id} className="bg-white p-8 flex flex-col gap-4 hover:bg-neutral-50 transition-colors group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-bold text-neutral-200 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-black text-lg tracking-tight leading-tight">{feature.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}