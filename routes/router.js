const router = require('express').Router(); 

const { getUser, createUser, updateUser, deleteUser } = require('../controllers/userController')
 

router.get('/getUser', getUser);  
router.get('/createUser', createUser);  
router.get('/updateUser', updateUser);  
router.get('/deleteUser', deleteUser);  


module.exports = router;