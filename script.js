const inputNumber = document.getElementById('quantity');
const minValue = document.getElementById('min-value');
const maxValue = document.getElementById('max-value');

inputNumber.oninput = () => {
  console.log(inputNumber.value);
};
