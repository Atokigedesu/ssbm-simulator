import data from 'ssbm-data';
import Situation from '../../src/Situation';

const situations = {
  // 64 % のファルコンにマルスの横スマ先端
  captainDragonKiller: (() => {
    const falcon = data.characters.Ca;
    const dragonKiller = data.hitboxes.find((hitbox) =>
      hitbox.character_id === 'Ms' && hitbox.damage === 20);
    return new Situation({
      character: falcon,
      hitbox: dragonKiller,
      percentage: 64,
    });
  })(),
  // 外側変更の 100 % のフォックスにマルスの横スマ先端
  foxKiller: (() => {
    const fox = data.characters.Fx;
    const dragonKiller = data.hitboxes.find((hitbox) =>
      hitbox.character_id === 'Ms' && hitbox.damage === 20);
    return new Situation({
      character: fox,
      hitbox: dragonKiller,
      percentage: 100,
      di: 0,
    });
  })(),
  // 外側横変更の 100 % シークにフォックスの上スマ
  toryaaa: (() => {
    const sheik = data.characters.Sk;
    const smashUp = data.hitboxes.find((hitbox) =>
      hitbox.character_id === 'Fx' && hitbox.damage === 18);
    return new Situation({
      character: sheik,
      hitbox: smashUp,
      percentage: 100,
      di: 0,
    });
  })(),
  // 0 % のフォックスにファルコのドリル
  drillChain: (() => {
    const fox = data.characters.Fx;
    const drill = data.hitboxes.find((hitbox) =>
      hitbox.character_id === 'Fc' && hitbox.damage === 12 && hitbox.angle === 290);
    return new Situation({
      character: fox,
      hitbox: drill,
      percentage: 0,
    });
  })(),
  // 0 % のシークにファルコンの膝
  hiza: (() => {
    const sheik = data.characters.Sk;
    const hiza = data.hitboxes.find((hitbox) =>
      hitbox.character_id === 'Ca' && hitbox.angle === 32);
    return new Situation({
      character: sheik,
      hitbox: hiza,
      percentage: 0,
    });
  })(),
  // 300 % のマリオにピチューの下スマ
  suddendeath: (() => {
    const critialDA = data.hitboxes.find((hitbox) =>
      hitbox.character_id === 'Pc' && hitbox.move === 'smash_down');
    return new Situation({
      hitbox: critialDA,
      percentage: 300,
    });
  })(),
  // 300 % のマリオにファルコンパンチ
  overkill: (() => {
    const falconPanch = data.hitboxes.find((hitbox) =>
      hitbox.character_id === 'Ca' && hitbox.damage === 27 &&
      hitbox.base_knockback === 30);
    return new Situation({
      hitbox: falconPanch,
      percentage: 300,
    });
  })(),
};

export default situations;
