import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPerson } from '../../redux/actions/people';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {
        first_name: '',
        last_name: '',
        dob: '',
        location: '',
      },
    };
  }


  onSubmit = (e) => {
    e.preventDefault();// eslint-disable-next-line
    this.props.addPerson({ ...this.state.formdata });
    this.setState({
      formdata: {
        first_name: '',
        last_name: '',
        dob: '',
        location: '',
      },
    });
  };

  handleInput = (e, name) => {
    const newFormdata = {// eslint-disable-next-line
      ...this.state.formdata,
    };
    newFormdata[name] = e.target.value;
    this.setState({ formdata: newFormdata });
  };

  render() {
    const { formdata } = this.state;
    return (
      <Fragment>
        <h1>
          Form
        </h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={formdata.first_name}
                onChange={e => this.handleInput(e, 'first_name')}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="surname">
              Surname
              <input
                id="surname"
                type="text"
                className="form-control"
                placeholder="Enter surname"
                value={formdata.last_name}
                onChange={e => this.handleInput(e, 'last_name')}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="date">
              Date
              <input
                id="date"
                type="date"
                min="1979-12-31"
                max="3000-12-31"
                className="form-control"
                placeholder="mm/dd/yyyy"
                value={formdata.dob}
                onChange={e => this.handleInput(e, 'dob')}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="loctation">
              Location
              <input
                id="location"
                type="text"
                className="form-control"
                placeholder="Enter location"
                value={formdata.location}
                onChange={e => this.handleInput(e, 'location')}
              />
            </label>
          </div>
          <button
            disabled={
              !formdata.dob
              || !formdata.first_name
              || !formdata.last_name
              || !formdata.location
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
  addPerson: PropTypes.func.isRequired,
};
export default connect(
  null,
  dispatch => ({ addPerson: data => dispatch(addPerson(data)) }),
)(Form);
