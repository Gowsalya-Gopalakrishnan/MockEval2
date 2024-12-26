import { navbar } from "./navbar";
console.log(navbar);
postdata();
function postdata(){
    let addnew = document.getElementById("addnew");
    addnew.addEventListener("click",async function(){
        let questions = document.getElementById("questions");
        let opt1 =document.getElementById("opt1");
        let opt2 =document.getElementById("opt2");
        let opt3 =document.getElementById("opt3");
        let opt4 =document.getElementById("opt4");
        let status = document.getElementById("status");
        let obj = {questions,opt1,opt2,opt3,opt4,status};

        try{
            let res = await fetch("https://citrine-puzzling-sesame.glitch.me/mock2eva",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(obj)
            });
            // alert("New Question Added...");
        }
    
    })
}


