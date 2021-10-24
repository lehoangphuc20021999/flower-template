const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const bodyParser = require('body-parser')

// Setting for Pugjs
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Livereload
var livereload = require('livereload');
var watchServer = livereload.createServer();

// Connect-livereload
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
watchServer.watch(path.join(__dirname, 'public'));

// This is reset pug
watchServer.server.once("connection", () => {
  setTimeout(() => {
    watchServer.refresh('/');
  }, 500);
});

app.get('/', (req, res) => {
  res.render('index', {
    name: 'PhucLe'
  })
})


////////////////////////////////////
app.get('/products', (req, res) => {
  res.render('products')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.get('/product', (req, res) => {
  res.render('product-details')
})

app.get('/cart', (req, res) => {
  res.render('cart')
})

app.get('/checkout', (req, res) => {
  res.render('checkout')
})

app.get('/done', (req, res) => {
  res.render('done')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})