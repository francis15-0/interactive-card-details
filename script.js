let cardholder = document.getElementById("cardholder");
let uName = document.getElementById("name");
let lblNum = document.getElementById("card-num");
let cardNumber = document.getElementById("card-number");
let exp = document.getElementById("exp");
let mm = document.getElementById("mm");
let yy = document.getElementById("yy");


cardholder.addEventListener("focus", function(){
    
    setInterval(function(){
        uName.innerText = cardholder.value;
    }, 100);
    
});


cardNumber.addEventListener("focus", ()=>{

    setInterval(function(){
        lblNum.innerText = cardNumber.value;
    }, 100);
    
    
});

mm.addEventListener("click", ()=>{

    setInterval(function(){
        exp.innerText = mm.value + "/";
    }, 100);
    console.log("testing");
});

yy.addEventListener("focus", ()=>{

    setInterval(function(){
    exp.innerText = mm.value + "/" + yy.value;
    }, 1000);
    
});