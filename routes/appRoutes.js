const express = require('express');
const router = express.Router();

router.post('/create', (req, res, next) => {
    res.status(200).json({ msg: 'post request is working...'});
});
router.get('/read', (req, res, next) => {
    res.status(200).json({ msg: 'get request is working...'});
})
router.get('/update:id', (req, res, next) => {
    res.status(200).json({ msg: 'update request is working...'});
})
router.get('/delete:id', (req, res, next) => {
    res.status(200).json({ msg: 'delete request is working...'});
})

module.exports = router;