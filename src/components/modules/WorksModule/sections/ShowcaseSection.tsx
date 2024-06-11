import { Carousel } from 'antd';
import React from 'react';
import { ProjectCard } from '../../../elements';
import { ShowcaseSectionProps } from '../interface';
import { useWindowSize } from '../../../../utils';

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  section,
  mappedData
}) => {
  const { width } = useWindowSize();

  return (
    <div className="flex flex-col gap-x-8 gap-y-8 relative" id="apps">
      <h1 className="text-secondary text-4xl font-bold"> {section} </h1>
      <Carousel
        slidesToShow={width >= 768 ? 3 : width >= 640 ? 2 : 1}
        arrows
        style={{ display: 'grid', gridAutoFlow: 'row', gap: 16 }}
        className="grid-flow-row"
      >
        {mappedData.map((project, key) => (
          <ProjectCard key={key} {...project} />
        ))}
      </Carousel>
    </div>
  );
};
