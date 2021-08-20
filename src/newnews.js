
const express = require('express')
const request = require('request')
const NewsAPI = require('newsapi')
const NewNews= new NewsAPI('https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=76c55f32571e4ea686e8253840003832');

const NewNews = (callback) => {
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback(undefined)
        } else if (response.body.title) {
            callback(undefined)
        } else if (response.body.urlToImage) {
            callback(undefined)
        } else {
            let NewNews = response.body.articales.title         //= this.title,
            let NewNews = response.body.articales.urlToImage    //= this.urlToImage,
            let NewNews = response.body.articales.description   //= this.description
            callback(undefined)
        }

    })
}

module.exports = NewNews