import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Error from '../ErrorMessage';
import './UpdateDevice.scss';

const SINGLE_DEVICE_QUERY = gql`
  query SINGLE_DEVICE_QUERY($id: ID!) {
    device(where: { id: $id }) {
      id
      deviceName
      deviceId
    }
  }
`;

const UPDATE_DEVICE_MUTATION = gql`
  mutation UPDATE_DEVICE_MUTATION($id: ID!, $deviceName: String, $deviceId: String) {
    updateDevice(id: $id, deviceName: $deviceName, deviceId: $deviceId) {
      id
      deviceId
      deviceName
    }
  }
`;

class updateDevice extends Component {
  state = {};

  // State is updated on user input
  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  updateDevice = async (event, updateDeviceMutation) => {
    event.preventDefault();

    const res = await updateDeviceMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
  };

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
        <Query query={SINGLE_DEVICE_QUERY} variables={{ id: this.props.id }}>
          {({ data, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (!data.device) return <p>No data found for ID {this.props.id}</p>;
            return (
              <Mutation mutation={UPDATE_DEVICE_MUTATION} variables={this.state}>
                {(updateDevice, { loading, error }) => (
                  <form
                    className="add-device-box__form"
                    onSubmit={event => {
                      this.updateDevice(event, updateDevice);
                    }}
                  >
                    <div className="add-device-box__device-name">
                      <input
                        type="text"
                        name="deviceName"
                        placeholder="Device Name"
                        required
                        defaultValue={data.device.deviceName}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="add-device-box__device-id">
                      <input
                        type="text"
                        name="deviceId"
                        placeholder="Device ID"
                        required
                        defaultValue={data.device.deviceId}
                        onChange={this.onChange}
                      />
                      <Error className="add-device-box__error" error={error} />
                    </div>
                    <div className="add-device-box__submit">
                      <button className="add-device-box__submit-button" type="submit">
                        Sav{loading ? 'ing' : 'e'} Changes
                      </button>
                    </div>
                  </form>
                )}
              </Mutation>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default updateDevice;
export { UPDATE_DEVICE_MUTATION };
