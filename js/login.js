function loginVerifiers(){
	var username = document.getElementById("name").value;
	var password = document.getElementById("psw").value;
	if(username==""){
		alert("请输入用户名！");
		return false;
	}
	if(password==""){
		alert("请输入密码！");
		return false;
	}else{
		return true;
	}
}