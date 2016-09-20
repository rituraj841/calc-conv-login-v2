module.exports.loginFormHandler = function(req, res){
	res.render("login.handlebars", {});
}//loginFormHandler

module.exports.logoutHandler = function(req, res){
	req.session.destroy();
	res.render("login.handlebars", {});
}//loginFormHandler


module.exports.authHandler = function(req, res){
	console.log("Inside loginHandler");
	var reqname = req.body.nm;
	var reqPassword = req.body.pwd;
	console.log("Inside loginHandler reqEmail=%s  reqPassword=%s", reqname, reqPassword);
	if ((reqname === 'golu')  && (reqPassword === 'g')){
		req.session.username = reqname;
		res.render("index-page.handlebars", {username: req.session.username});
	}else{
		res.render("login.handlebars", {errormsg:"Your login credentials are incorrect. Try again"});
	}
}//authHandler

module.exports.indexHandler = function(req, res){
	res.render("index-page.handlebars", {username: req.session.username});
}//indexHandler

module.exports.calcFormHandler = function(req, res){
	res.render("calc-form.handlebars", {username: req.session.username});
}//calcFormHandler

module.exports.convFormHandler = function(req, res){
	res.render("conv-form.handlebars", {username: req.session.username});
}//convFormHandler

module.exports.calcResultHandler = function(req, res){     //route for http get request for path /new 
	var number1 = parseInt(req.body.nm1);
	var number2 = parseInt(req.body.nm2);
	var operator = req.body.operator;
	var result = 0;

	if(operator === "+"){
	 	result = number1 + number2;
	}else if (operator === "-"){
		result = number1 - number2;
	}else if (operator === "*"){
		result = number1 * number2;	
	}else if (operator === "div"){
		result = number1 / number2;
	}
	console.log("Received from Browser:nm1=%s nm2=%s Operator=%s. Result=%s", number1,number2,operator,result);
		res.render("resultpage.handlebars", {resultvar:result, username: req.session.username});
}//calcResultHandler


module.exports.convResultHandler = function(req, res){ 
	console.log("received a post request");
	var number1 = parseInt(req.body.num);
	var operator = req.body.operator;
	var result = 0;

	if(operator === "cm2m"){
	 	result = number1 / 100;
	}else if (operator === "ft2m"){
		result = number1 * 3.2808;
	}else if (operator === "ft2in"){
		result = number1 * 0.083333;	
	}else if (operator === "mt2in"){
		result = number1 /0.039370;
	}

	console.log("Received from Browser:num=%s Operator=%s. Result=%s", number1,operator,result);
	res.render("resultpage.handlebars", {resultvar:result, username: req.session.username});			
}//convResultHandler