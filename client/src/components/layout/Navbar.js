import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="nounderline">
        <Link className="p" to="/feed">
          Posts
        </Link>

        <Link className="p" to="/dashboard">
          Dashboard
        </Link>

        <a href="" onClick={this.onLogoutClick.bind(this)} className="p">
          <img
            className=""
            src={user.avatar}
            alt={user.name}
            style={{ width: "25px", marginRight: "5px" }}
            title="You must have a Gravatar connected to your email to display an image"
          />
          Logout
        </a>
      </div>
    );

    const guestLinks = (
      <div className="nounderline">
        <Link to="/login">
          <h7> Login</h7>
        </Link>
        <Link className="p3 " to="/register">
          <h7>Sign Up</h7>
        </Link>
      </div>
    );

    return (
      <div className="pos-f-t nounderline ">
        <nav className="navbar navbar-inverse bg-dark ">
          <div className="p2 ">
            <Link className=" " to="/">
              <h7>LinkZone</h7>
            </Link>
            <Link className="p3" to="/profiles">
              <h7>Profiles</h7>
            </Link>
          </div>

          <span>{isAuthenticated ? authLinks : guestLinks}</span>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
