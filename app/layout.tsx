import { Roboto, Spectral, Playfair_Display } from 'next/font/google';
import { Header } from "@/components/shared/header";
import type { Metadata } from "next";
import { cn } from '@/lib/utils';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

const playfair = Playfair_Display({
  weight: ['400', '500', '700'],
  variable: '--font-playfair',
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

const spectral = Spectral({
  weight: ['400', '500', '700'],
  variable: '--font-spectral',
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})



export const metadata: Metadata = {
  title: "Gora",
  description: "Generated by create next app",
};

import "./globals.css";
import { Footer } from '@/components/shared/footer';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={
      cn(
        roboto.className, playfair.className, spectral.className,
        'relative scrollbar before:absolute before:bg-[url("/pattern/pattern_gray.svg")] before:w-full before:h-full before:z-[-1] before:opacity-10'
      )}>
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className='w-full flex flex-col justify-center'>
        <Header />
        <main className='grow w-full flex justify-center flex-col'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
