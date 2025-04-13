import express from "express"

const app = express();

const port = 3000;

app.post('/order', (req, res) => {
    console.log('Received webhook:', req.body.toString())
    res.sendStatus(200)
  })

app.listen(port);