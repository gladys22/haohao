const express=require('express');
const bodyParser=require('body-parser');
const session=require('express-session');
const cors=require('cors');

const userRouter=require('./routers/user.js');

var server=express();
server.listen(6600);

server.use(express.static('public'));
server.use(bodyParser.urlencoded({
	extended:false
}));
server.use(cors({
	origin:'*',
	credentials:true
}));
server.use(session({
	secret:'128随机字符串',
	cookie:{maxAge:60*1000*30},
	resave:false,
	saveUninitialized:true
}))


server.use('/user',userRouter);