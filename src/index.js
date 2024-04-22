
import server from "./server/Server.js"

server.listen(process.env.PORT | 3333,()=>{
    console.log(`Server Running on the port ${process.env.PORT | 3333}`)
})