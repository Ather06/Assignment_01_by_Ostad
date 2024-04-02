function calc(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let operators = document.getElementById('operators').value;

    if(operators == "+")
    {
        document.getElementById("result").value = number1 + number2;
    }
    if(operators == "-")
    {
        document.getElementById("result").value = number1 - number2;
    }
    if(operators == "X")
    {
        document.getElementById("result").value = number1 * number2;
    }
    if(operators == "/")
    {
        document.getElementById("result").value = number1 / number2;
    }
}