"use strict";

import {ReactSonic} from './base.js'

export class ReactArcSonic extends ReactSonic {
  constructor(props) {
    super(props);
    this.path = this.props.path||[
      ['arc', this.width/2, this.height/2, this.height/3, 0, 360]
    ];
  }
}
