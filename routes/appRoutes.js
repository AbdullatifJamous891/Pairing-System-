const express = require('express');
const router = express.Router();
const Students = require('../models/studentsSchema')

router.post('/create', (req, res, next) => {
    var newStudent = new Students({
        name: req.body.name,
        level: req.body.level
    });
    newStudent.save( (err, student) =>{
        if(err){
            res.status(500).json({ errmsg: err});
        }else{
            res.status(200).json({ msg: student});
        }
    });
});

router.get('/read', (req, res, next) => {
    Students.find({}, (err, students) =>{
        if(err)
            res.status(500).json({errmsg: err})
        res.status(200).json({msg: students})    
    })
});

router.put('/update', (req, res, next) => {
    Students.findById(req.body.id, (err, student) =>{
        if(err)
            res.status(500).json({errmsg: err})
        student.name = req.body.name;
        student.level= req.body.level; 
        student.save((err, student) =>{
            if(err)
                res.status(500).json({errmsg: err})
            res.status(200).json({msg: student});    
        })   
    })
    
})
router.delete('/delete/:id', (req, res, next) => {
    Students.findOneAndRemove({_id: req.params.id }, (err, student)=>{
        if(err)
            res.status(500).json({errmsg: err});
        res.status(200).json({msg: student});    
    })
})

module.exports = router;