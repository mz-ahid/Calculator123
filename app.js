//===============================CALCULATOR

var inputCal= document.getElementById("inp");
function enterNum(val){
    inputCal.value+=val;
}

// Calculation
function calcuNum(){
inputCal.value=eval(inputCal.value);
}
// Clear
function clearNum(){
    inputCal.value="";
}

//Back
function goBack(){
    inputCal.value=inputCal.value.slice(0,-1);
}