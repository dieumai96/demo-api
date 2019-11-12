const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 3000;

let listUser = [
    { id: 1, name: 'Vu THuy id la 1', class: 'cn06', age: 20 },
    { id: 2, name: 'Vu dawdaw 1', class: 'cn06', age: 20 },
    { id: 3, name: 'Vu THuy 2', class: 'cn06', age: 20 },
    { id: 4, name: 'Vu THuy 3', class: 'cn06', age: 20 },
    { id: 5, name: 'Vu THuy 4', class: 'cn06', age: 20 },
]
// /get-user?name=tom&age=55 

app.get('/get-all-user', (req, res) => {
    res.json({
        msg: 'Hello world',
        data: listUser,
        status_code: 200
    })
})

app.get('/get-user', (req, res) => {
    console.log(req.query);
    let name = req.query.name;
    let findUser = listUser.filter(user => user.name.indexOf(name) !== -1);
    res.json({
        msg: 'Hello world',
        data: findUser,
        status_code: 200
    })
})

app.post('/add-user', (req, res) => {
    let data = req.body;
    listUser = [...listUser, data];
    res.json({
        status_code: 200,
        data: listUser,
        msg: 'Them user thanh cong'
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
})