import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", async (req, res) => {
    res.send(`
        <h1>Anasayfa</h1>
        <a href="/products">Ürünlere git</a>
    `)
})

app.get("/first", async (req, res) => {
    res.send(`
        <h1>Main Route</h1>
    `)
})

app.get("/second", async (req, res) => {
    res.send(`
        <h1>Main 2</h1>
    `)
})

app.get("/products", async (req, res) => {

    const products = [
        {
            id: 1,
            title: "PRD1",
            price: 100
        },
        {
            id: 2,
            title: "PRD2",
            price: 400
        },
        {
            id: 3,
            title: "PRD3",
            price: 656
        },
        {
            id: 5,
            title: "PRD5",
            price: 100323
        },
        {
            id: 6,
            title: "PRD10",
            price: 1005466
        }
    ]

    res.json(products)
})


export default app



