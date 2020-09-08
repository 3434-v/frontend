function PasswordVerifiers(){
    var password = document.getElementById("psw").value;
    var ConfirmPassword = document.getElementById("ConfirmPassword").value;
    if(password=="") {
        alert('密码不得为空')
        return false;
    }

    if(ConfirmPassword=="") {
        alert('二次密码不得为空')
        return false;
    }

    if(password != ConfirmPassword){
        alert("两次密码不一致！")
        return false;
    }else{
        return true;
    }
}

function PhoneVerifiers(){
    var phone = document.getElementById("phone").value;
    if(phone==""){
        alert("手机号不得为空")
        return false;
    }
    if(phone.length!=11){
        alert("手机号为11位")
        return false;
    }
    return true
}
