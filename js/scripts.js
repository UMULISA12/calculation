var add = function(number1 ,number2){
    return number1+number2;
    };
    var number1 = parseInt(prompt("Enter a number:"));
    var number2 =parseInt(prompt("Enter a number:"));
    alert("sum of the entered numbers is " +add(number1, number2));
    
    var substract = function(number1, number2) {
    return number1 - number2;
    };
    alert ("substraction of two entered numbers is " +substract(number1,number2));

    var multiply = function(number1, number2) {
        return number1 * number2;
        };
        alert("the product of two entered numbers is " +multiply(number1,number2));

    var divide = function(number1, number2) {
        return number1 / number2;
        };
        alert("division of two entered numbers is " +divide(number1,number2));