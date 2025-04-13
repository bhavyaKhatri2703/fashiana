import express from "express"
import bodyparser from "body-parser"


const app = express();
app.use(bodyparser.json())


const port = 3000;

app.post('/order', (req, res) => {
    console.log('Received webhook:', req.body.toString())
    res.sendStatus(200)
  })

app.listen(port);