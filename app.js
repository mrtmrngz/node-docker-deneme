import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", async (req, res) => {
    res.send(`
        <h1>Anasayfa</h1>
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


export default app



