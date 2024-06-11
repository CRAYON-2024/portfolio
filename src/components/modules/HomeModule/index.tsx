import { HeroSection } from './HeroSection';

export const HomeModule = () => {
  return (
    <section className="flex flex-col gap-y-20 py-16 relative px-12 bg-main">
      <HeroSection />
    </section>
  );
};
