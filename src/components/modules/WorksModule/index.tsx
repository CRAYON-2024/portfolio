import React from 'react';
import { HeroSection } from './sections';
import { ShowcaseSection } from './sections/ShowcaseSection';
import { APP_DATA, FUN_PROJECTS } from './constant';

export const WorksModule: React.FC = () => {
  return (
    <main className="flex flex-col gap-y-20 py-16 relative w-full px-12 bg-main">
      <HeroSection />
      <ShowcaseSection section="Apps" mappedData={APP_DATA} />
      <ShowcaseSection section="Projects" mappedData={FUN_PROJECTS} />
    </main>
  );
};
