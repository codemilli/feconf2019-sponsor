import React, { useEffect, useState } from 'react';
import css from './Hero.scss';

interface Props {}

export const easeInQuad = t => t * t;
export const easeInCubic = t => t * t * t;

const getScrollY = () => typeof window === 'object' ? pageYOffset : 0;

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => requestAnimationFrame(() =>
      setScroll(getScrollY()));
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return scroll
}

export const useTransform = (
  value: number,
  targetRange: [number, number],
  transformRange: [number, number],
  easingFunc?: (v: number) => number,
) => {
  const [tmin, tmax] = targetRange;
  const [trmin, trmax] = transformRange;
  if (value < tmin) {
    return trmin;
  }
  if (value > tmax) {
    return trmax;
  }
  const tr = tmax - tmin;
  const trr = trmax - trmin;
  const p = value - tmin;
  let progress = p / tr;
  progress = easingFunc ? easingFunc(progress) : progress;
  return trr * progress;
}

const Hero: React.FC<Props> = () => {
  const scroll = useScroll();
  const transformed = useTransform(
    scroll,
    [0, 1500],
    [0, 1000],
    easeInQuad,
  );
  const opacity = 1 - transformed / 300;
  return (
    <div className={css.Hero}>
      <div style={{transform: `translate3d(${-transformed}px, ${-transformed}px, 0)`, opacity}}>
        <div className={css.LogoWrap}>
          <h1 className={css.Logo}>FEConf 2019</h1>
        </div>
        <div className={css.Present}>
          <span>Enjoy Experience Everywhere</span>
        </div>
      </div>
      <div>
        <img
          className={css.Shade}
          style={{transform: `translate3d(${-transformed}px, ${transformed}px, 0)`, opacity}}
          src="static/images/sponsor/bottomleft-shade.png" alt="Shade"
        />
        <img
          className={css.Shade}
          style={{transform: `translate3d(${transformed}px, ${-transformed}px, 0)`, opacity}}
          src="static/images/sponsor/topright-shade.png" alt="Shade"
        />
      </div>
    </div>
  );
}

export default Hero;
