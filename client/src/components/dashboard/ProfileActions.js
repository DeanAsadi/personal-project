import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div>
      <ul className="nav nav-pills nav-stacked">
        <li className="active">
          <a>
            <Link to="/edit-profile" className="btn btn-dark">
              Edit Profile
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/add-experience" className="btn btn-dark">
              Employment Hisory
            </Link>
          </a>
        </li>
        <li>
          <a />
        </li>
      </ul>
    </div>
  );
};

export default ProfileActions;
