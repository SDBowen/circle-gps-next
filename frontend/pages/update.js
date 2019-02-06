import UpdateDevice from '../components/updateDevice/UpdateDevice';

const Settings = ({ query }) => (
  <div className="section-settings">
    <UpdateDevice id={query.id} />
  </div>
);

export default Settings;
