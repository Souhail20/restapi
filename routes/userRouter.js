var express = require('express');
var router = express.Router();
const users = require('../Model/User')
router.post('/users', (req,res)=>{
    const {name}= req.body
    users.create({name},err=>{
        err?res.send('create task failed'): res.send('added users suceess') ;
    })
})
router.get('/users',async(req, res)=>{
    try {
        const data =await users.find().exec()
        res.json({user:data}) 
    } catch(error){
       error? res.json({msg : 'error getting'}): res.json({msg :'succeded'}) 
    }
})
router.put('/users/:id', (req,res)=>{
    users.findByIdAndUpdate(req.params.id,req.body,err=>
        err?res.send('get users failed'): res.send('succeded'))
})
router.delete('/users/:id', (req,res)=>{
    users.findByIdAndRemove(req.params.id,err=>
        err?res.send('Remove users failed'): res.send('succeded'))
})
module.exports = router;