import assert from 'power-assert';
import calc from '../src/calculationInFrame';
import situations from './fixtures/situations';

describe('calculationInFrame', () => {
  describe('ふっとばし速度は', () => {
    context('64 % のファルコンにマルスの横スマ先端を当てたとき', () => {
      it('5.44 ぐらいになる', () => {
        const flightSpeed = calc.flightSpeed(situations.captainDragonKiller);
        assert(Math.round(flightSpeed * 100) === 544);
      });
    });
  });

  describe('ふっとばしの角度は', () => {
    context('外側横変更相手にフォックスの上スマを当てたとき', () => {
      it('63 度ぐらいになる', () => {
        const flightAngle = calc.flightAngle(situations.toryaaa);
        assert(Math.round(flightAngle) === 63);
      });
    });

    context('無変更相手にサクライベクトル技を当てたとき', () => {
      it('44 度になる', () => {
        assert(calc.flightAngle(situations.captainDragonKiller) === 44);
      });
    });
  });

  describe('硬直フレームは', () => {
    context('0 % のフォックスにファルコのドリルを当てたとき', () => {
      it('16 フレーム', () => {
        const lag = calc.frameDamage(situations.drillChain);
        assert(lag === 16);
      });
    });
  });

  describe('ヒットストップは', () => {
    context('フォックスにファルコのドリルを当てたとき', () => {
      it('7 フレーム', () => {
        assert(calc.hitlag(situations.drillChain) === 7);
      });
    });

    context('シークにファルコンの膝を当てたとき', () => {
      it('13 フレーム', () => {
        assert(calc.hitlag(situations.hiza) === 13);
      });
    });
  });

  describe('シールド硬直フレーム数は', () => {
    context('ファルコのドリルを当てたとき', () => {
      it('7 フレーム', () => {
        assert(calc.shieldLag(situations.drillChain) === 7);
      });
    });
  });
});
