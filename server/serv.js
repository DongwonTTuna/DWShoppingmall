const express = require("express");
const mysql = require("mysql");
const serv = express();
const cors = require('cors');
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
    console.log("Mysql Connected")
});

serv.post("/login", (req, res) => {
    if (req.body.email <= 10 || req.body.passwd <= 8){
        return
      }
    con.query('SELECT * FROM login_table WHERE loginid = "' + req.body.email + '" AND passwd= "' + req.body.passwd + '"',(err,results) =>{
        if (err) return res.send(err)
        if (results.length === 0){
            return res.send({status : -1})
        }
        results = results[0]
        res.send({status : 1, data: {'id' : results['id'], 'email': results['loginid'], 'nickname' : results['nickname']} })
    })
})

serv.post("/register", (req, res) => {
    const email = req.body['email']
    const passwd = req.body['passwd']
    const nickname = req.body['nickname']
    if (email.length <= 6 || passwd.length <= 8){
        return
      }
    con.query('SELECT * FROM login_table WHERE loginid = "' + email + '"', (err,results) => {
        if (err) return res.send(err)
        if (results.length !== 0){
            return res.send({status : -1})
            }
        con.query('INSERT INTO login_table (loginid, passwd, nickname) VALUES("' + email + '","' + passwd + '","'+ nickname+'")',(err, results) =>{
            if (err) return res.send(err)
            con.query('insert into user_detail values(null, null,null,null)',(err,results) =>{
                if (err) throw err
                res.send({status : 1})
            })
        } )})
})

serv.post('/mypage', (req, res) => {
    let id = req.body['id']
    let email = req.body['email']
    let passwd = req.body['passwd']
    let nickname = req.body['nickname']
    con.query('SELECT * FROM login_table WHERE id = "' + id + '" AND loginid = "' + email + '" AND passwd = "' + passwd + '" AND nickname = "' + nickname + '"', (err, results) => {
        if (err) return res.send({status: -1, err: err})
        if (results.length===0) return res.send({status : -1})
        let data = req.body['data']
        id = data['id']
        email = data['email']
        passwd = data['passwd']
        nickname = data['nickname']
        con.query('UPDATE login_table SET loginid="'+ email + '", passwd="'+ passwd + '", nickname="'+ nickname + '" WHERE id = ' + id, (err, results) => {
            if (err) return res.send(err)
            res.send({status : 1, data: {'id' : id, 'email': email, 'nickname' : nickname} })
        })    
    })
    
})
serv.listen(port, () => console.log(`正常に稼働されました！`));
