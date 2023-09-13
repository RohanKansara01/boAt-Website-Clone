


let storage = JSON.parse(localStorage.getItem("data")) || []
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
   
    let obj={
        user:event.target.user.value,
        email : event.target.email.value,
        password : event.target.pass.value,
    }

    storage.forEach(element => {
        if(element.email==obj.email){
            alert("Email Id is Exist")
            return
        }else{

            storage.push(obj);
            localStorage.setItem("data", JSON.stringify(storage))
            
        if(obj.user=="" || obj.email=="" || obj.password==""){
            alert("Please fil all deatils")
        }else{
            // alert("Your Otp is 1234")
             window.location.href = "otp.html"
            }
        }
    });
       
})
