import React, { Component } from "react";

import "./AddDevice.scss";

class addDevice extends Component {
  render() {
    return (
      <div className="add-device-box">
        <div className="add-device-box__header">
          <div className="add-device-box__option">
            <p>New Device</p>
          </div>
          <div className="add-device-box__links-box">
            <div className="add-device-box__link">
              <a>Dashboard</a>
            </div>
          </div>
        </div>
        <form className="add-device-box__form">
          <div className="add-device-box__device-id">
            <input
              type="text"
              name="deviceId"
              placeholder="Device ID"
              // value={this.state.deviceId}
              // onChange={this.onChange}
            />
            {/* If errors, display to user */}
            {/* {errors.device && ( */}
            <p className="add-device-box__error">error.fromServer</p>
            {/* )} */}
          </div>
          <div className="add-device-box__device-name">
            <input
              type="text"
              name="deviceName"
              placeholder="Device Name"
              // value={this.state.deviceName}
              // onChange={this.onChange}
            />
          </div>
          <div className="add-device-box__submit">
            <input
              className="add-device-box__submit-button"
              type="submit"
              value="Add Device  >"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default addDevice;
