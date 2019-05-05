import React from 'react';
import css from './SponsorInfo.scss';

interface Props {
}

const SponsorInfo: React.FC<Props> = () => {
  return (
    <>
      <div className={css.SponsorInfo}>
        <div>
          <h1 className={css.Title}>Sponsorship</h1>
          <div className={css.Underbar}/>
          <p className={css.Desc}>
            FEConf와 함께 대한민국 최대의 프런트엔드 컨퍼런스를 만들어 나갈 후원사를 모집합니다.
          </p>
        </div>
        <div className={css.InfoWrap}>
          <div className={css.Info}>
            <h2>후원사 모집 기간</h2>
            <p>
              <span>2019년 5월 1일 부터 2019년 5월 31일 까지</span><br/>
            </p>
          </div>
          <div className={css.Info}>
            <h2>후원 등급 및 후원 금액</h2>
            <p>
              <span>Diamond (7,000,000)</span><br/>
              <span>Platinum (5,000,000)</span><br/>
              <span>Gold (3,000,000)</span><br/>
            </p>
          </div>
          <div className={css.Info}>
            <p>
              <span>현물, 서비스 등 기타 후원일 경우 제안 부탁드립니다.</span><br/>
              <span>기존 후원사일 경우 후원 금액 <span>10%</span> 할인 해 드립니다.</span><br/>
            </p>
          </div>
        </div>
      </div>

      <div className={css.Benefit}>
        <div>
          <h1 className={css.Title}>Benefit</h1>
          <div className={css.Underbar}/>
          <p className={css.Desc}>
            후원 등급별 혜택 안내
          </p>
        </div>
        <div className={css.InfoWrap}>
          <div className={css.Info}>
            <h2>Gold</h2>
            <p>
              <span>X Banner logo</span><br/>
              <span>홈페이지 로고</span><br/>
              <span>초대권 3장</span><br/>
            </p>
          </div>
          <div className={css.Info}>
            <h2>Platinum</h2>
            <p>
              <span>Booth 현수막 로고</span><br/>
              <span>X Banner logo</span><br/>
              <span>홈페이지 로고</span><br/>
              <span>초대권 5장</span><br/>
            </p>
          </div>
          <div className={css.Info}>
            <h2>Diamond</h2>
            <p>
              <span>개별 홍보 시간 10분</span><br/>
              <span>Booth 현수막 로고</span><br/>
              <span>X Banner logo</span><br/>
              <span>홈페이지 로고</span><br/>
              <span>초대권 10장</span><br/>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SponsorInfo;
