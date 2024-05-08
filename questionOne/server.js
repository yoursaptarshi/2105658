const app = require('./app');

app.listen(process.env.PORT,()=>{
    console.info(`Server is listening to PORT:${process.env.PORT}`)
})