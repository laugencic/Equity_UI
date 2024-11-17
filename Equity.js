document.addEventListener("DOMContentLoaded",function(){
    // document.getElementById("dashboard").style.display='none';
    document.querySelector("nav").style.display='none'
    document.querySelector("form").onsubmit=function(event){
        event.preventDefault()
        let username=document.getElementById("user").value;
        let password=document.getElementById("pass").value;
        let greeting;

        function greet(){
            let now=new Date()
            let hour=now.getHours()
            
            if(hour <12){
                greeting="Good morning"
            }
            else if(hour >=12 && hour <= 17){
                greeting="Good afternoon";
            }
            else{
                greeting="Good Evening"
            }
        }
        greet()
        if(username){
            window.alert(`Welcome back ${username}`)
        }
        document.getElementById("greet").textContent=`${greeting} ${username}`

        username=document.getElementById("user").value="";
        document.getElementById("form").style.display='none'
        document.getElementById("dashboard").style.display='block';

    }

    document.getElementById("ham").onclick=function(){
        if(document.querySelector("nav").style.display=='none'){
            document.querySelector("nav").style.display='block'
        }
        else{
            document.querySelector("nav").style.display='none'
        }
    }
})