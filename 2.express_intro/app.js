// const http = require('http')
const path = require('path');
const express = require('express')
const bodyParser = require('body-parser') // required to parse request body

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express()
app.use(bodyParser.urlencoded({extended : false}))

// app.use((req,res,next) => {
//     console.log('In middle ware');
//     next() // necessary to run next middle ware after this middle ware
// })

// app.use((req,res,next) => {
//     console.log('In another middle ware');
//     res.send('<h1>Hello!</h1>') // automatically detected as html by packet.
//     // ek baar res krne ke baad, nich ka koi middle ware ni chalega
// })

// app.use('/',(req,res,next)=>{
//     console.log('this always runs!')
//     next();
// })

app.use('/admin',adminRouter);
app.use(shopRouter);

// execution reach here only if no path is found i.e. 404 error
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
})

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);