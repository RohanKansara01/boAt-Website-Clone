function generateOTP(length) {
    const charset = "0123456789"; 
    const otp = [];
    const charsetLength = charset.length;
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charsetLength);
      otp.push(charset[randomIndex]);
    }
  
    return otp.join("");
  }
  const otp = generateOTP(4);

function getOtp() {    
    var otpModal = document.getElementById("otpModal");
    var otpValue = document.getElementById("otpValue");

    var confirmation = window.confirm("Press OK to get OTP");
    
    if (confirmation) {
        var getotp = document.querySelector("h4");
        var getOtpBtn = document.querySelector("#getOtpBtn")
        getOtpBtn.innerHTML="OTP Sent Successfully"
        getotp.innerText = "OTP Sent Successfully";
        otpValue.innerText = otp; 
        otpModal.style.display = "block";
    }
}
   var wrongotp = document.querySelector("#wrongotp");
function checkOtp() {
    var form = document.getElementById("otpForm");
    var input = form.querySelector("#otpInput").value;
    
    if (input === "") {
        wrongotp.style.color="black"
        wrongotp.innerText = "Enter otp"
    } else if (input === otp) {
        
        window.location.href = "signin.html";
    } else {
        wrongotp.style.color="black"
        wrongotp.innerText = "Invalid otp !!!"
    }
}
function closeModal() {
    var otpModal = document.getElementById("otpModal");
    otpModal.style.display = "none";
}
