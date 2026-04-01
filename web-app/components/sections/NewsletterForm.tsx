'use client';

import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      await axios.post('/api/subscribe', { email });
      setStatus('success');
      setMessage("You're on the list. We'll be in touch.");
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage(err?.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="border-b border-black bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-neutral-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Newsletter</span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
              Stay Ahead<br /> Subscribe to our Newsletter
            </h2>
          </div>
          <div>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Get hiring insights, product updates, and recruitment best practices delivered to your inbox.
            </p>
            {status === 'success' ? (
              <div className="flex items-center gap-3 p-4 border border-neutral-700">
                <CheckCircle size={18} className="text-white shrink-0" />
                <p className="text-sm text-neutral-300">{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-0">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'loading'}
                  className="rounded-none border-white bg-transparent text-white placeholder:text-neutral-500 focus-visible:ring-0 focus-visible:border-white flex-1"
                />
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-white text-black rounded-none font-bold tracking-wider hover:bg-neutral-200 px-6 shrink-0"
                >
                  {status === 'loading' ? '...' : <><span>Subscribe</span><ArrowRight size={14} className="ml-2" /></>}
                </Button>
              </form>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 mt-3">
                <XCircle size={14} className="text-neutral-400 shrink-0" />
                <p className="text-xs text-neutral-400">{message}</p>
              </div>
            )}
            <p className="text-xs text-neutral-400 mt-4 tracking-wide">No spam. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}