import { Button } from 'antd';
import { CustomButtonProps } from './interface';

export const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  children,
  ...props
}) => {
  return (
    <Button
      type={type}
      className={`px-6 py-6 rounded-xl !poppins
            ${type === 'primary' ? 'bg-primary hover:!bg-[#14D069]' : 'text-black hover:!text-primary'}
        `}
      {...props}
    >
      {children}
    </Button>
  );
};
