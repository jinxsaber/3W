const express = require('express');

const router = express.Router();

const {getUser, postUser, updateUser} = require('../controller/userControl')

router.get('/',getUser);
router.post('/',postUser);
router.put('/:id',updateUser);


module.exports = router;