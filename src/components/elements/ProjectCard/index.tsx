import { Card, Image } from 'antd';
import { ProjectCardProps } from './interface';
import Meta from 'antd/es/card/Meta';
import { LinkOutlined } from '@ant-design/icons';
import { CustomLink } from '../CustomLink';

export const ProjectCard: React.FC<ProjectCardProps> = ({
  identify,
  title,
  description,
  photo,
  link,
  cached = true
}) => {
  return (
    <Card
      cover={<Image alt={identify} src={photo[0]} />}
      actions={
        !cached
          ? [
              <CustomLink
                href={link as string}
                target="_blank"
                title={
                  <>
                    <LinkOutlined key="link" href={link} target="_blank" />,
                  </>
                }
              />
            ]
          : []
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};
