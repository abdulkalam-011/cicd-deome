import express from 'express'
import { sum } from './sum.js'

const app = express()
const PORT = 3000


app.use(express.json({limit:"16kb"}))


app.get("/health", (req,res)=>{
  res.json({
    status:200,
    message:"Server is up and running",
    success:true
  })
})

app.get("/sum/:a/:b", async(req,res)=>{
  const {a, b} = req.params;
  res.json({
    ans:sum(parseInt(a), parseInt(b))
  })
})

app.listen(PORT, ()=>{
  console.log("server is running on port 3000")
})