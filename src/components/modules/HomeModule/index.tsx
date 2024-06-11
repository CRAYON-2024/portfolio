import { AchievementSection, HeroSection } from './sections';

export const HomeModule = () => {
  return (
    <main className="flex flex-col gap-y-20 py-16 relative px-12 bg-main">
      <HeroSection />
      <AchievementSection />
    </main>
  );
};
