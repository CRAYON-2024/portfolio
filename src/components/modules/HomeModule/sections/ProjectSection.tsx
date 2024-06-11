import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { CustomLink, ProjectCard } from '../../../elements';
import { useWindowSize } from '../../../../utils';
import { APP_DATA } from '../../WorksModule/constant';

export const ProjectSection: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <div className="flex flex-col gap-x-8 gap-y-8 relative" id="projects">
      <div className="w-full flex sm:flex-row flex-col gap-x-8 justify-between sm:items-center">
        <div className="flex gap-x-4 sm:w-3/5 w-full items-center">
          <h1 className="text-secondary text-4xl font-bold"> Works </h1>
          <span className="border-t-2 border-primary w-full"> </span>
        </div>
        <CustomLink
          href="/works"
          title={
            <div className="hover:underline duration-300 flex gap-x-3 items-center sm:justify-start justify-end hover:text-secondary">
              <span> View More </span>
              <FaArrowRightFromBracket width={16} height={16} />
            </div>
          }
        />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4">
        {APP_DATA.slice(0, width >= 768 ? 3 : width >= 640 ? 2 : 1).map(
          (project, key) => (
            <ProjectCard key={key} {...project} />
          )
        )}
      </div>
    </div>
  );
};
