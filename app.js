const express = require('express')
const app = express()
const port = 3001
const data = require('./database/data.json')
const path = require('path')
const fs = require ('fs')
// const { json } = require('stream/consumers')
const cors = require('cors')
const user = require('./routes/user')


app.use(cors())
app.use('/user', user)






app.get('/data', (req,res)=> {
    res.json(data)
})

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})



app.use('/submit', (req,res)=>{
    //Collects data from http request using querry to extract from react
    var data = {
        firstName:req.query.firstName,
        lastName:req.query.lastName
    }
    //Turns data to JSON
    var user = JSON.stringify(data)
    //Writes to local storage
    fs.writeFile('./database/user.json', user, (err)=>{
        if(err){console.log('error file not created');}
        console.log('file created')
    })
    // Stay on same page where data is being submitted
    res.status(204).send()
    // res.redirect('/')

    //End Data Transmission
    res.end()

    // next()
});

app.listen(port, ()=>{
    console.log(`App running on port ${port} `)
})