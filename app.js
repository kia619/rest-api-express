import 'dotenv/config';
import express from 'express';
import uuid from 'uuid-random';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
// Set up the express app
const app = express();

let users = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Actual API calls for Users
app.post('/user', (req, res) => {

    const id = uuid();

    var errors=[];
    if (!req.body.first_name){
      errors.push("First name required");
    }
    if (!req.body.last_name){
      errors.push("Last name required");
    }
    if (!req.body.email){
      errors.push("Email required");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        industry: req.body.industry,
        id : id
    };

    users.push(user);

    res.status(201).send({
      success: 'true',
      userid: id
    });
});

app.get('/user', (req, res) => {
    res.status(200).json(users);
});

app.get('/user/:id', (req, res) => {
    // reading isbn from the URL
    const id = req.params.id;

    // searching users for the isbn
    for (let user of users) {
        if (user.id === id) {
            res.status(200).json(user);
            return;
        }
    }

    // sending 404 when not found something is a good practice
    res.status(404).send('User not found');
});

//Dummy API calls for Users
app.get('/api/v1/user/id', (req, res) => {
  res.status(200).send({
    success: 'true',
    user_id: uuid()
  })
});

app.get('/api/v1/user/data', (req, res) => {
  res.status(200).send({
    success: 'true',
    name: 'Kianoush',
    lastname: 'knesvaderani',
    cmpany: 'TG'
  })
});

app.post('/api/v1/user', (req, res) => {
  res.status(201).send({
    success: 'true'
  })
});

//Web API calls for Users
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/user-list.html'));
});

app.use(express.static(__dirname + '/client'));

app.use(express.urlencoded({ extended: false }))

app.use((req, res)=> {
    res.status(404);
});

app.listen(process.env.PORT, () =>
  console.log(`Users app listening on port ${process.env.PORT}!`),
);
