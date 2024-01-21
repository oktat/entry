const Router = require('express');
const router = Router();
 
const GroupController = require('../controllers/groupcontroller')
const StudentController = require('../controllers/studentcontroller')
const EntryController = require('../controllers/entrycontroller')
 
router.get('/groups', GroupController.index)
router.post('/groups', GroupController.store)
router.put('/groups/:id', GroupController.update)
router.delete('/groups/:id', GroupController.destroy)

router.get('/students', StudentController.index)
router.post('/students', StudentController.store)
router.put('/students/:id', StudentController.update)
router.delete('/students/:id', StudentController.destroy)

router.get('/entries', EntryController.index)
router.post('/entries', EntryController.store)
router.put('/entries/:id', EntryController.update)
router.delete('/entries/:id', EntryController.destroy)
 
module.exports = router