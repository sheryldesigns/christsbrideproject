'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import CategoriesSection from './CategoriesSection';
import TestimonialsSection from './TestimonialsSection';
import SubscriptionCTA from './SubscriptionCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoriesSection />
        <TestimonialsSection />
        <SubscriptionCTA />
      </main>
      <Footer />
    </div>
  );
}