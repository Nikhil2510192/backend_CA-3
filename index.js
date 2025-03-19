import express, { json } from "express"
const app=express()
const port=4000
const users=[
    {email: "alice@example.com",password:"alice123"},
    {email: "bob@example.com",password:"bob123"},
    {email: "charlie@example.com",password:"charlie123"}
]
app.use(json())
app.put("/put",(req,res)=>{
    const {email,password}=req.body
    const user=users.findByEmail(req.params.email)
    if(!email){
        res.json({error:"Email not found"})
    }else{
        user.Update(req.body)
    }
})
app.delete("/delete",(req,res)=>{
    const {email}=req.body
    const user=users.findByEmail(req.params.email)
        if(!email){
            res.json({error:"email not found"})
        }else{
            users.delete({user})
        }
    
})
app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})