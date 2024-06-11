import { FAQSection, HeroSection } from './sections';

export const AboutModule: React.FC = () => {
  return (
    <main className="flex flex-col gap-y-20 py-16 relative w-full px-12 bg-main">
      <HeroSection />
      <FAQSection />
    </main>
  );
};
