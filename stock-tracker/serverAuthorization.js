const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var users = [
  {
    name: "",
    password: ""
  },
  {
     name: "",
     password: ""
  }
]
// app.use(bodyParser.json());
// app.use (bodyParser.urlencoded({
//   extended: true
// }));

// app.use(express.static('./'));

app.get('/', (req, res)=> {
  res.sendFile('indexAuthorization.html');
});

app.post('/login', (req, res)=>{
  var message;
  for(var user of users){
    message="Wrong Name";
  }else{
    if(user.password !=req.body.password){
      message="Wrong Passord";
      break;
    } else{
      message="Login Successful";
      break;
    }
  }
  res.send(message);
});

app.post('/getusers', (req, res)=>{
  var user_list=[]
  users.forEach((user)=>{
    user_list.push({"name": user.name});
  })
  res.send(JSON.stringify({users: user_list}));
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});
