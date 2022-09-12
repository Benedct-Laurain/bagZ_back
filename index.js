const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Youhou')
})

//Start Server
app.listen(4000, () => console.log("Server started on 4000, 😎"));