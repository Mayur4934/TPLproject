const bodyParser = require("body-parser");

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/');

express = require('express');
cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json())

app.post("/login",(req,res)=> {
    const body = req.body;
    console.log(body);
    //database query
    if(body.mailid === 'mayur@gmail.com'){

        if(body.password === '123'){
            res.send("login success");
        }

        else{

            res.status(401).send("login failed")
        }
    }

    else{
        res.status(401).send("login failed")
    }
    

});


app.listen(5100,function (){


    console.log("server is listening on port number 5100 sucessfully....")

})

