import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <a
            class="btn btn-danger"
            onClick={this.onDeleteClick.bind(this, exp._id)}
          >
            <i class="fa fa-trash-o fa-lg" /> Delete
          </a>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Job History </h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Job Title</th>
              <th>From Date - To Date</th>
              <th />
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
