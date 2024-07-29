import express from 'express'
const app = express();
import routes from './routes/productRoutes.js'
import errorHandler from './middlewares/errorHandler.js'
import dotenv from 'dotenv'
import morgan from 'morgan'

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(morgan("dev"))
dotenv.config()

app.use('/product', routes)

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' })
});

app.use(errorHandler)

const PORT= process.env.PORT
app.listen(PORT, ()=>{console.log(`Listening on PORT ${PORT}`)})