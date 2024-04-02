const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET , POST , PUT , DELETE , PATCH , HEAD",
    credential: true

}
const error = require("./middleware/error")

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

// route imports
const product =  require("./routes/productRoute")
const user = require("./routes/userRoute")
const order = require("./routes/orderRoute")

app.use("/api/v1" , product)
app.use("/api/v1" , user)
app.use("/api/v1" , order)
// middleware for errors
app.use(error)

module.exports = app