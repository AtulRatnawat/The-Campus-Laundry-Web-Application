const connectToMongo =  require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();


const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'));
// app.use('/api', require('./routes/auth'));
app.use('/api/order', require('./routes/order'));


app.get('/', (req,res) => 
    res.send('Hello Customer!')
),

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})