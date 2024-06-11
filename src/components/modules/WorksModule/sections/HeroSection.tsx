import { Typography } from 'antd';

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-x-8 gap-y-8 relative">
      <h1 className="text-secondary text-4xl font-bold"> Works </h1>
      <Typography.Text>
        {' '}
        Welcome to my collection of projects and creations! This space is a
        testament to my passion for software engineering and my dedication to
        crafting innovative solutions. If you have any questions, ideas for
        collaboration, or simply want to chat about tech, feel free to reach
        out. I'm always thrilled to discuss these projects or explore new
        opportunities!{' '}
      </Typography.Text>
    </section>
  );
};
