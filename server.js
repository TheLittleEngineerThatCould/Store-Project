const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003 
const city = require('./models/city.js')
const mongoose = require('mongoose')
const Stylist = require('./models/Stylist.js')
const methodOverride = require('method-override')


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/stylist')
})



app.get('/stylist', (req, res) => {
  Stylist.find({},(err, allStylist)=>{
    res.render('Index', {
      stylist: allStylist
    })
  })
});


app.get('/stylist/new', (req, res) => {
  res.render("New")
})

app.post('/stylist/', (req, res) => {
  Stylist.create(req.body, (err, createdStylist) => {
    res.redirect('/stylist')
  })
});

app.get('/stylist/:id', (req, res) => {
  Stylist.findById(req.params.id, (err, foundStylist) => {
    console.log(foundStylist)
    res.render('Show', {
      stylist: foundStylist
    })
  })
})

app.get('/stylist/:id/edit', (req, res) =>
{
    Stylist.findById(req.params.id, (error, foundStylist) => {
        if(!error) {
            res.render('Edit', {
                stylist: foundStylist
            })
        } else {
            res.send({
                message:errorMessage
            })
        }
    })
})

app.put('/stylist/:id', (req, res) => {
  Stylist.findByIdAndUpdate(req.params.id, req.body, {
      new: true
  }, (error, stylist) => {
      res.redirect(`/stylist/${req.params.id}`)
  })
})

app.delete('/stylist/:id', (req, res) => {
  console.log('we are deleting')
  Stylist.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect('/stylist')
  })
})



app.listen(port, ()  => {
    console.log('Listening on port 3000')
})