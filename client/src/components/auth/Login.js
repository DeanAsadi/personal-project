import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <section className="hero ">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 col-sm-8 mx-auto">
              <div className="card border-none bg-dark">
                <div className="card-body">
                  <div className="mt-2">
                    <img
                      src="https://image.freepik.com/icones-gratis/compras-on-line-de-apoio_318-60118.jpg"
                      alt="LZ"
                      className="brand-logo mx-auto d-block img-fluid rounded-circle"
                    />
                  </div>

                  <h1 className=" text-center ">Log In</h1>
                  <div className="mt-4">
                    <form onSubmit={this.onSubmit}>
                      <TextFieldGroup
                        placeholder="Email Address"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                      />

                      <TextFieldGroup
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
                      />
                      <input
                        type="submit"
                        className="btn btn-danger btn-block"
                      />

                      <label className="custom-control custom-checkbox mt-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-indicator" />
                      </label>
                    </form>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
        <span className="copyRight">
          Copyright &copy; {new Date().getFullYear()} LinkZone
        </span>
      </section>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
