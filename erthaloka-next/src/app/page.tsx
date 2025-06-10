import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIs from '@/components/WhatIs';
import EcoVerseModel from '@/components/EcoVerseModel';
import WhyNow from '@/components/WhyNow';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="space-y-20 mt-16">
        <Hero />
        <WhatIs />
        <EcoVerseModel />
        <WhyNow />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}
