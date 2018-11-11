// const fs = require('fs')
const express = require('express');
// const bodyParser = require('body-parser')
const dinosaurs = require('./data/dinosaurs')
// const cors = require('cors')


const port = 8001

const app = express()

// app.use(bodyParser.json())
// app.use(cors())

app.get('/dinosaurs', (req, res) => {
    res.json(dinosaurs)

}
);

app.listen(port, () => console.log(`Listening on port ${port}`));