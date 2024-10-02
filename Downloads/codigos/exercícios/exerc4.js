document.addEventListener("DOMContentLoaded", function () {
    
    var userNameInput = document.getElementById("userName");
    var submitButton = document.getElementById("submitButton");
    var greetingSection = document.getElementById("greetingSection");

    submitButton.addEventListener("click", function () {
        var userName = userNameInput.value;
        var greetingMessage = "Olá, " + userName + "! Seja bem-vindo.";
        greetingSection.innerHTML = "<p>" + greetingMessage + "</p>";
    });
});

document.getElementById("userForm").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submitButton.click();
    }
});
