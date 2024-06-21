let buttonIdArray = [];

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.id;

    // Проверяем, есть ли id кнопки в массиве
    const index = buttonIdArray.indexOf(buttonId);
    if (index === -1) {
      // Если id кнопки не в массиве, добавляем его в начало
      buttonIdArray.push(buttonId);
    } else {
      // Если id кнопки уже в массиве, заменяем его на первое место
      buttonIdArray.splice(index, 1);
      buttonIdArray.unshift(buttonId);
    }

    console.log(buttonIdArray);
  });
});


// Взять значение из радио-кнопок
const radioInputs = document.querySelectorAll('input[type="radio"]');
const button1 = document.getElementById('btn_answer1');

// Добавьте прослушиватели событий к радио-кнопкам
radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    button1.id = input.id;
  });
});




const button2 = document.getElementById('btn_answer2');

radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    button2.id = input.id;
  });
});


const button3 = document.getElementById('btn_answer3');

radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    button3.id = input.id;
  });
});



const button4 = document.getElementById('btn_answer4');

radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    button4.id = input.id;
  });
});



const button5 = document.getElementById('btn_answer5');

radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    button5.id = input.id;
  });
});

const button6 = document.getElementById('btn_answer6');

radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    button6.id = input.id;
  });
});

const button7 = document.getElementById('btn_answer7');

radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    button7.id = input.id;
  });
});

const button8 = document.getElementById('btn_answer8');

radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    button8.id = input.id;
  });
});

const button9 = document.getElementById('btn_answer9');

radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    button9.id = input.id;
  });
});

const button10 = document.getElementById('btn_answer10');

radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    button10.id = input.id;
  });
});

const button11 = document.getElementById('btn_answer11');

radioInputs.forEach(input => {
  input.addEventListener('change', () => {
    button11.id = input.id;
  });
});


// в каждой функции убирается прошлий вопрос и появляется следующий
function replaceBlock1_2() {

//   // Добавляем обработчик события на кнопку
// const nextButton = document.querySelector('#next-button');
// // Добавляем обработчик события на кнопку
// nextButton.addEventListener('click', function() {
//   if (radioButton.checked) {
//       // Радиокнопка выбрана, переходим на следующую страницу
      
//   } else {
//       // Радиокнопка не выбрана, блокируем переход на следующую страницу
//       alert('Пожалуйста, выберите радиокнопку!');
//   }
// });

  const question1 = document.getElementById('cont_1'); 
  const question2 = document.getElementById('cont_2');

  question1.style.display = 'none';
  question2.style.display = 'block';
}

function replaceBlock2_3() {
  const question2 = document.getElementById('cont_2');
  const question3 = document.getElementById('cont_3');

  question2.style.display = 'none';
  question3.style.display = 'block';
}

function replaceBlock3_4() {
  const question3 = document.getElementById('cont_3');
  const question4 = document.getElementById('cont_4');

  question3.style.display = 'none';
  question4.style.display = 'block';
}

function replaceBlock4_5() {
  const question4 = document.getElementById('cont_4');
  const question5 = document.getElementById('cont_5');

  question4.style.display = 'none';
  question5.style.display = 'block';
}

function replaceBlock5_6() {
  const question5 = document.getElementById('cont_5');
  const question6 = document.getElementById('cont_6');

  question5.style.display = 'none';
  question6.style.display = 'block';
}

function replaceBlock6_7() {
  const question6 = document.getElementById('cont_6');
  const question7 = document.getElementById('cont_7');

  question6.style.display = 'none';
  question7.style.display = 'block';
}

function replaceBlock7_8() {
  const question7 = document.getElementById('cont_7');
  const question8 = document.getElementById('cont_8');

  question7.style.display = 'none';
  question8.style.display = 'block';
}

function replaceBlock8_9() {
  const question8 = document.getElementById('cont_8');
  const question9 = document.getElementById('cont_9');

  question8.style.display = 'none';
  question9.style.display = 'block';
}

function replaceBlock9_10() {
  const question9 = document.getElementById('cont_9');
  const question10 = document.getElementById('cont_10');

  question9.style.display = 'none';
  question10.style.display = 'block';
}

function replaceBlock10_11() {
  const question10 = document.getElementById('cont_10');
  const question11 = document.getElementById('cont_11');

  question10.style.display = 'none';
  question11.style.display = 'block';
}


// ФУНКЦИЯ ПЕРЕБОРА МАССИВОВ И ВЫВОДА ЕСЛИ 70% ОТВЕТОВ СОВПАЛИ

