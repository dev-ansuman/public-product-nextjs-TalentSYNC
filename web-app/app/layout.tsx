import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SessionWrapper from '@/components/layout/SessionWrapper';

export const metadata: Metadata = {
  title: 'TalentSYNC',
  description: 'The modern recruitment platform that automates resume parsing, candidate ranking, and interview scheduling.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white text-black`}>
        <SessionWrapper>
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}