// import { baseUrl } from "./baseUrl";
let form = document.getElementById("form");
form.addEventListener("submit",  function(){
    event.preventDefault();
    let uname = form.uname.value;
    let email =  form.email.value;
    let password = form.password.value;
    let mobile = form.mobile.value;
    // alert("sucessful");
    let obj = {uname,email,password,mobile};

    // fetch(`${baseUrl}/fullstacjappassignmentbackend`)
    fetch("https://brave-possible-gargoyleosaurus.glitch.me/fullstacjappassignmentbackend")
    .then((res)=> res.json())
    .then((data)=> {
        let user = data.filter((el,i)=>el.email == email);
        if(user.length!=0){
            alert("Already Register Please Login....");
            window.location.href="login.html";
        }else{
            // fetch(`${baseUrl}/fullstacjappassignmentbackend`,{
                fetch("https://brave-possible-gargoyleosaurus.glitch.me/fullstacjappassignmentbackend",{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify(obj),
            }).then(()=>{
                alert("Signup Sucessfull....");
                window.location.href="login.html";
            });
            
        }
    }).catch((err)=>{
        console.log(err);
        alert("Something went wrong, Please try agian later...");
    })
        
   
});