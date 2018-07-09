const router = require('express').Router();
const jobsController = require('../../controllers/jobsController');
const chartController = require('../../controllers/chartController');
const authJobs = require('../../services/authJobs')

//TODO update with authJobs.
// Matching with "/api/jobs/search/?"
router.route('/search/?')
    .get(authJobs)

// Matching with "/api/jobs/saved"
router.route('/saved')
  .get(jobsController.findAll)
  .post(jobsController.create)

// Matching with "/api/jobs/saved/:id"
// For retrieving/deleting/updating info on 1 job
router.route('/saved/:id')
  .get(jobsController.findOne)
  .delete(jobsController.delete)
  .put(jobsController.update)

// Matching with "/api/jobs/chart/all"
router.route('/chart/all')
  .get(chartController.findAll)

router.route('/chart/user')
  .get(chartController.findUser)

module.exports = router;

