// console.log('test');
// const { response } = require('express')
const express = require('express')
const request = require('request')
const app = express()
const port = 3000
const hbs = require('hbs')
const path = require('path')
// const NewsAPI = require('newsapi')
// const newsnews = new NewsAPI('https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=76c55f32571e4ea686e8253840003832');

console.log(path.join(__dirname,'../src'));
const srcDirectory = path.join((__dirname,'../src'))
app.use(express.static(srcDirectory))
app.set('view engine', 'hbs')

// newsapi.everything({
//     response,
//     body,
//     articles,
//     description
// })

const newnews = require('./src/newnews')

app.get('/', (req,res)=>{
    if(!req.query.body.articles){
        return res.send({error: 'errror'})
    }
    newnews(req.send.body,(error, data)=>{
        if(error){
            return res.send({ erorr: error })
        }
    } )
})


app.get('/',(req,res)=>{
    res.render('index',{
        // title:'title',
        // description:'description',
        // img:'urlToImage'
        title: 'new'
    })
})





// const url = 'https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=76c55f32571e4ea686e8253840003832'
// request({ url, json: true }, (error, response) => {
//     // console.log(response.body);
//     // const data = JSON.parse(response.body)
//     // console.log(data);
//     // console.log(response.body.articles[3].description);
// })

app.listen(port,()=>{
    console.log('Server Is Running');
})