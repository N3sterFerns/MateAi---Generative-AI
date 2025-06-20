import express from "express"
import morgan from "morgan"
import connectDB from "./db/db.js"
import userRouter from "./routes/user.route.js"
import projectRouter from "./routes/project.route.js"
import aiRouter from "./routes/ai.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"

var corsOptions = {
    // origin: ['https://whale-app-jen2i.ondigitalocean.app', "http://localhost:5173"],
    origin: ['https://whale-app-jen2i.ondigitalocean.app'],
    optionsSuccessStatus: 200
}


const app = express()
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

connectDB()


app.use("/users", userRouter)
app.use("/project", projectRouter)
app.use("/mateai", aiRouter)

export default app;



