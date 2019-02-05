import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Error from "../ErrorMessage";
import "./AddDevice.scss";

const CREATE_DEVICE_MUTATION = gql`
  mutation CREATE_DEVICE_MUTATION($deviceName: String!, $deviceId: String!) {
    createDevice(deviceName: $deviceName, deviceId: $deviceId) {
      id
    }
  }
`;

class addDevice extends Component {
  state = {
    deviceName: "Another test",
    deviceId: "test2"
  };

  // State is updated on user input
  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  // On form submit, user input is validated and sent to profile api
  // error returned if invalid
  // TODO Refactor onSubmit outside of render

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
        <Mutation mutation={CREATE_DEVICE_MUTATION} variables={this.state}>
          {(createDevice, { loading, error }) => (
            <form
              className="add-device-box__form"
              onSubmit={async event => {
                event.preventDefault();

                const res = await createDevice();

                // TODO replace with device list update
                Router.push("/");
              }}
            >
              <div className="add-device-box__device-name">
                <input
                  type="text"
                  name="deviceName"
                  placeholder="Device Name"
                  required
                  value={this.state.deviceName}
                  onChange={this.onChange}
                />
              </div>
              <div className="add-device-box__device-id">
                <input
                  type="text"
                  name="deviceId"
                  placeholder="Device ID"
                  required
                  value={this.state.deviceId}
                  onChange={this.onChange}
                />
                <Error className="add-device-box__error" error={error} />
              </div>
              <div className="add-device-box__submit">
                <input
                  className="add-device-box__submit-button"
                  type="submit"
                  value="Add Device  >"
                />
              </div>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default addDevice;
export { CREATE_DEVICE_MUTATION };
