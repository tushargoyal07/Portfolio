const inputfields=document.querySelectorAll("input");
const btn=document.querySelectorAll("button");

const userdata=[];

document.querySelector(".cv-btn").onclick=function(){myFcn()}
    function myFcn(){

    let name=inputfields[0].value;
    let email=inputfields[1].value;
    let phone=inputfields[2].value;
    userdata.push({name, email, phone});
    alert("Button was clicked");
    console.log(userdata);
}