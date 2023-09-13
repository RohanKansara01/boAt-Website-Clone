var form = document.querySelector("form");
form.addEventListener("submit" , function(event){
    event.preventDefault()
    var input = event.target.otpInput.value
    if(input==""){
        alert("Enter Otp")
    }else{
    if(input=="1234"){
        window.location.href="signin.html"
    }else{
        alert("Wrong Otp")
    }
}
})

var otpbtn = document.querySelector("button");
var getotp = document.querySelector("h4");
otpbtn.addEventListener("click",function(event){
    event.preventDefault();
    getotp.innerText="Otp Sent Successfully"
    alert("Your otp is `1234`");
    
})