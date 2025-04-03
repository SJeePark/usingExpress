const express = require('express');
const app = express() //express를 사용한 앱 생성


const checkAuth = (req, res, next)=>{
    console.log("she has admin permission");
    next();
}


const token = null;

const checkToken = (req, res, next)=>{
    if(token){
    console.log("you have token");
    next(); //next 반드시 써야 다음 함수로 넘어감!
    }else{
    res.send("you don't have token")
    }
}

const getUser = (req, res)=>{
    console.log("here is user info")
    res.send("here is user info")
}


app.get("/users", checkAuth, getUser, checkToken)


app.listen(5000, ()=>{
    console.log("server is on 5000");
 }) //port 5000일때 출력