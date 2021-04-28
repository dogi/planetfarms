const express = require('express')
const router = express.Router()
const {multipleUpload}=require('../helpers/filehelpers')

const { getResources, addResource, getResourcesById, deleteResources, updateResources, searchResourcesTitle } = require('../controllers/resourceController.js')


router.route('/').get(getResources)
router.route('/add').post(multipleUpload, addResource)
router.route('/search').get(searchResourcesTitle)
router
  .route('/:id')
  .get(getResourcesById)
  .delete(deleteResources)
  .put(updateResources)

module.exports = router
