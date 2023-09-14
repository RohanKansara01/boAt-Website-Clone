
let storage = JSON.parse(localStorage.getItem("data")) || []
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
   
    let obj={
        user:event.target.user.value,
        email : event.target.email.value,
        password : event.target.pass.value,
    }
let EmailExists = storage.some(element => element.email === obj.email)

if(obj.user=="" || obj.email=="" || obj.password==""){
    alert("Please fil all deatils")
}else if(EmailExists){
    alert("Email Id is Exist")
}else{
        storage.push(obj);
        localStorage.setItem("data", JSON.stringify(storage))
         window.location.href = "otp.html"
    }
})
