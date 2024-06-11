import { Anchor } from 'antd';
import { CustomLinkProps } from './interface';

const { Link } = Anchor;

export const CustomLink: React.FC<CustomLinkProps> = ({ ...props }) => {
  return <Link {...props} />;
};
