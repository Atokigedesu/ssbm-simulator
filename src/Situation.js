import data from 'ssbm-data';

/**
 * represent how situation on hit
 *
 *  character: object of attacked character (one of ssbm.character)
 *  hitbox: object of hitbox (one of ssbm.hitbox)
 *  percentage: percentage before hit
 *  opco: coefficient of one pattern or grabbing
 *  scaleco: coefficient of scale, pose, handicap or
 *                damage ratio (in Custom Rules)
 *  resistence: resistence to speed (e.g. Yoshi's jump)
 *  position: position (= {x: ?, y: ?}) of attacked character
 *  stage: stage of the game (one of ssbm.stage)
 *  di: Directional Influence angle (non-DI is 361)
 */

const defaultOpt = {
  character: data.characters.Ma,
  hitbox: data.hitboxes[0],
  percentage: 0,
  opco: 1,
  scaleco: 1,
  resistence: 0,
  position: { x: 0, y: 0.0001 },
  stage: data.stages.FinalDestination,
  di: 361,
};

export default class Situation {
  constructor(opt) {
    Object.assign(this, defaultOpt, opt);
  }
}
