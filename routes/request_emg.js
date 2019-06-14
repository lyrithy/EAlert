var express = require("express");
var router  = express.Router({mergeParams: true});
const firebase = require('./firebase');
const uuidv1 = require('uuid/v4');



router.get('/', (req,res) =>{
    console.log("get running...");
    res.render('emergency/requestEmg',
    {
        viewTitle: "Request emergency"
    });
})


router.post('/', (req,res) =>{
 
    var postsRef = firebase.database().ref('request_records/'+req.body.btnReport + '/');
   
    var newPostRef = postsRef.push();
    newPostRef.set({
        req_id: uuidv1(),
        request_name : req.body.name,
        phone : req.body.phone,
        summary : req.body.summary,
        email: req.body.email,
        category: req.body.btnReport,              
        latitude: req.body.latitude, 
        longitude: req.body.longitude 
    });

    console.log(req.body);
    res.render('emergency/requestSubmit',
    {
        viewTitle: "Post request emergency"
    });
})


module.exports = router;