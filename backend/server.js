const express= require('express');
const cors = require('cors')
const mysql = require('mysql')
const app= express();
const https = require('https');
const axios = require('axios');
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
 "host": "localhost",
 "user": "root",
 "password": "",
 "database": "fullstack"
} )
app.get('/',(req,res)=>{  
   
   const sql="SELECT * FROM keeperapp"
   db.query(sql,(err,data)=>{
    if (err) console.log(err)
    res.json(data)
   })
   
})

app.get('/api', (req, res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=buea&appid=7ff606d6ad8c2c5b6b0aea46c85b2a00&units=metric"
    axios.get(url)
    .then(response => {
        const weatherData = response.data
        const obj = {temp:weatherData.main.temp, weather:weatherData.weather[0].main, town:weatherData.name , icon:weatherData.weather[0].icon}
        console.log(obj[0])
        res.json({weather: obj})
    })
    .catch(err=>{
        console.error("error "+ err)
        res.status(500).json({ error: "Error fetching weather data" })
    })  
})
app.post('/create',(req, res)=>{
    const sql="INSERT INTO KeeperApp (`title`,`content`) VALUES (?)"
    const values = [req.body.title , req.body.content]
    db.query(sql,[values],(err,data)=>{
        if (err) console.log(err)
    })
})
app.delete('/deletenote/:id',(req, res)=>{
    const sql="DELETE FROM keeperapp WHERE ID =?"
    const id = req.params.id
    db.query(sql,[id],(err,data)=>{if (err) console.log(err)})
})
app.get('/update/:id',(req, res)=>{
    const sql="SELECT * FROM KeeperApp WHERE ID =?"
    const id = req.params.id
    db.query(sql,[id],(err,data)=>{
        if (err) console.log(err)
        return res.json(data)
    })
 
})
app.put('/update/:id', (req, res)=>{
    if (!req.body.title || !req.body.content) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
    console.log(req.body.title, req.body.content,req.params.id)
    const sql="UPDATE KeeperApp SET `title` =?, `content`=? WHERE ID = ?"
    const values = [req.body.title, req.body.content]
    const id = req.params.id
    db.query(sql,[...values, id],(err,data)=>{
        if (err) console.log(err)
        return res.json(data)
    })

})


app.listen(2010,()=>{
    console.log('listening on http://localhost:2010');
})

