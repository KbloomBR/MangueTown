document.getElementById('process-number-btn').addEventListener('click', function() {
    const number = document.getElementById('input-number').value;

    const half = number / 2;
    const double = number * 2;

    const result = `Dobro: ${double} | Metade: ${half}`;

    const outputSection = document.getElementById('output-section');
    outputSection.innerHTML = result;
});