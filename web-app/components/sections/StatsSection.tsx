'use client';

// import { useEffect, useState } from 'react';

// interface Stats {
//   subscribers: number;
// }

export default function StatsSection() {
  // const [stats, setStats] = useState<Stats | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('/api/stats')
  //     .then((res) => res.json())
  //     .then((data) => { setStats(data); setLoading(false); })
  //     .catch(() => setLoading(false));
  // }, []);

  const statItems = [
    // { label: 'Newsletter Benefiters', value: loading ? '-' : stats?.subscribers ?? 0 },
    { label: 'Newsletter Benefiters', value: '7898' },
    { label: 'Jobs Posted', value: '2637' },
    { label: 'Candidates Tracked', value: '8982 +' },
    { label: 'Hires Made', value: '2298 +' },
  ];

  return (
    <section className="border-b border-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-px bg-black" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Current Statistics</span>
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black border border-black">
          {statItems.map(({ label, value }) => (
            <div key={label} className="bg-white px-6 py-8 text-center">
              <p className="text-4xl font-black tracking-tighter tabular-nums">{value}</p>
              <p className="text-xs uppercase tracking-widest text-neutral-700 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}