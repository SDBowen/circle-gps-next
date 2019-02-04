import Link from "next/link";

import Devices from "../components/devices/Devices";
import AddDevice from "../components/addDevice/AddDevice";

const Settings = props => (
  <div className="section-settings">
    <AddDevice />
    <Devices />
  </div>
);

export default Settings;
