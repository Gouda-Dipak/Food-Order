import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodroute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartroute.js'
import orderRoute from './routes/orderroute.js'
// import orderRouter from './routes/orderRoute.js'



//app config
const app = express()
const port= 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();


// api endpoint
app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRoute)


app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
    
})

//mongodb+srv://skcart:sanju-07@cluster0.05gua.mongodb.net/?