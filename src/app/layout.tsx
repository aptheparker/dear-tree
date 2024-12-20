// app/layout.tsx (Server-Side with Client Component)
import '@/app/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import RedirectClient from '@/components/RedirectClient';

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Dear Tree',
  description: 'Merry Christmas!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RedirectClient /> {/* Add the client-side logic here */}
        <div id="phone-view">{children}</div>
      </body>
    </html>
  );
}
