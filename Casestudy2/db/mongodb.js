const mongoose=require('mongoose')
mongoose.connect(process.env.mongodb_url,{  useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(()=>{
    console.log("MongoDB Connection established Successfully")
})
.catch(err=>{
    console.log("Error in MongoDB Connection",err)
})
