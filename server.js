import express from "express"

const app = express();

const port = 3000;

app.post('/order' , async (req,res) => {
    const order = req.body;
    console.log(order)
})

app.listen(port);