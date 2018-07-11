import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Container, Col, Row } from '../../components/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';

import { connect } from 'react-redux';
import { editJob, resetViewJobs, getAllSavedJobs, updateViewJobs } from './actions';

const cardStyles = {
  width: '250px',
  minHeight: '250px',
}

const cardHeadingStyle = {
  color: '#5869A7'
}


class ViewJobs extends Component {

  componentWillMount() {
    this.props.getAllSavedJobs();
  }

  render() {
    if (this.props.viewJobs.edit) {
      return <Redirect to='/updateJob' />
    };
    return (
      <React.Fragment>
      <Container className="py-5 pb-4">
      <Row className="justify-content-center text-center">
      <Col size="12 md-12 lg-10">
      <Jump>
      <img width="60%" src="/imgs/icons/houses.svg" alt="houses" />
      </Jump>
      </Col>
      </Row>
        <Row className="justify-content-center">
          <Col size="12 md-12 lg-5">
            <h1 className="text-center montserrat font-weight-bold">Your Tracked Jobs</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
            {this.props.viewJobs.data.map((job, i) => (
        <Zoom key={`viewjob-${i}`}>
        <Card 
        className="my-2 mx-2" 
        style={cardStyles} 
        >
            <CardContent>
                <Typography className="pt-2" color="textSecondary">
                {job.company_name}
                </Typography>
                <Typography variant="headline" component="h2" style={cardHeadingStyle}>
                {job.title}
                </Typography>
                <Typography color="textSecondary">
                {job.post_date}
                </Typography>
                <Typography component="p">
                {job.location}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={() => this.props.editJob(this.props.viewJobs.data[i])} data-id={job._id}>
                <i className="fas fa-pen-square"></i> &nbsp; Edit
                </Button>
            </CardActions>
        </Card>
        </Zoom>
            ))}
        </Row>
      </Container>
      </React.Fragment>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    viewJobs: state.viewJobs,
    updateJob: state.updateJob
  }
};

const mapActionsToProps = (dispatch, props) => ({
  resetViewJobs,
  updateViewJobs,
  getAllSavedJobs,
  editJob
})

export default connect(mapStateToProps, mapActionsToProps())(ViewJobs);
