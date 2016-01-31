import assert from 'power-assert';
import main from '../src/main';
import inFrame from '../src/calculationInFrame';
import blast from '../src/blastSimulator';

describe('main', () => {
  it('全サブモジュールの公開関数を公開する', () => {
    const mainKeys = Object.keys(main);
    const moduleKeys = [...Object.keys(inFrame), ...Object.keys(blast)];
    assert(JSON.stringify(mainKeys) === JSON.stringify(moduleKeys));
  });
});
