const express = require("express")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send('look mama i can code node now!! yey')
})

const users = [
    { id: 1, name: 'Sabana', email: "sabana@gmail.com", phone: "017888888" },
    { id: 2, name: 'sabnur', email: "sabmur@gmail.com", phone: "017888888" },
    { id: 3, name: 'purnima', email: "purnima@gmail.com", phone: "017888888" },
    { id: 4, name: 'popy', email: "popy@gmail.com", phone: "017888888" },
    { id: 5, name: 'mahi', email: "mahi@gmail.com", phone: "017888888" },
    { id: 6, name: 'mousumi', email: "mousumi@gmail.com", phone: "017888888" },
    { id: 7, name: 'bobita', email: "bobita@gmail.com", phone: "017888888" }
]

app.get("/users", (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    } 
    else {
        res.send(users)
    }

})

app.get("/users/:id", (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log("request", req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange']);
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('fazli flavour')
})

app.listen(port, () => {
    console.log("Listening to port", port);
})