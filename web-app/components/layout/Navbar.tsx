'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black bg-white">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Company Logo */}
        <Link href="/" className="font-black text-4xl tracking-tighter">
          TalentSYNC
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-black ${pathname === href ? 'text-black' : 'text-neutral-400'
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" size="lg" className="text-lg font-medium tracking-wide">
                  Dashboard
                </Button>
              </Link>
              <Button
                size="lg"
                onClick={() => signOut({ callbackUrl: '/' })}
                className="bg-black text-white text-lg font-medium tracking-wide hover:bg-neutral-800"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="lg" className="text-lg font-medium tracking-wide">
                  Sign In
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" className="bg-black text-white text-lg font-medium tracking-wide hover:bg-neutral-800 cursor-pointer">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black bg-white">
          <ul className="flex flex-col">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="border-b border-neutral-100">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-sm font-medium uppercase tracking-wide"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="p-4 flex gap-3">
              {session ? (
                <>
                  <Link href="/dashboard" className="flex-1">
                    <Button variant="outline" className="w-full text-sm tracking-wide">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="flex-1 bg-black text-white text-sm uppercase tracking-wide"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" className="flex-1">
                    <Button variant="outline" className="w-full text-sm uppercase tracking-wide">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/pricing" className="flex-1">
                    <Button className="w-full bg-black text-white text-sm uppercase tracking-wide">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}