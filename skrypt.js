function writenumbers() {
    var number1 = document.getElementById("one").value;
    var number2 = document.getElementById("two").value;
    var writing = "";
    if (number1 > number2) {
        var temp = 0;
        temp = number2;
        number2 = number1;
        number1 = temp;
        for (i = number1; i < number2; i++) {
            writing = writing + i + " ";
        }
    }
    else {
        for (i = number1; i < number2; i++) {
            writing = writing + i + " ";
        }
    }
    document.getElementById("solution").innerHTML = writing;
}