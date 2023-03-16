const express = require('express')
const { json } = require('stream/consumers')
const app = express()
const port = 3000
const home = require('./index.html')

app.get('/', (req, res)=>{
    // res.send('Hello World')
    res.send('<iframe width="560" height="315" src="https://www.youtube.com/embed/KqPDmean_pQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
})

app.get('/data',(res,req)=>{
    res.json()
})





app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})