const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003 



const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'hypatia') // register the hypatia view engine


/*app.get('/', function (req, res) {
    res.send('<h1>Hairdo Directory</h1>')
})

app.get('/city', function (req, res) {
    res.send('<h1>Choose Your City</h1>')
})*/

app.get('/', (req, res) => {
    res.render('template', { title: 'Hairdo Directory', message: 'Hairdo Directory', content: '' })
  })
  
  app.get('/city', (req, res) => {
    res.render('template', { title: 'Choose Your City', message: 'Choose Your City', content: '' })
  })
  
  app.get('/stylist', (req, res) => {
    res.render('template', { title: 'Stylist', message: 'Stylist', content: '' })
  })











app.listen(port, ()  => {
    console.log('Listening on port 3000')
})