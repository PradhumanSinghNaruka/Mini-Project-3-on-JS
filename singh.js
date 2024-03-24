function calculatesum(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum=num1+num2;
    document.getElementById('result').innerHTML="sum:"+sum;
}
content = document.getElementById('ans1')

function calculatesub(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum=num1-num2;
    document.getElementById('result').innerHTML="sum:"+sum;
}
content = document.getElementById('ans2')

function calculatemultiple(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum=num1*num2;
    document.getElementById('result').innerHTML="sum:"+sum;
}
content = document.getElementById('ans1')

function calculatedivide(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum=num1/num2;
    document.getElementById('result').innerHTML="sum:"+sum;
}
content = document.getElementById('ans1')
