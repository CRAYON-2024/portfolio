import { Image, Typography } from 'antd';
import ProfilePicture from '../../../../assets/Picture_No_Bg.png';
import Decoration from '../../../../assets/decoration.svg';
import { CustomButton } from '../../../elements';
import { MdArrowOutward } from 'react-icons/md';

export const HeroSection: React.FC = () => (
  <section className="flex flex-col gap-y-16">
    <div className="flex md:flex-row flex-col gap-16 w-full items-center justify-between">
      <div className="flex flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-2 w-full">
          <Typography.Text className="text-black text-3xl font-bold">
            {' '}
            Hello, I&apos;m Alvaro,{' '}
          </Typography.Text>
          <Typography.Text className="text-primary text-4xl font-bold">
            {' '}
            Full-stack Developer<span className="text-black"> and </span>
            Software Engineer{' '}
          </Typography.Text>
          <Typography.Text className="text-black text-3xl font-bold">
            {' '}
            from Indonesia.{' '}
          </Typography.Text>
        </div>
        <Typography.Text className="text-justify break-all break-words font-normal poppins text-secondary">
          Inquisitive, energetic, skilled and knowledgeable computer science
          student with extensive knowledge of programming. Seeking to leverage
          solid skills in collaboration and communication. A committed
          programmer with the intention to contribute my expertise to be a
          dependable team member. Excited to find opportunities to improve
          myself.
        </Typography.Text>
        <div className="flex gap-8">
          <CustomButton type="primary" href="mailto:itsrealalvaro@gmail.com">
            {' '}
            Contact Me{' '}
          </CustomButton>
          <CustomButton
            type="link"
            icon={<MdArrowOutward />}
            iconPosition="end"
            href="https://docs.google.com/document/d/1omsQyNm0qcrr5CL_4yK5J2S4-GEpbJdaj9XxYgtex1E/edit"
            target="_blank"
          >
            {' '}
            View CV{' '}
          </CustomButton>
        </div>
      </div>
      <div className="relative h-full">
        <div className="relative flex flex-col items-center z-[10]">
          <Image
            src={ProfilePicture}
            alt={'profile'}
            width={400}
            preview={false}
          />
        </div>
        <div className="absolute top-[170px] left-0 flex flex-col items-center z-[5]">
          <Image
            src={Decoration}
            alt={'decoration'}
            width={400}
            preview={false}
          />
        </div>
      </div>
    </div>
  </section>
);
