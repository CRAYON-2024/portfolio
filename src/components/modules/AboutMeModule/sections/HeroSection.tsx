import { Image, Typography } from 'antd';
import { CustomButton, CustomLink } from '../../../elements';
import { URL_CV } from '../constant';
import { FaExternalLinkAlt } from 'react-icons/fa';
import FormalPicture from '../../../../assets/Formal.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-x-8 gap-y-8 relative" id="about">
      <div className="flex lg:flex-row flex-col w-full gap-8 lg:items-start items-center">
        <div className="w-full flex flex-col gap-y-12">
          <h1 className="text-secondary text-4xl font-bold">
            {' '}
            <span className="italic"> Who </span> am I?{' '}
          </h1>

          <Typography.Text className="text-justify break-all break-words">
            {' '}
            Hello, i&apos;m Alvaro, a student on University of Indonesia
            studying Computer Science. I&apos;m a passionate and driven software
            engineer eager to dive into the dynamic world of technology. I am
            currently seeking for opportunities to further expand my skills and
            contribute meaningfully to innovative projects. Though my
            professional journey is just beginning, I&apos;ve had the privilege
            of working on various projects during my academic years. These
            experiences have equipped me with hands-on skills in software
            development, project management, and the ability to adapt quickly to
            new environments.
            <br /> <br />I am eager to bring my enthusiasm, creativity, and
            technical skills to a dynamic team. I&apos;m looking for a work
            opportunity where I can not only apply my knowledge but also learn
            from seasoned professionals in the field. I am excited to contribute
            my fresh perspective while absorbing invaluable insights and
            mentorship.
          </Typography.Text>
          <CustomLink
            href={URL_CV}
            target="_blank"
            title={
              <CustomButton
                icon={<FaExternalLinkAlt className="w-3 h-3 font-bold" />}
                type="primary"
              >
                {' '}
                Review CV{' '}
              </CustomButton>
            }
          />
        </div>
        <Image
          src={FormalPicture}
          alt={'formal'}
          width={350}
          height={350}
          className="object-fill fill-inherit relative max-w-[350px] w-full z-50 border-b-primary border-b-2 "
        />
      </div>
    </section>
  );
};
