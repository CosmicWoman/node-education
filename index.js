const PORT = process.env.PORT || 5000
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseUrl = require('./framework/parseURL')
const mongoose = require("mongoose");

const app = new Application()

app.use(jsonParser)
app.use(parseUrl('http://localhost:5000'))
app.addRouter(userRouter)

const start = async () => {
    try{
        await mongoose.connect('')
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch(e){
        console.log(e)
    }
}

start()