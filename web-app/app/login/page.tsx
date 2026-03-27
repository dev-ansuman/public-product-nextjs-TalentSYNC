'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="pt-14 min-h-screen flex items-center justify-center border-b border-black flex-col">
      <div className="h-96 w-full max-w-md px-6 text-center bg-gray-100 rounded-[20px] flex flex-col justify-evenly items-center border">

        <h1 className="text-4xl font-black tracking-tighter mb-2">
          Welcome to TalentSYNC
        </h1>

        {/* Google Sign In */}
        <Button
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          className="w-full bg-black text-white font-bold uppercase tracking-wider hover:bg-neutral-800 h-12 group"
        >
          <Mail size={16} className="mr-2" />
          Continue with Google
        </Button>
      </div>

      <p className="text-xs text-neutral-400 text-center mt-6 tracking-wide">
        By signing in you agree to our terms and conditions.
      </p>
    </main>
  );
}