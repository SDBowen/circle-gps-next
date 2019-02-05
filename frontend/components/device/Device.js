import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import "./Device.scss";

class Device extends Component {
  static propTypes = {
    device: PropTypes.object.isRequired
  };

  render() {
    const { device } = this.props;
    return (
      <div className="device-card">
        <div className="device-card__detail">
          <p className="device-card__name">{device.deviceName}</p>
          <p className="device-card__id">{device.deviceId}</p>
        </div>
        <div className="device-card__actions">
          <button className="device-card__button device-card__button--edit">
            EDIT
          </button>
          <button className="device-card__button device-card__button--delete">
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

export default Device;
