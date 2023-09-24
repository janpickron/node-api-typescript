//  src/index.ts
// minimal Express API

import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.json({ greeting: 'Hello Janice from TypeScript World!'})
})

app.listen(4000, () => console.log('API listening on PORT ', 4000))