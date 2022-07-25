const express = require("express");
const mysql = require("mysql");
const serv = express();
const cors = require('cors')
const port = 4000;

serv.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))
serv.use(express.json())

const con = mysql.createConnection({
    host: "localhost",
    user: "dongwon",
    password: "thisisadminpassword",
    database: 'dongwonmall',
});
con.connect(function (err) {
    if (err) throw err
    console.log("Connected")
});

serv.post("/login", (req, res) => {
    con.query('SELECT * FROM login_table WHERE loginid = "' + req.body.id + '" AND passwd= "' + req.body.passwd + '"',(err,results) =>{
        if (err) throw err
        if (results.length === 0){
            res.send({status : -1})
        }
        results = results[0]
        res.send({status : 1, data: {'id' : results['id'],'passwd' : results['passwd'], 'nickname' : results['nickname']} })
    })
})




serv.listen(port, () => console.log(`Example app listening on port ${port}!`));
