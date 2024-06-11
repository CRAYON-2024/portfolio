import { gsap, Linear } from 'gsap';
import React from 'react';

const _404 = () => {
  const animationConfig = (reverse: boolean) => {
    return {
      transformOrigin: '50% 50%',
      rotation: `${reverse ? '-' : '+'}=360`,
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8
    };
  };
  React.useEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();

    t1.to('.cog1', animationConfig(false));

    t2.to('.cog2', animationConfig(true));

    t3.fromTo(
      '.wrong-para',
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1,
        stagger: {
          repeat: -1,
          yoyo: true
        }
      }
    );
  }, []);

  return (
    <section
      className="w-screen h-screen flex items-center justify-center relative text-center poppins overflow-hidden bg-main"
      aria-labelledby="error-title"
      aria-describedby="error-description"
    >
      <h1 id="error-title" className="first-four" aria-hidden="true">
        4
      </h1>
      <figure className="cog-wheel1" role="img" aria-label="Spinning cogwheel">
        <figcaption className="hidden"></figcaption>
        <div className="cog1">
          <span className="top"></span>
          <span className="down"></span>
          <span className="left-top"></span>
          <span className="left-down"></span>
          <span className="right-top"></span>
          <span className="right-down"></span>
          <span className="left"></span>
          <span className="right"></span>
        </div>
      </figure>

      <figure className="cog-wheel2" role="img" aria-label="Spinning cogwheel">
        <figcaption className="hidden"></figcaption>
        <div className="cog2">
          <span className="top"></span>
          <span className="down"></span>
          <span className="left-top"></span>
          <span className="left-down"></span>
          <span className="right-top"></span>
          <span className="right-down"></span>
          <span className="left"></span>
          <span className="right"></span>
        </div>
      </figure>
      <h1 id="second-error-title" className="second-four" aria-hidden="true">
        4
      </h1>
      <p id="error-description" className="wrong-para">
        Uh Oh! Page not found!
      </p>
    </section>
  );
};

export default _404;
