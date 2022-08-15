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

app.



app.listen(port, ()  => {
    console.log('Listening on port 3000')
})