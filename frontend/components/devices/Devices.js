import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Device from "../device/Device";

import "./Devices.scss";

const ALL_DEVICE_QUERY = gql`
  query ALL_DEVICE_QUERY {
    devices {
      id
      deviceName
      deviceId
    }
  }
`;

class Devices extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_DEVICE_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div className="device-listing">
                {data.devices.map(device => (
                  <Device device={device} key={device.id} />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Devices;
export { ALL_DEVICE_QUERY };
