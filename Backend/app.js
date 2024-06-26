if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config();
}
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload");
const path = require("path")

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET , POST , PUT , DELETE , PATCH , HEAD",
    credential: true

}
const error = require("./middleware/error")

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())

// route imports
const product =  require("./routes/productRoute")
const user = require("./routes/userRoute")
const order = require("./routes/orderRoute")
const payment = require("./routes/paymentRoute")

app.use("/api/v1" , product)
app.use("/api/v1" , user)
app.use("/api/v1" , order)
app.use("/api/v1" , payment)

app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*" , (req,res) =>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})
// middleware for errors
app.use(error)

module.exports = app