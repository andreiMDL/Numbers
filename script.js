const inputNumber = document.getElementById('quantity');
const minValue = document.getElementById('min-value');
const maxValue = document.getElementById('max-value');
const slider = document.getElementById('slider');
const drawButton = document.querySelector('.draw-button');
const defaultNumberValue = inputNumber.value;
const defaultMinValue = minValue.value;
const defaultMaxValue = maxValue.value;

inputNumber.oninput = () => {
  if (inputNumber.value > 10) {
    inputNumber.value = 10;
  }
  if (inputNumber.value <= 0) {
    inputNumber.value = 1;
  }
  console.log(inputNumber.value);
};

inputNumber.onfocus = () => {
  inputNumber.value = '';
};

inputNumber.onblur = () => {
  if (inputNumber.value === '') {
    inputNumber.value = defaultNumberValue;
  }
};

minValue.oninput = () => {
  if (minValue.value < 1) {
    minValue.value = 1;
  }
  if (minValue.value > 999) {
    minValue.value = 999;
  };
  console.log(minValue.value);
};

minValue.onfocus = () => {
  minValue.value = '';
};

minValue.onblur = () => {
  if (minValue.value === '') {
    minValue.value = defaultMinValue;
  }
};

maxValue.oninput = () => {
  if (maxValue.value > 1000) {
    maxValue.value = 1000;
  };
  console.log(maxValue.value);
};

maxValue.onfocus = () => {
  maxValue.value = '';
};

maxValue.onblur = () => {
  if (maxValue.value === '') {
    maxValue.value = defaultMaxValue;
  }
};

min = parseInt(minValue.value);
max = parseInt(maxValue.value);
numbers = parseInt(inputNumber.value);

function generateNumber(min, max, numbers) {
  const generatedNumbers = [];
  for (let i = 0; i < numbers; i++) {
    const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    generatedNumbers.push(newRandomNumber);
  };
  return generatedNumbers;
}

slider.onchange = () => {
  console.log(slider.checked);
}

drawButton.onclick = () => {
  event.preventDefault();
  const min = parseInt(minValue.value);
  const max = parseInt(maxValue.value);
  const numbers = parseInt(inputNumber.value);
  const result = generateNumber(min, max, numbers);
  console.log(result);
};
