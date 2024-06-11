import { Collapse, Typography } from 'antd';
import { WORK_EXPERIENCE } from '../constant';

export const FAQSection: React.FC = () => {
  return (
    <Collapse
      items={[
        ...WORK_EXPERIENCE.map((work, index) => {
          return {
            key: index,
            label: `${work.company} - ${work.role}`,
            children: <Typography.Text>{work.description}</Typography.Text>
          };
        })
      ]}
      defaultActiveKey={['0']}
      style={{ backgroundColor: '#f0f2f5' }}
      className="bg-main"
    />
  );
};
