const inputNumber = document.getElementById('quantity');
const minValue = document.getElementById('min-value');
const maxValue = document.getElementById('max-value');
const slider = document.getElementById('slider');
const drawButton = document.querySelector('.draw-button');
const defaultNumberValue = inputNumber.value;
const defaultMinValue = minValue.value;
const defaultMaxValue = maxValue.value;
const initialStep = document.querySelector('.initial-step');
const resultSection = document.getElementById('result');
const generatedNumbersContainer = document.querySelector('.generated-numbers');
const drawAgainButton = document.querySelector('.draw-again-button');

// Funções para manipulação dos inputs
inputNumber.oninput = () => {
  if (inputNumber.value > 10) {
    inputNumber.value = 10;
  }
  if (inputNumber.value <= 0) {
    inputNumber.value = 1;
  }
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
  }
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
  }
};

maxValue.onfocus = () => {
  maxValue.value = '';
};

maxValue.onblur = () => {
  if (maxValue.value === '') {
    maxValue.value = defaultMaxValue;
  }
};

slider.onchange = () => {
  console.log(slider.checked);
};


// Função para gerar os números
function generateNumber(min, max, numbers, noRepeat) {
  const generatedNumbers = [];
  if (noRepeat) {
    while (generatedNumbers.length < numbers) {
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!generatedNumbers.includes(newRandomNumber)) {
        generatedNumbers.push(newRandomNumber);
      }
    }
  } else {
    for (let i = 0; i < numbers; i++) {
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      generatedNumbers.push(newRandomNumber);
    }
  }
  return generatedNumbers;
}

// Evento de clique para o botão "Sortear"
drawButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Esconde a seção inicial e mostra a de resultado
  initialStep.classList.add('hidden');
  resultSection.classList.remove('hidden');

  // Obtém os valores dos inputs e gera os números
  const min = parseInt(minValue.value);
  const max = parseInt(maxValue.value); // Corrigido o erro de digitação de "parent" para "parseInt"
  const numbers = parseInt(inputNumber.value);
  const noRepeat = slider.checked;
  const result = generateNumber(min, max, numbers, noRepeat);

  // Exibe os números sorteados
  generatedNumbersContainer.innerHTML = '';
  result.forEach((number, index) => {
    setTimeout(() => {
      const numberElement = document.createElement('div');
      numberElement.textContent = number;
      numberElement.classList.add('number-item');
      generatedNumbersContainer.appendChild(numberElement);
    }, index * 2000);
  });
});

// Evento de clique para o botão "Sortear Novamente"
drawAgainButton.addEventListener('click', () => {
  resultSection.classList.add('hidden');
  initialStep.classList.remove('hidden');
});
