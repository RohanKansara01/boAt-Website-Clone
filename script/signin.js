
let arr = JSON.parse(localStorage.getItem("data")) || []
let form = document.querySelector("form");
form.addEventListener("submit", function(event){

    event.preventDefault();
   
        let email1 = event.target.email.value
        let password1 = event.target.pass.value
    

    if(email1=="" || password1==""){
        alert("Please fil all deatils")
    }else{
        let narr = arr.filter(function(ele){
            return (ele.email === email1  &&  ele.password === password1)
        })
        if(narr.length==0){
            alert("Wrong Credentials Or New User")
        }
         else{   
            alert("Welcome back")
            window.location.href="signup.html"
        }
}
    
    
})
