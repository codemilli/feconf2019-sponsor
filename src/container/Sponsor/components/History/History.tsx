import React from 'react';
import cc from 'classcat';
import css from './History.scss';
import { easeInQuad, useScroll, useTransform } from "../Hero/Hero"

interface Props {
}

const History: React.FC<Props> = () => {
  const scroll = useScroll();
  const opacity = useTransform(scroll, [500, 700], [0, 1], easeInQuad);
  return (
    <div className={cc({
      [css.History]: true,
      [css.active]: opacity === 1,
    })}>
      <div style={{opacity}}>
        <h1 className={css.Title}>History</h1>
        <div className={css.Underbar}/>
        <p className={css.Desc}>
          FEConf는 대한민국에 있는 현업 개발자들이 프런트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를<br/>
          공유하며 함께 성장하기 위해 2017년부터 꾸준히 개최한 대한민국 최대의 프런트엔드 컨퍼런스입니다.
        </p>
      </div>

      <div className={css.YearWrap}>
        <div className={css.Year}>
          <h2>FEConf 2017</h2>
          <p>
            <span>장소: 마루 180(150여명 규모)</span><br/>
            <span>홈페이지: <a href="https://2017.feconf.kr/">https://2017.feconf.kr/</a></span><br/>
            <span>발표영상: <a href="https://youtu.be/psIees_xuEY">https://youtu.be/psIees_xuEY</a></span><br/>
            <span>후원사: 레진, 네이버, NCSoft</span><br/>
          </p>
        </div>
        <div className={css.Year}>
          <h2>FEConf 2018</h2>
          <p>
            <span>장소: 롯데타워 SKY31 컨벤션(400여명 규모)</span><br/>
            <span>홈페이지: <a href="https://2018.feconf.kr/">https://2018.feconf.kr/</a></span><br/>
            <span>발표영상: <a href="https://youtu.be/lmVqI04Aj0o">https://youtu.be/lmVqI04Aj0o</a></span><br/>
            <span>
              후원사: 우하한형제들, 네이버, 카카오, 토스, 프로토파이, 뱅크샐러드, <br/>
              NCSoft, N Tech Service, Jet Brains, 인사이트, MANNING
            </span><br/>
          </p>
        </div>
        <div className={css.Year}>
          <h2>FEConf 2019</h2>
          <p>
            <span>2019년 9월~10월 중 개최 예정</span><br/>
            <span>롯데타워 SKY31 컨벤션</span><br/>
            <span>4-500 여명 규모</span><br/>
            <span>2트랙 12세션</span>
          </p>
        </div>
      </div>

    </div>
  );
}

export default History;
