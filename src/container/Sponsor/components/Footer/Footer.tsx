import React from 'react';
import css from './Footer.scss';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className={css.Footer}>
      <div className={css.Apply}>
        <a href="https://forms.gle/fLYXsGcSc3YYpP7GA">후원사 지원서 작성</a>
      </div>
      <p>
        <span>후원 문의: <a href="mailto:feconf@googlegroups.com">feconf@googlegroups.com</a></span>
      </p>
    </div>
  );
}

export default Footer;
