import calc from './calculationInFrame';

/**
 * バーストするかどうかをシミュレーションする関数群
 */
const blastSimulation = {
  /**
   * 上バーストするかどうか
   */
  isKnockOutHigher(situation) {
    let y = situation.position.y;
    let v = calc.flightSpeed(situation);
    const blastLine = situation.stage.blastLine.higher;
    let speed = 0;
    const angle = calc.flightAngle(situation);
    const chara = situation.character;
    for (;;) {
      // update a game frame
      speed = Math.max(speed - chara.gravity, -chara.terminal_velocity);
      v = Math.max(0, v - 0.051);
      const vy = v * Math.sin(angle * Math.PI / 180);
      y += vy + speed;
      // exit check
      if (vy + speed <= 0 || vy <= 2.4) {
        return false;
      } else if (blastLine < y) {
        return true;
      }
    }
  },

  /**
   * 右バーストするかどうか
   */
  isKnockOutRight(situation) {
    let x = situation.position.x;
    let v = calc.flightSpeed(situation);
    let l = calc.frameDamage(situation);
    const blastLine = situation.stage.blastLine.right;
    let speed = 0;
    const angle = calc.flightAngle(situation);
    const chara = situation.character;
    for (;;) {
      // update a game frame
      if (l-- <= 0) {
        speed -= chara.air_mobility;
        speed = Math.max(speed, -chara.max_aerial_h_velocity);
      }
      v = Math.max(0, v - 0.051);
      const vx = v * Math.cos(angle * Math.PI / 180);
      x += vx + speed;
      // exit check
      if (vx + speed <= 0) {
        return false;
      } else if (blastLine < x) {
        return true;
      }
    }
  },

  /**
   * 左バーストするかどうか
   */
  isKnockOutLeft(situation) {
    let x = situation.position.x;
    let v = calc.flightSpeed(situation);
    let l = calc.frameDamage(situation);
    const blastLine = situation.stage.blastLine.left;
    let speed = 0;
    const angle = calc.flightAngle(situation);
    const chara = situation.character;
    for (;;) {
      // update a game frame
      if (l-- <= 0) {
        speed = speed + chara.air_mobility;
        speed = Math.min(speed, chara.max_aerial_h_velocity);
      }
      v = Math.max(0, v - 0.051);
      const vx = v * Math.cos(angle * Math.PI / 180);
      x += vx + speed;
      // exit check
      if (vx + speed >= 0) {
        return false;
      } else if (x < blastLine) {
        return true;
      }
    }
  },
};

export default blastSimulation;
