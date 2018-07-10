import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import UpdateJobForm from '../../components/UpdateJobForm/UpdateJobForm';
import { Container, Col, Row } from '../../components/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { executeDeleteJob, executeUpdateJob, resetUpdateJob, selectUpdateJob } from './actions';

class UpdateJob extends Component {
  updateJobValues = values => {
    const newJob = {
      ...this.props.updateJob.job,
      ...values
    }
    this.props.executeUpdateJob(newJob);
  }

  executeDeleteJob = () => {
    this.props.executeDeleteJob(this.props.updateJob.job);
  }

  resetUpdateJob = () => this.props.resetUpdateJob();

  componentWillMount() {
    if (this.props.viewJobs.edit)
      this.props.selectUpdateJob(this.props.viewJobs.edit)

  }

  render() {
    if (this.props.updateJob.status || !this.props.viewJobs.edit) {
      this.props.resetViewJobs();
      return <Redirect to='/viewjobs' />
    };

    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Update this job</h3>
          </Col>
        </Row>
        <Row>
          <Col />
          <Col size="12 md-8 lg-6">
            <UpdateJobForm 
              onSubmit={this.updateJobValues} 
              initialValues={this.props.updateJob.job} 
              deleteJob={this.executeDeleteJob}
            />
          </Col>
          <Col />
        </Row>
      </Container>
    );
  };
};

const mapStateToProps = (state,props) => {
  return { 
    updateJob: state.updateJob,
    viewJobs: state.viewJobs
  };
};

const mapActionsToProps = (dispatch,props) => {
  return bindActionCreators({
    executeDeleteJob,
    executeUpdateJob,
    resetUpdateJob,
    selectUpdateJob
  }, dispatch);
};

export default connect(mapStateToProps,mapActionsToProps)(UpdateJob);
