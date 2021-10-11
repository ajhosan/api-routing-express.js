const express = require('express')
const app = express()
const fs = require('fs');
const port = 3000

var bodyParser = require('body-parser');

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));

// API File Path
let posts = require('./data/login.json')

// Controller Import
const { getAll } = require('./controllers/api-detail.js')
const { getByUsername } = require('./controllers/api-detail-by-username.js')


// view engine ejs
app.set('view engine', 'ejs')

app.get('/auth', function(req, res){
    res.render('auth.ejs');
  });

app.use('/', express.static('public/chapter-3'))

app.use('/chapter-4', express.static('public/chapter-4'))


// Api Read Data Login
app.get('/api/get', getAll)


// Api Read Data Detail by ID
app.post('/login', getByUsername);



// Api Post Data 
app.post('/api/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const nama     = req.body.nama;
  
  const searchUsername = posts.find((value) => value.username === username);

  if(searchUsername === undefined){
       const post = {
          username,
          password,
          nama
      }

      posts.push(post)
  
      fs.writeFileSync('./data/login.json', JSON.stringify(posts))
  
      return res.status(200).json({
          code:200,
          message: 'Success get all post',
          data: post,
          error: null
      })
  }else{
      return res.status(302).json({
          code:302,
          message: 'Username telah ditemukan, data tidak boleh sama',
          data: null,
          error: null
      })
  }

})

app.listen(port, ()=>{
    console.log(`Server hidup => http://localhost:${port}`)
});