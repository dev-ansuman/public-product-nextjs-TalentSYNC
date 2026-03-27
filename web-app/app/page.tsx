import { fetchStrapi } from '@/lib/strapi';
import Hero from '@/components/sections/Hero';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsletterForm from '@/components/sections/NewsletterForm';
import StatsSection from '@/components/sections/StatsSection';

export const revalidate = 60;

export default async function HomePage() {
  const [landingPage, testimonials] = await Promise.all([
    fetchStrapi('/landing-page?populate=*'),
    fetchStrapi('/testimonials'),
  ]);

  return (
    <main>
      <Hero
        title={landingPage.hero_title}
        subtitle={landingPage.hero_subtitle}
        ctaText={landingPage.hero_cta_text}
        ctaLink={landingPage.hero_cta_link}
      />
      <StatsSection />
      <TestimonialsSection testimonials={testimonials} />
      <NewsletterForm />
    </main>
  );
}