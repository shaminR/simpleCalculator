function calculate(){
    var num1 = document.getElementById("amount").value;
    var num2 = document.getElementById("amount2").value;
    var choice = document.getElementById("operation").value;
    if(choice < 2 || choice > 5){
        alert("Please choose an operation")
    }
    if(isNaN(num1) == true || isNaN(num2) == true){
        alert("Please enter valid numbers")
    }
    
    var yuh = 0;

    if(choice == 5){
        yuh = +num1 + +num2;
    }
    if(choice == 2){
        yuh = (num1)-(num2);
    }
    if(choice == 3){
        yuh = (num1)*(num2);
    }
    if(choice == 4){
        yuh = (num1)/(num2);
    }
    
    yuh = yuh.toFixed(3);
    document.getElementById("answer").style.display = "block";
    document.getElementById("result").innerHTML = yuh;    
}

document.getElementById("calculate").onclick = function() {
    calculate();
};