// Функция для сравнения данных двух массивов 1
function compareArraysEndo(array1, array2) {
  let resultContEndo = document.getElementById('result_cont_endo');
  const resultContAn = document.getElementById('result_cont_an');

  // проверяется длина массивов
  if (array1.length !== array2.length) {
    console.log('Нет');
    return;
  }

  let count = 0;
  const totalLength = array1.length;

    // проверяются значения массивов на идентичность
  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array2[i]) {
      count++;
    }
  }

  // количество значений в массиве переводяться в проценты
  const matchPercentage = (count / totalLength) * 100;

  // если количество совпавших значений полученного массива со значеними заданного массива больше 70%, то фозвращается true
  if (matchPercentage >= 65) {
    resultContEndo.style.display = 'block';
    return true;

  } else{return false};

}

// Функция для сравнения данных двух массивов 2
function compareArraysMezo(array1, array2) {
  let resultContMezo = document.getElementById('result_cont_mezo');
  const resultContAn = document.getElementById('result_cont_an');


  if (array1.length !== array2.length) {
    console.log('Нет');
    return;
  }

  let count = 0;
  const totalLength = array1.length;

  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array2[i]) {
      count++;
    }
  }

  const matchPercentage = (count / totalLength) * 100;

  if (matchPercentage >= 65) {
    console.log('Молодец');
    resultContMezo.style.display = 'block';
    return true

  } else{return false}
}
// Функция для сравнения данных двух массивов 3
function compareArraysEcto(array1, array2) {
  let resultContEcto = document.getElementById('result_cont_ecto');
  const resultContAn = document.getElementById('result_cont_an');

  if (array1.length !== array2.length) {
    console.log('Нет');
    return;
  }

  let count = 0;
  const totalLength = array1.length;

  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array2[i]) {
      count++;
    }
  }

  const matchPercentage = (count / totalLength) * 100;

  if (matchPercentage >= 65) {
    console.log('Молодец');
    resultContEcto.style.display = 'block';
    return true

  } else{return false};
  
}

// Функция для сравнения данных двух массивов 4

function compareArraysEndo_Ecto(array1, array2, array3) {
  let resultContEndo_Ecto = document.getElementById('result_cont_endo_ecto');
  const resultContAn = document.getElementById('result_cont_an');

  if (array1.length !== array2.length) {
    console.log('Нет');
    return;
  }
  if (array1.length !== array3.length) {
    console.log('Нет');
    return;
  }

  let countArray1 = 0;
  let countArray2 = 0;
  const totalLength = array1.length;

  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array2[i]) {
      countArray1++;
    }
  }
  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array3[i]) {
      countArray2++;
    }
  }

  const matchPercentage1 = (countArray1 / totalLength) * 100;
  const matchPercentage2 = (countArray2 / totalLength) * 100;


  if (matchPercentage1 >= 50 && matchPercentage2 <= 40) {
    console.log('Молодец');
    resultContEndo_Ecto.style.display = 'block';
    return true

  } else{return false};
  
}

// Функция для сравнения данных двух массивов 5

function compareArraysMezo_Endo(array1, array2, array3) {
  let resultContMezo_Endo = document.getElementById('result_cont_mezo_endo');
  const resultContAn = document.getElementById('result_cont_an');

  if (array1.length !== array2.length) {
    console.log('Нет');
    return;
  }
  if (array1.length !== array3.length) {
    console.log('Нет');
    return;
  }

  let countArray1 = 0;
  let countArray2 = 0;
  const totalLength = array1.length;

  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array2[i]) {
      countArray1++;
    }
  }
  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array3[i]) {
      countArray2++;
    }
  }

  const matchPercentage1 = (countArray1 / totalLength) * 100;
  const matchPercentage2 = (countArray2 / totalLength) * 100;

if (matchPercentage1 >= 50 && matchPercentage2 <= 40) {
    console.log('Молодец');
    resultContMezo_Endo.style.display = 'block';
    return true

  } else{return false};
  
}

// Функция для сравнения данных двух массивов 6

function compareArraysEcto_Mezo(array1, array2, array3) {
  let resultContEcto_Mezo = document.getElementById('result_cont_ecto_mezo');
  const resultContAn = document.getElementById('result_cont_an');

  if (array1.length !== array2.length) {
    console.log('Нет');
    return;
  }
  if (array1.length !== array3.length) {
    console.log('Нет');
    return;
  }

  let countArray1 = 0;
  let countArray2 = 0;
  const totalLength = array1.length;

  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array2[i]) {
      countArray1++;
    }
  }
  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array3[i]) {
      countArray2++;
    }
  }

  const matchPercentage1 = (countArray1 / totalLength) * 100;
  const matchPercentage2 = (countArray2 / totalLength) * 100;


  if (matchPercentage1 >= 50 && matchPercentage2 <= 40) {
    console.log('Молодец');
    resultContEcto_Mezo.style.display = 'block';
    return true

  } else{return false};
  
}

// Функция для сравнения данных двух массивов 7

