const inputValue = document.getElementById("input")
const convertBtn = document.getElementById("btn")
const lengthResult = document.getElementById("length")
const volumeResult = document.getElementById("volume")
const massResult = document.getElementById("mass")

convertBtn.addEventListener("click", function () {
  const value = parseFloat(inputValue.value);
  if(isNaN(value) || value < 0) {
    lengthResult.textContent = "please enter a valid number!";
    volumeResult.textContent = "";
    massResult.textContent = "";
    return;
  }
   const metersToFeet = value * 3.28084;
   const litersToGallons = value * 0.264172;
   const kilogramsToPound = value * 2.20462;

   lengthResult.textContent = ` ${value} meters = ${metersToFeet.toFixed(2)} feet`;
   volumeResult.textContent = `${value} liters = ${litersToGallons.toFixed(2)} gallons`;
   massResult.textContent = `${value} kilogram = ${kilogramsToPound.toFixed(2)} pound`;

   inputValue.value = ""

})



