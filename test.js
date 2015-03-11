
/**
 * test
 */

import Bassline from './index';
import note from 'opendsp/note';

var bassline_notes = [
  27, 19, 14, 17, 22, 14, 17, 14,
  27, 19, 14, 27, 22, 14, 17, 14
].map(note);

var bassline = Bassline();

bassline
  .seq(bassline_notes)
  .hpf(.0058)
  .pre(.4)
  .clip(30)
  .res(.65)
  .lfo(.5)
  .lfo2(1);

export function dsp(t){
  t *= 0.8;
  return bassline.cut(.5).play(t) * .6;
}
