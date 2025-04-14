const server=require("./app")
require("dotenv").config()

const Host=process.env.HOST;
const Port=process.env.PORT;

server.listen(Port,function(){
    console.log(`Server Started http://${Host}:${Port}`);
    
})