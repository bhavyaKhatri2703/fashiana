import express from "express"
import bodyparser from "body-parser"
import createMessage from "./main";


const app = express();
app.use(bodyparser.json())


const port = 3000;

app.post('/order', (req, res) => {

    const order = req.body
    const name = order.customer.first_name
    const total = order.total_price
    createMessage(`${name} - ${total}`)
    console.log(`${name} - ${total}`)
    res.sendStatus(200)
  })

app.listen(port);