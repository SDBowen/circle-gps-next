import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_DEVICE_QUERY } from './devices/Devices';

const DELETE_DEVICE_MUTATION = gql`
  mutation DELETE_DEVICE_MUTATION($id: ID!) {
    deleteDevice(id: $id) {
      id
    }
  }
`;

class DeleteDevice extends Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_DEVICE_QUERY });

    data.devices = data.devices.filter(device => device.id !== payload.data.deleteDevice.id);

    cache.writeQuery({ query: ALL_DEVICE_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_DEVICE_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteDevice, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this device?')) {
                deleteDevice();
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteDevice;
