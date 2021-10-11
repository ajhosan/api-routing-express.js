const posts = require('../data/login.json');

const getByUsername = (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;

    let password = req.body.password;
  
    const post = posts.find((value) => value.username === username)

    if(password === post.password){
      if(post != undefined){
        return res.status(200).json({
          code:200,
          message: 'Akun Berhasil Login',
          data: post || null,
          error: null
      })
      }else{
        return res.status(404).json({
          code:404,
          message: 'Akun Not Found',
          data: null,
          error: null
      })
      }
    }else{
      return res.status(500).json({
        code:500,
        message: 'Password tidak sama',
        data: null,
        error: null
    })
    }
  
    
    
  }

module.exports = {
    getByUsername
}