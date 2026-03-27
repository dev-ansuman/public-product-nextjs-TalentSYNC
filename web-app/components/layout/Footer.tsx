import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-black bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-neutral-400">Product</p>
            <ul className="space-y-2">
              {[
                { href: '/features', label: 'Features' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/blog', label: 'Blog' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-neutral-600 hover:text-black transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-neutral-400">Account</p>
            <ul className="space-y-2">
              {[
                { href: '/login', label: 'Sign In' },
                { href: '/dashboard', label: 'Dashboard' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-neutral-600 hover:text-black transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-neutral-100 flex flex-col items-center justify-between">
          <p className="text-xs text-neutral-400 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} TalentSYNC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}