const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

router.get('/login',(req,res)=>{
	var upwd=req.query.upwd;
	var phone=req.query.phone;
	

	var sql="SELECT * FROM haohao_login WHERE phone=? AND upwd=? ";
	pool.query(sql,[phone,upwd],(err,result)=>{
		if(err) throw err;
		console.log(result)
		if(result.length==0){
			res.send({code:-1,msg:"手机号或密码有误"});
	}else{
		// var uid=result[0].id;
		// console.log(uid);
		// req.session.uid=uid;
		res.send({code:1,msg:"登陆成功"});
	}
		
 })
})
module.exports=router;