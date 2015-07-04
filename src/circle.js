"use strict";

import {ReactArcSonic} from './arc.js'

export class ReactCircleSonic extends ReactArcSonic {
  constructor(props) {
    super(props);
    this.step = function(point, index, frame) {
      var sizeMultiplier = 2;
      this._.fillText(0|frame*this.fps, 1, 99);
      this._.beginPath();
      this._.moveTo(point.x, point.y);
      this._.arc(
        point.x, point.y,
        index * sizeMultiplier, 0,
        Math.PI*2, false
      );
      this._.closePath();
      this._.fill();
    }
  }
}
