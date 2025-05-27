import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Corrected import name
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Ensure Toaster is available

const geistSans = Geist({ // Corrected variable name
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({ // Corrected variable name
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BizFlow CRM',
  description: 'A basic CRM for small businesses by Firebase Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Added suppressHydrationWarning for potential theme/localStorage mismatches during initial load */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Toaster is now rendered within AppShell to be part of the client-side tree where useToast is effective */}
      </body>
    </html>
  );
}
