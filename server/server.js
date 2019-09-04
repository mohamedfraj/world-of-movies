const express = require('express');
const bodyparser = require('body-parser');
const { MongoClient, ObjectID } = require('mongodb');
const assert = require('assert')

const app = express()

app.use(bodyparser.json())


const mongo_url = "mongodb://localhost:27017"
const dataBase = "finalProject"



MongoClient.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    assert.equal(err, null, 'data base connexion failed')

    const db = client.db(dataBase)

    // Add Movie
    app.post('/add_movie', (req, res) => {
        let movieToAdd = req.body
        db.collection('movies').insertOne(movieToAdd, (err, data) => {
            if (err) res.send('Cannot add movie')
            else res.send(data)
        })
    })
    // Add Serie
    app.post('/add_serie', (req, res) => {
        let serieToAdd = req.body
        db.collection('series').insertOne(serieToAdd, (err, data) => {
            if (err) res.send('Cannot add serie')
            else res.send(data)
        })
    })
    // get ALL Movies
    app.get('/movies', (req, res) => {
        db.collection('movies').find().toArray((err, data) => {
            if (err) res.send('cant fetch movies')
            else res.send(data)
        })
    })
    // get ALL Series
    app.get('/series', (req, res) => {
        db.collection('series').find().toArray((err, data) => {
            if (err) res.send('cant fetch series')
            else res.send(data)
        })
    })
    // Edit Movie
    app.put('/edit_movie/:id', (req, res) => {
        let movieIdToEdit = ObjectID(req.params.id)
        let movieUpDated = req.body
        db.collection('movies').findOneAndUpdate({ _id: movieIdToEdit }, { $set: { ...movieUpDated } }, (err, data) => {
            if (err) res.send('Cannot edit movie')
            else res.send(data)
        })
    })
    // Edit Serie
    app.put('/edit_serie/:id', (req, res) => {
        let serieIdToEdit = ObjectID(req.params.id)
        let serieUpDated = req.body
        db.collection('series').findOneAndUpdate({ _id: serieIdToEdit }, { $set: { ...serieUpDated } }, (err, data) => {
            if (err) res.send('Cannot edit serie')
            else res.send(data)
        })
    })

    // delete Movie
    app.delete('/delete_movie/:id', (req, res) => {
        let movieToDelete = ObjectID(req.params.id)
        db.collection('movies').findOneAndDelete({ _id: movieToDelete }, (err, data) => {
            if (err) res.send('cannot remove movie')
            else res.send(data)
        })
    })

    // delete serie
    app.delete('/delete_serie/:id', (req, res) => {
        let serieToDelete = ObjectID(req.params.id)
        db.collection('series').findOneAndDelete({ _id: serieToDelete }, (err, data) => {
            if (err) res.send('cannot remove serie')
            else res.send(data)
        })
    })

})


app.listen(3001, (err) => {
    if (err) console.log('server is not running')
    else console.log('server is running on port 3001')
})