import type { Metadata } from "next";
import { Poppins, Montserrat } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: "300"
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Khushi Roy",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
