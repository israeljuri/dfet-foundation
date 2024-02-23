import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DFET Foundation - Helping humanity with blockchain technology',
  description:
    'DFET Foundation is the first African decentralised non-governmental organisation founded in October, 2021 with the purpose of providing a secure and transparent platform for individuals and corporate bodies to give back to the community using blockchain technology.',
  keywords:
    'DFET, DFET-Foundation, Foundation, Blockchain Foundation, NGO BlockChain',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
