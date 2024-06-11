import React from 'react';
import { ACHIEVEMENTS } from '../constant';

export const AchievementSection: React.FC = () => (
  <section className="md:mx-0 mx-auto">
    <div className="grid grid-cols-2 gap-8  md:flex md:justify-around items-center pt-20 pb-10">
      {ACHIEVEMENTS.map((achievement, index) => (
        <React.Fragment key={index}>
          <div className="text-center">
            <span className="text-primary text-3xl font-bold">
              {achievement.count}
            </span>
            <p className="text-gray-700">{achievement.title}</p>
          </div>
          {index < ACHIEVEMENTS.length - 1 && (
            <div className="border h-20 md:flex hidden border-primary"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  </section>
);
