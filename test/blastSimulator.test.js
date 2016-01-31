import assert from 'power-assert';
import calc from '../src/blastSimulator';
import situations from './fixtures/situations';

describe('blastSimulation', () => {
  describe('上バーストは', () => {
    context('64 % のファルコンにマルスの横スマ先端を当てたとき', () => {
      it('バーストしない', () => {
        assert(calc.isKnockOutHigher(situations.captainDragonKiller) === false);
      });
    });

    context('100 % の横変更するシークにフォックスの上スマを当てたとき', () => {
      it('バーストする', () => {
        assert(calc.isKnockOutHigher(situations.toryaaa) === true);
      });
    });
  });

  describe('右バーストは', () => {
    context('64 % のファルコンにマルスの横スマ先端を当てたとき', () => {
      it('バーストしない', () => {
        assert(calc.isKnockOutRight(situations.captainDragonKiller) === false);
      });
    });
    context('100 % のフォックスにマルスの横スマ先端を当てたとき', () => {
      it('バーストする', () => {
        assert(calc.isKnockOutRight(situations.foxKiller) === true);
      });
    });
  });

  describe('左バーストは', () => {
    context('300 % のキャラにファルコンパンチを当てたとき', () => {
      it('バーストしない', () => {
        assert(calc.isKnockOutLeft(situations.overkill) === false);
      });
    });

    context('300 % のキャラにピチューの下スマを当てたとき', () => {
      it('バーストする', () => {
        assert(calc.isKnockOutLeft(situations.suddendeath) === true);
      });
    });
  });
});