function compareArraysEcto_Endo(array1, array2, array3) {
  let resultContEcto_Endo = document.getElementById('result_cont_ecto_endo');
  const resultContAn = document.getElementById('result_cont_an');

  if (array1.length !== array2.length) {
    console.log('Нет');
    return;
  }
  if (array1.length !== array3.length) {
    console.log('Нет');
    return;
  }

  let countArray1 = 0;
  let countArray2 = 0;
  const totalLength = array1.length;

  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array2[i]) {
      countArray1++;
    }
  }
  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array3[i]) {
      countArray2++;
    }
  }

  const matchPercentage1 = (countArray1 / totalLength) * 100;
  const matchPercentage2 = (countArray2 / totalLength) * 100;


  if (matchPercentage1 >= 50 && matchPercentage2 <= 40) {
    console.log('Молодец');
    resultContEcto_Endo.style.display = 'block';
    return true

  } else{return false};
  
}

// Функция для сравнения данных двух массивов 8

function compareArraysEndo_Mezo(array1, array2, array3) {
  let resultContEndo_Mezo = document.getElementById('result_cont_endo_mezo');
  const resultContAn = document.getElementById('result_cont_an');

  if (array1.length !== array2.length) {
    console.log('Нет');
    return;
  }
  if (array1.length !== array3.length) {
    console.log('Нет');
    return;
  }

  let countArray1 = 0;
  let countArray2 = 0;
  const totalLength = array1.length;

  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array2[i]) {
      countArray1++;
    }
  }
  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array3[i]) {
      countArray2++;
    }
  }

  const matchPercentage1 = (countArray1 / totalLength) * 100;
  const matchPercentage2 = (countArray2 / totalLength) * 100;


  if (matchPercentage1 >= 50 && matchPercentage2 <= 40) {
    console.log('Молодец');
    resultContEndo_Mezo.style.display = 'block';
    return true

  } else{return false};
  
}

// Функция для сравнения данных двух массивов 9

function compareArraysMezo_Ecto(array1, array2, array3) {
  let resultContMezo_Ecto = document.getElementById('result_cont_mezo_ecto');
  const resultContAn = document.getElementById('result_cont_an');

  if (array1.length !== array2.length) {
    console.log('Нет');
    return;
  }
  if (array1.length !== array3.length) {
    console.log('Нет');
    return;
  }

  let countArray1 = 0;
  let countArray2 = 0;
  const totalLength = array1.length;

  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array2[i]) {
      countArray1++;
    }
  }
  for (let i = 0; i < totalLength; i++) {
    if (array1[i] === array3[i]) {
      countArray2++;
    }
  }

  const matchPercentage1 = (countArray1 / totalLength) * 100;
  const matchPercentage2 = (countArray2 / totalLength) * 100;

if (matchPercentage1 >= 50 && matchPercentage2 <= 40) {
    console.log('Молодец');
    resultContMezo_Ecto.style.display = 'block';
    return true

  } else{return false};
  
}

// ФУНКЦИЯ ПЕРЕБОРА МАССИВОВ И ВЫВОДА ЕСЛИ 70% ОТВЕТОВ СОВПАЛИ (КОНЕЦ)



let mas1 = ['1', '4', '8', '11', '15', '19', '23', '27', '31', '35', '38'];
let mas2 = ['2', '5', '9', '12', '16', '20', '24', '28', '32', '36', '39'];
let mas3 = ['3', '6', '10', '13', '17', '21', '25', '29', '33', '37', '40'];


// функция, присваемая кнопке последнего вопроса
function showResult() {
  const resultContAn = document.getElementById('result_cont_an');
  const question11 = document.getElementById('cont_11');
  question11.style.display = 'none';
  // функция, заносящая значения из первоначального массива в массив firstArray
  const fillFirstArrayWithTestData = (() => {
    const firstArray = [];

    buttonIdArray.forEach(data => {
      firstArray.push(data);
    });
    return firstArray;
  });

  fillFirstArrayWithTestData(buttonIdArray);

  // функция, проверющая, какая функция выполнилась правильно, и в случае невыполнения всех функций вывод неоднозначного ответа
  setTimeout(() => {
    if (compareArraysEndo(buttonIdArray, mas1)) {
      return true;
    }
    else if(compareArraysMezo(buttonIdArray, mas2)){
      return true;
    }
    else if(compareArraysEcto(buttonIdArray, mas3)){
      return true;
    }
    else if(compareArraysEndo_Ecto(buttonIdArray, mas1, mas3)){
      return true;
    }
    else if(compareArraysMezo_Endo(buttonIdArray, mas2, mas1)){
      return true;
    }
    else if(compareArraysEcto_Mezo(buttonIdArray, mas3, mas2)){
      return true;
    }
    else if(compareArraysEcto_Endo(buttonIdArray, mas3, mas1)){
      return true;
    }
    else if(compareArraysEndo_Mezo(buttonIdArray, mas1, mas2)){
      return true;
    }
    else if(compareArraysMezo_Ecto(buttonIdArray, mas2, mas3)){
      return true;
    }
    else{
      resultContAn.style.display = 'block';
    }

  }, 100)
}
