
let storage = JSON.parse(localStorage.getItem("data")) || []
let form = document.querySelector("form");

// Get references to the pop-up elements
let popup = document.getElementById("popup");
let closePopupButton = document.getElementById("close-popup");

// Function to show the pop-up
function showPopup() {
  popup.style.display = "block";
}

// Function to hide the pop-up
function hidePopup() {
  popup.style.display = "none";
}

form.addEventListener("submit", function(event){
    event.preventDefault();
   
    let obj={
        user:event.target.user.value,
        email : event.target.email.value,
        password : event.target.pass.value,
    }
    
    let EmailExists = storage.some(element => element.email === obj.email)

    if(obj.user=="" || obj.email=="" || obj.password==""){
        alert("Please fill all details")
    } else if(EmailExists){
        showPopup(); // Show the pop-up
    } else {
        storage.push(obj);
        localStorage.setItem("data", JSON.stringify(storage))
        window.location.href = "otp.html"
    }
})

// Close the pop-up when the close button is clicked
closePopupButton.addEventListener("click", function() {
    hidePopup();
});
