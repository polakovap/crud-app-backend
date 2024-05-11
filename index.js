const express = require('express')
const mongoose = require('mongoose');
const User = require('./models/user.model.js')
const userRoute = require("./routes/user.route.js")
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/users", userRoute);

app.get('/', (rew, res) => {
    res.send("Hello from Node API Server");
});

//connection to MongoDB
mongoose.connect('mongodb+srv://admin:R64uXNObnrzHpmUI@wordnestdb.lyxsuqb.mongodb.net/Users-API?retryWrites=true&w=majority')
  .then(() => { 
    console.log('Connected!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch(() => {
    console.log('Connection failed');
});