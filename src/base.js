"use strict";

import React from 'react'

export class ReactSonic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.width = this.props.width||50;
    this.height = this.props.height||50;
    this.path = this.props.path||[
      ['line', 10, this.height/2, this.width-10, this.height/2]
    ];
  }
  componentDidMount() {
    const square = new Sonic({
      width: this.width,
      height: this.height,
      stepsPerFrame: this.props.stepsPerFrame||4,
      trailLength: this.props.trailLength||0.6,
      pointDistance: this.props.pointDistance||0.01,
      fps: this.props.fps||20,
      backgroundColor: this.props.backgroundColor||'#272822',
      fillColor: this.props.fillColor||'#AAA',
      path: this.path||null,
      step: this.step||null,
      setup: this.setup||null
    });
    this.refs.loader.getDOMNode().appendChild(square.canvas);
    square.play();
  }
  render() {
    return <div ref="loader" className={this.props.className||''} title={this.props.title||''} />
  }
}

