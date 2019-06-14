var express = require("express");
var router  = express.Router({mergeParams: true});
const firebase = require('./firebase');



router.get('/', (req,res) =>{
    console.log("get response is running...");
    // var leadsRef = firebase.database().ref('request_records');


    var refFire = firebase.database().ref("request_records");
    var emgReport= [];
    var emgEU= [];
    var emgPolice= [];
    var emgAmbulance= [];
    var emgfire= [];
    refFire.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var rows = childSnapshot.val();
            for (var i in rows)
            {
                if (rows[i].category == "emgReport" ) emgReport.push(rows[i]);
                if (rows[i].category == "emgEU" )emgEU.push(rows[i]); 
                if (rows[i].category == "emgPolice" ) emgPolice.push(rows[i]);
                if (rows[i].category == "emgAmbulance" ) emgAmbulance.push(rows[i]);
                if (rows[i].category == "emgfire" )emgfire.push(rows[i]);
            }
          
          
        });       
        
        
        
        console.log(emgReport);
        res.render('emergency/responseEmg',
        {
            emgReport:emgReport,
            emgEU:emgEU,
            emgPolice:emgPolice,
            emgAmbulance:emgAmbulance,
            emgfire:emgfire
        });
       
    });
    


    
})



router.get('/abc', (req,res) =>{
    console.log("get222 response is running...");
    

        var drinks = [
            { name: 'Bloody Mary', drunkness: 3 },
            { name: 'Martini', drunkness: 5 },
            { name: 'Scotch', drunkness: 10 }
        ];
        
        res.render('emergency/responseEmg',
        {
            drinks: drinks
        });

})


router.post('/', (req,res) =>{
    console.log("get response is running...");
    res.render('emergency/responseEmg',
    {
        viewTitle: "Request emergency"
    });
})


// app.get('/', function(req, res){ 
//     res.render('index',{user: "Great User",title:"homepage"});
// });


module.exports = router;