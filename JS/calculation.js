let outputScreen  = document.getElementById('output-screen');

function display(number){
    outputScreen.value += number;
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch(error){
        alert('Invalid Data')
    }
}
function Clear(){
    outputScreen.value = '';
}
function Del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}