'use client';

import { Inter } from 'next/font/google';
import { FormProvider } from '../providers/Form';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
