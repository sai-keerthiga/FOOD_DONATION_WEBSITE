var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('food_app'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://0.0.0.0:27017/food_donation');

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.fullName;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;

    var data = {
        "_id":email,
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password
    }

    db.collection('food_donation').findOne({ _id: email }, (err, doc) => {
        if (err) throw err;

        // Check if the document was found
        if (doc) {
          console.log(`Document with ID ${email} found:`, doc);
          // alert("Error");
        //   res.status(400).send({ message: 'User already exists!' });
        // alert('Sign up successful!');
        //   app.get('/alert', (req, res) => {
        //     console.log('Alert')
        //     res.send({ message: 'Hello, this is an alert!' });
        // });

        } else {
          console.log(`Document with ID ${email} not found.`);
          db.collection('food_donation').insertOne(data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log("Record Inserted Successfully");
            return res.redirect('signup_success.html')
        });
        }

        // Close the connection
        // client.close();

      });

    // db.collection('users').insertOne(data,(err,collection)=>{
    //     // if(err){
    //     //     throw err;
    //     // }
    //     console.log("Record Inserted Successfully");
    // });



})

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

app.post("/sign_in",(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;

    var data = {
        "email" : email,
        "password" : password
    }

    console.log(data)
    user = db.collection('food_donation').findOne({ _id: email }, (err, doc) => {
      console.log(user);
        if (err) throw err;
        // Check if the document was found
        if (doc) {
          console.log(user);
          console.log(`Document with ID ${email} found:`, doc);
          return res.redirect('signup_success.html')
        } else {
          console.log(`Document with ID ${email} not found.`);
          alert("Error");

          
        }
        // Close the connection
        // client.close();

      });

    // db.collection('users').insertOne(data,(err,collection)=>{
    //     // if(err){
    //     //     throw err;
    //     // }
    //     console.log("Record Inserted Successfully");
    // });

   

})

// app.post("/login", (req, res) => {
//     const { username, password } = req.body;


// app.get("/",(req,res)=>{
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     })
//     return res.redirect('index.html');
// }).listen(3000);

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('/index.html');
}).listen(3000);

app.get('/login', (req, res) => {
    // Render the login page
    return res.redirect('./registration.html');
  });
  



  app.post("/sign_up",(req,res)=>{
    var name = req.body.fullName;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;

    var data = {
        "_id":email,
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password
    }

    db.collection('food_donation').findOne({ _id: email }, (err, doc) => {
        if (err) throw err;

        // Check if the document was found
        if (doc) {
          console.log(`Document with ID ${email} found:`, doc);
          // alert("Error");
        //   res.status(400).send({ message: 'User already exists!' });
        // alert('Sign up successful!');
        //   app.get('/alert', (req, res) => {
        //     console.log('Alert')
        //     res.send({ message: 'Hello, this is an alert!' });
        // });

        } else {
          console.log(`Document with ID ${email} not found.`);
          db.collection('food_donation').insertOne(data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log("Record Inserted Successfully");
            return res.redirect('signup_success.html')
        });
        }

        // Close the connection
        // client.close();

      });

    // db.collection('users').insertOne(data,(err,collection)=>{
    //     // if(err){
    //     //     throw err;
    //     // }
    //     console.log("Record Inserted Successfully");
    // });



})


console.log("Listening on PORT 3000");