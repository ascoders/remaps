"use strict";

import React, { Component, PropTypes } from 'react';
import Popup from './Popup';
import { isTooltipUpdate } from './TooltipUpdate';

export default class Polygon extends Component {
  static propTypes = {
    color: PropTypes.string,
    onMouseOut: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseOver: PropTypes.func,
    geoData: PropTypes.object,
    geoPath: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      fill: this.props.color
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isTooltipUpdate(nextProps, nextState, this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.color !== this.props.color) {
      this.setState({
        fill: nextProps.color
      });
    }
  }

  /**
   * 地图区块被点击的回调
   */
  handleClick(d, e) {
    const {
      id,
      onClick
    } = this.props;

    return onClick && onClick(this, d, id, e);
  }

  handleMouseOver(d, e) {
    const {
      id,
      hoverColor,
      hasDefaultColor,
      onMouseOut,
      onMouseOver,
      onClick
    } = this.props;

    if (!hasDefaultColor) {
      this.setState({
        fill: hoverColor
      });
    }

    return onMouseOver(this, d, id, e);
  }

  handleMouseMove(d, e) {
    const {
      id,
      onMouseMove
    } = this.props;

    return onMouseMove(this, d, id, e);
  }

  handleMouseOut(d) {
    const {
      id,
      color,
      onMouseOut,
    } = this.props;

    this.setState({
      fill: color
    });

    return onMouseOut(this, d, id);
  }

  render() {
    const {
      id,
      color,
      geoData,
      geoPath,
      onMouseOut,
      onMouseOver,
    } = this.props;

    const { fill } = this.state;

    return <path d={geoPath(geoData)}
      fill={fill}
      stroke={'#fff'}
      strokeWidth={'1'}
      onClick={this.handleClick.bind(this, geoData)}
      onMouseOver={this.handleMouseOver.bind(this, geoData)}
      onMouseMove={this.handleMouseMove.bind(this, geoData)}
      onMouseOut={this.handleMouseOut.bind(this, geoData)} />
  }
}
