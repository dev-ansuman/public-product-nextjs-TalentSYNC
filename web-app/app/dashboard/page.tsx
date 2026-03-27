import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const revalidate = 0;

async function getStats() {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/stats`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return data;
  } catch {
    return { subscribers: 0 };
  }
}

export default async function DashboardPage() {
  const session = await getServerSession();

  // Redirect to login if not authenticated
  if (!session || !session.user) {
    redirect('/login');
  }

  const stats = await getStats();

  return (
    <main className="pt-14 min-h-screen">
      {/* Header */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-2">
                We hope you are having a great day
              </h1>
            </div>
            {/* User info */}
            <div className="flex items-center gap-4 border border-black p-4">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-sm shrink-0">
                {session.user.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-black text-sm tracking-tight">{session.user.name}</p>
                <p className="text-xs text-neutral-400 uppercase tracking-wide">{session.user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black">
            {/* Subscribers */}
            <div className="bg-black text-white p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-300 mb-4">
                Total Subscribers
              </p>
              <p className="text-6xl font-black tracking-tighter tabular-nums">
                {stats.subscribers}
              </p>
              <p className="text-xs text-neutral-400 uppercase tracking-wide mt-2">
                Newsletter signups
              </p>
            </div>

            <div className="bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-700 mb-4">
                Blog Posts
              </p>
              <p className="text-6xl font-black tracking-tighter tabular-nums">
                3
              </p>
              <p className="text-xs text-neutral-600 uppercase tracking-wide mt-2">
                Published articles
              </p>
            </div>

            <div className="bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-700 mb-4">
                Platform
              </p>
              <p className="text-6xl font-black tracking-tighter tabular-nums">
                4
              </p>
              <p className="text-xs text-neutral-600 uppercase tracking-wide mt-2">
                Active features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User details */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-black" />
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Account
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black">
            <div className="bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                Name
              </p>
              <p className="font-black text-xl tracking-tight">{session.user.name}</p>
            </div>
            <div className="bg-white p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                Email
              </p>
              <p className="font-black text-xl tracking-tight">{session.user.email}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}