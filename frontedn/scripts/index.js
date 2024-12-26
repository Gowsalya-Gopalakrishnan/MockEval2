let form =  document.getElementById("form");
form.addEventListener("submit",function(){
    let email = form.email.value;
    let password = form.password.value;
    // alert("login ");
    if(email === "empher@gmail.com" && password === "empher@123"){
        alert("Login Success ....");
        window.location.href="quiz.html";
    }else{
        alert("Login Failed....");
    }
})