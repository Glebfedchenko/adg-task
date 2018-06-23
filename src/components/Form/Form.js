import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { addPerson } from "../../redux/actions/people";
import { connect } from "react-redux";

class Form extends Component {
  state = {
    formdata: {
      first_name: "",
      last_name: "",
      dob: "",
      location: ""
    }
  };

  handleInput = (e, name) => {
    const newFormdata = {
      ...this.state.formdata
    };
    newFormdata[name] = e.target.value;
    this.setState({ formdata: newFormdata });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addPerson({ ...this.state.formdata });
    this.setState({
      formdata: {
        first_name: "",
        last_name: "",
        dob: "",
        location: ""
      }
    });
  };
  render() {
    return (
      <Fragment>
        <h1>Form</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={this.state.formdata.first_name}
              onChange={e => this.handleInput(e, "first_name")}
            />
          </div>
          <div className="form-group">
            <label>Surname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter surname"
              value={this.state.formdata.last_name}
              onChange={e => this.handleInput(e, "last_name")}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              min="1979-12-31"
              max="3000-12-31"
              className="form-control"
              placeholder="mm/dd/yyyy"
              value={this.state.formdata.dob}
              onChange={e => this.handleInput(e, "dob")}
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              value={this.state.formdata.location}
              onChange={e => this.handleInput(e, "location")}
            />
          </div>
          <button
            disabled={
              !this.state.formdata.dob ||
              !this.state.formdata.first_name ||
              !this.state.formdata.last_name ||
              !this.state.formdata.location
            }
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}
Form.propTypes = {
  addPerson: PropTypes.func.isRequired
};
export default connect(
  null,
  dispatch => ({ addPerson: data => dispatch(addPerson(data)) })
)(Form);
