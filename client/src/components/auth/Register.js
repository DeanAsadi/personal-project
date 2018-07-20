import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-8 mx-auto">
              <div className="card border-none bg-dark">
                <div className="card-body">
                  <img
                    src="https://image.freepik.com/icones-gratis/adicionar-simbolo-usuario-da-interface-de_318-63521.jpg"
                    alt="LZ"
                    className="brand-logo mx-auto d-block img-fluid rounded-circle "
                  />
                  <div className="mt-2 text-center">
                    <h2>Create Your Account</h2>
                  </div>

                  <div className="mt-4">
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <TextFieldGroup
                          placeholder="Name"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChange}
                          error={errors.name}
                        />
                      </div>
                      <div className="form-group">
                        <TextFieldGroup
                          placeholder="Email"
                          name="email"
                          type="email"
                          value={this.state.email}
                          onChange={this.onChange}
                          error={errors.email}
                          info="Please use an email associated with gravatar to display you photo"
                        />
                      </div>
                      <div className="form-group">
                        <TextFieldGroup
                          placeholder="Password"
                          name="password"
                          type="password"
                          value={this.state.password}
                          onChange={this.onChange}
                          error={errors.password}
                        />
                      </div>
                      <div>
                        <TextFieldGroup
                          placeholder="Confirm Password"
                          name="password2"
                          type="password"
                          value={this.state.password2}
                          onChange={this.onChange}
                          error={errors.password2}
                        />
                      </div>
                      <input
                        type="submit"
                        className="btn btn-danger btn-block"
                      />
                    </form>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />

            <div className="col-sm-12 mt-5 footer" />
          </div>
        </div>
        <span className="copyRight">
          Copyright &copy; {new Date().getFullYear()} LinkZone
        </span>
      </section>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
