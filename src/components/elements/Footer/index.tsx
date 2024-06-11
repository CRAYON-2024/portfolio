import { Typography } from 'antd';
import { menu, socialMedia } from './constant';
import { FaGithub } from 'react-icons/fa';
import { CustomLink } from '../CustomLink';

export const Footer = () => {
  return (
    <footer className="bg-main" aria-labelledby="footer-heading">
      <Typography.Text id="footer-heading" className="sr-only">
        Footer
      </Typography.Text>

      <div className="border-t lg:border-gray flex justify-center">
        <div className="container">
          <div className="flex flex-col space-y-4 py-6">
            <div className="flex items-center justify-center space-x-8">
              {menu.map((item, index) => (
                <CustomLink
                  key={index}
                  href={item.href}
                  target={'_blank'}
                  className="animated-underline inline-flex items-center justify-center text-xs font-semibold hover:text-secondary duration-200 sm:text-sm"
                  title={item.name}
                />
              ))}
            </div>

            <div className="flex items-center justify-center space-x-8">
              {socialMedia.map(({ icon, ...item }, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {<i> {icon} </i>}
                  <CustomLink
                    href={item.href}
                    target={'_blank'}
                    className="animated-underline text-xs font-semibold hover:text-secondary duration-200 sm:text-sm"
                    title={
                      <>
                        <span className="block md:hidden">{item.name}</span>
                        <span className="hidden md:block">{item.username}</span>
                      </>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t lg:border-gray flex justify-center px-8">
        <div className="container">
          <div className="flex md:flex-row flex-col gap-4 items-center justify-between py-6">
            <div className="flex items-center gap-x-2">
              <FaGithub />
              <CustomLink
                href="https://www.github.com/emiriko"
                target={'_blank'}
                className="text-xs font-semibold sm:text-sm"
                title={
                  <>
                    <span className="hidden md:block hover:text-secondary duration-200">
                      {' '}
                      github.com/emiriko{' '}
                    </span>
                    <span className="block md:hidden hover:text-secondary duration-200">
                      {' '}
                      My GitHub{' '}
                    </span>
                  </>
                }
              />
            </div>
            <Typography.Text className="flex items-center justify-center text-xs font-semibold sm:text-sm">
              ©{new Date().getFullYear()} - Alvaro Austin . All Rights
              Reserved.
            </Typography.Text>
          </div>
        </div>
      </div>
    </footer>
  );
};
