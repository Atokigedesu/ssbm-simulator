/**
 * 基本ふっとばし力
 *
 * @param {object} situation - 攻撃ヒット時の状況
 * @return {number} - 基本ふっとばし力
 */
function basicPower(situation) {
  const damageDepentPower = (
    situation.hitbox.weight_dependent_set_knockback > 0
    ? (situation.hitbox.weight_dependent_set_knockback + 2) * 10
    : Math.floor(situation.hitbox.damage + 2) *
        (Math.floor(situation.percentage) + situation.hitbox.damage * situation.opco)
  );
  return ((14 / (100 + situation.character.weight) *
      damageDepentPower + 18) *
      situation.hitbox.knockback_growth / 100 +
      situation.hitbox.base_knockback) *
      situation.scaleco - situation.resistence;
}

/**
 * 1 フレーム内で行われる計算を行う関数群
 */
const calculationInFrame = {
  /**
   * 攻撃ヒット時のふっとばし速度を求める
   *
   * @param {object} situation - 攻撃ヒット時の状況
   * @return {number} - ふっとばし速度
   */
  flightSpeed(situation) {
    return basicPower(situation) * 0.03;
  },

  /**
   * ふっとばし角度を求める
   */
  flightAngle(situation) {
    const angle = situation.hitbox.angle;
    // サクライアングルなら 44 (地上) とする
    const hitboxAngle = angle === 361 ? 44 : angle;
    // 無変更なら攻撃判定の角度で飛ぶ
    if (situation.di === 361) {
      return hitboxAngle;
    }

    const diff = (situation.di - hitboxAngle + 360) % 360;
    const p = 18 * Math.pow(Math.sin(diff * Math.PI / 180), 2);
    return hitboxAngle + (diff <= 180 ? p : -p);
  },

  /**
   * ふっとばし硬直フレームを求める
   */
  frameDamage(situation) {
    return Math.floor(basicPower(situation) * 0.4);
  },

  /**
   * ヒットストップフレーム数を求める
   */
  hitlag(situation) {
    const a = situation.hitbox.effect === 'Electric' ? 1.5 : 1;
    return Math.min(20, Math.floor(Math.floor(situation.hitbox.damage / 3 + 3) * a));
  },

  /**
   * ガード硬直フレーム数を求める
   */
  shieldLag(situation) {
    return Math.floor(20 * (situation.hitbox.damage * 9 + 40) / 402);
  },
};

export default calculationInFrame;
