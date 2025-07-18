import express from "express"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js";

import dotenv from "dotenv"
import connectDb from "./config/db.js"


dotenv.config()
import cors from "cors"
import userRouter from "./routes/user.route.js";
import listingRouter from "./routes/listing.route.js";


let port = process.env.PORT || 6000


let app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


app.use("/api/auth", authRouter )
app.use("/api/user", userRouter )
app.use("/api/listing", listingRouter )

app.listen(port,()=>{
    connectDb()
    console.log("server started")
})