function calculateIMC() {
    const weight = parseFloat(document.getElementById
        ("weight").value);
    const height = parseFloat(document.getElementById
        ("height").value);
    const imc = weight / (height * height);
    document.getElementById("imcResult").innerText =
        `Seu imc é ${imc.toFixed(2)}`;
}