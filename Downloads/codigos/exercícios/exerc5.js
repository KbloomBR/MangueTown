document.addEventListener("DOMContentLoaded", function () {

    var number1Input = document.getElementById("number1");
    var number2Input = document.getElementById("number2");
    var sumButton = document.getElementById("sumButton");
    var resultSection = document.getElementById("resultSection");

    sumButton.addEventListener("click", function () {
    
        var number1 = parseInt(number1Input.value);
        var number2 = parseInt(number2Input.value);

       
        if (!isNaN(number1) && !isNaN(number2)) {
        
            var sum = number1 + number2;
           
            resultSection.innerHTML = "<p>" + number1 + " + " + number2 + " = " + sum + "</p>";
        } else {
      
            resultSection.innerHTML = "<p>Por favor, insira números válidos.</p>";
        }
    });
});
