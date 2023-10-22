import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ModeToggle } from '@/components/ModeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chichikgadi Official Website',
  description: 'Chichikgadi Official Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <ModeToggle />
          {children}
          {/* <Footer /> */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
