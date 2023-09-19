var formPayment = document.querySelector("#paymentFormLeft");

formPayment.addEventListener("submit" , (event)=>{
    event.preventDefault();
    var obj={

     FULLNAME : event.target.paymentname.value,
     PaymentEMAIL : event.target.paymentEMAIL.value,
     paymentAddress : event.target.paymentAddress.value,
     paymentCity : event.target.paymentCity.value,
     paymentZip : event.target.paymentZip.value,
     paymentSelect : event.target.paymentSelect.value,
}
    
    if(obj.FULLNAME=="" || obj.PaymentEMAIL=="" || obj.paymentAddress=="" || obj.paymentCity=="" || obj.paymentZip=="" || obj.paymentSelect=="Choose State...."){
        alert("Please fill the form");
    }
    else{

        alert("You Can Proceed For Payment");
        // window.location.reload();
    }
})
   function CHECKBOX1(event){
    let paymentCLICK = document.querySelector("#paymentC");
    let CheckBox2 = document.querySelector("#CheckBOX2");
    let formPaymentRight = document.querySelector("#paymentFormRight");
    let CheckBox1 = document.querySelector("#CheckBOX1");

    if(CheckBox2.checked == true){
        formPaymentRight.style.display = "block";
        paymentCLICK.style.display="none";
        CheckBox1.checked = false;
        let PAYMENTDIVOTP = document.querySelector("#PAYMENTDIVOTP");
    PAYMENTDIVOTP.style.display= "none";
    }
    else{
        
        formPaymentRight.style.display = "none";
    }
   }
   function CHECKBOX2(event){
    let paymentCLICK = document.querySelector("#paymentC");
    let CheckBox1 = document.querySelector("#CheckBOX1");
    let formPaymentRight = document.querySelector("#paymentFormRight");
    let CheckBox2 = document.querySelector("#CheckBOX2");
    if(CheckBox1.checked==true){
        formPaymentRight.style.display = "none";
        paymentCLICK.style.display="block";
        CheckBox2.checked = false;
    }
   }

   var paymentFormRight = document.querySelector("#paymentFormRight");
   paymentFormRight.addEventListener("submit" , (event)=>{
    event.preventDefault();
    let obj2 = {
        CARDNUM : event.target.paymentNUM.value,
        CARDMONTH : event.target.paymentMONTH.value,
        CARDYEAR : event.target.paymentSelect.value,
        CARDCVV : event.target.paymentCVV.value,
    }
    let CheckBox2 = document.querySelector("#CheckBOX2");
    
       if(obj2.CARDCVV==""  || obj2.CARDMONTH=="" || obj2.CARDNUM=="" || obj2.CARDYEAR=="Choose Year...."){
        alert("Please fill the Card Details");
       }else{
        alert("Payment Done Your order ID is #809424");
        window.location.href="index.html";
       }
   })
   
   function PROCEEDTOPAYMENT(event){
    // event.preventDefault();
    let CheckBox1 = document.querySelector("#CheckBOX1");

    if(CheckBox1.checked == false){
        alert("please Choose payment Mode");
    }
    else if(CheckBox1.checked == true){
    alert("Your Otp :-2630");
    let PAYMENTDIVOTP = document.querySelector("#PAYMENTDIVOTP");
    PAYMENTDIVOTP.style.display= "block";
    let paymentC = document.querySelector("#paymentC");
    paymentC.style.display="none";
        // window.location.href="page.html";
    }
   }
   function PAYMENTBTN(){
    let PAYMENTOTP = document.querySelector("#PAYMENTOTP").value;
    if(PAYMENTOTP=="2630"){
        alert("Order successfull Your Order Id is #806541");
        window.location.href="index.html";
    }else{
        alert("Invalid Otp");
    }
   }
   document.addEventListener("DOMContentLoaded", function () {

    var TotalValue = localStorage.getItem("OrderValue") || 0;

    var H3 = document.createElement("h4");
    H3.setAttribute("class","H4TOTAl");
    var SecoundChildPrice = document.querySelector("#SecoundChildPrice");
    H3.innerText  = TotalValue;
    SecoundChildPrice.appendChild(H3)
   });