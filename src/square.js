"use strict";

import {ReactSonic} from './base.js'

export class ReactSquareSonic extends ReactSonic {
  constructor(props) {
    super(props);
    this.path = this.props.path||[
      ['line', 0, 0, this.width, 0],
      ['line', this.width, 0, this.width, this.height],
      ['line', this.width, this.height, 0, this.height],
      ['line', 0, this.height, 0, 0]
    ];
  }
}
