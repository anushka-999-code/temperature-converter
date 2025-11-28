function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (temp === "") {
        result.innerText = "Please enter a temperature!";
        return;
    }

    temp = parseFloat(temp);

    if (unit === "C") {
        let f = (temp * 9/5) + 32;
        result.innerText = `${f.toFixed(2)} °F`;
    } else {
        let c = (temp - 32) * 5/9;
        result.innerText = `${c.toFixed(2)} °C`;
    }
}
