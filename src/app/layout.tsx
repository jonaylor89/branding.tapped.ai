import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import firebase from '@/utils/firebase';
console.log(firebase.app.name);

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tapped AI',
  description: 'The first ever AI record label. ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="keywords" content="AI record label
AI music label
music industry technology
music industry disruption
music industry innovations
future of music industry
emerging music technology
AI music startups
TappedAI record label
artist tools
artist resources
data-driven music strategy
online music marketing
online music promotion
music business future
empowering artists with AI
virtual team for musicians
futuristic record labels
" />
      <meta
        name="description"
        content="TappedAI is poised to disrupt the music business with the first ever AI record label built to catapult independent artists to success."
      />
      <meta property="og:site_name" content="label.tapped.ai" />
      <meta
        property="og:description"
        content="TappedAI is poised to disrupt the music business with the first ever AI record label built to catapult independent artists to success."
      />
      <meta property="og:title" content="TappedAI is the first ever AI record label to destroy major labels " />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="TappedAI is the first ever AI record label to destroy major labels " />
      <meta
        name="twitter:description"
        content="TappedAI is poised to disrupt the music business with the first ever AI record label built to catapult independent artists to success."
      />
      <meta property="og:url" content="https://label.tapped.ai/" />
      <meta property="og:image" content="https://label.tapped.ai/og.png" />

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
