const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const NBA = require("nba");
// const curry = NBA.findPlayer('Stephen Curry');
// console.log(curry);

const app = express();
const PORT = process.env.PORT || 8888

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var allowCrossDomain = function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
// intercept OPTIONS method
if ('OPTIONS' == req.method) {
res.sendStatus(200);
} else {
next();
}
};

// NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(console.log);
app.use(allowCrossDomain);

var db

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://basketball:saleh123@ds143070.mlab.com:43070/basketball-project', (err, database) => {
    if (err) {
        return err
    }
    db = database
    app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`)
    })
})

app.all('/api/form', (req, res) => {
    console.log("coming from user: " + req.body.username)

    db.collection('basketball-fun-now').save(req.body, (err, result) => {
        if (err) 
            return console.log(err)
    })

})

app.all('/', (req, res) =>{
    db.collection('basketball-fun-now').find().toArray(function(err, results) {
        console.log(results)
      res.send({users: results})
    })
})


// app.all('/', (req, res) => {
//     res.send('Hello');
// })

