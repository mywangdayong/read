//异步
let a = 1;
let promise = new Promise(function (resolve,reject) {
	if (a==10) {
		resolve('成功');
	}else{
		reject('失败')；
	}
});

promise.then(res=>{
	console.log(res);
},err=>{
	console.log(err);
});


promise.catch(err=>{
	console.log(err);
});


promise.then(res=>{
	console.log(res);
}).catch(err=>{
	console.log(err);
});

Promise.resolve('aa');
new Promise(resolve=>{

});
Promise.reject()

Promise.all([p1,p2,p3]).then(){

}

Promise.all([p1,p2,p3]).then(){
	
}
/*模拟登录*/
let status = 1,
let userLogin = (resolve,reject)=>{
	setTimeout(()=>{
		if (status == 1) {
			resolve({data:'xxxx',mef:'xxx',token:'xxsa'});
		}else{
			reject('失败了')
		}
	},2000)
};
let getUserInfo = (resolve,reject)=>{
	setTimeout(()=>{
		if (status == 1) {
			resolve({data:'获取用户信息成功',mes:'assasas',token:'xxsdsdsdsds'});
		}else{
			reject('失败了')
		}
	},1000)
};
new Promise(userLogin).then(res=>{
	console.log('用户登录成功');
	return new Promise(getUserInfo);
}).then(res=>{
	console.log('获取用户信息成功');
	console.log(res);
})
	
 
