const works = {
    demolition: {
      demolishWalls: 20, // Вартість за м² для демонтажу стін
      removeFlooring: 15, // Вартість за м² для видалення покриття підлоги
      // Додайте інші види робіт для демонтажу
    },
    repair: {
      painting: 10, // Вартість за м² для фарбування
      tiling: 25, // Вартість за м² для плитки
      // Додайте інші види робіт для ремонту
    },
    waste: {
      smallVan: 100, // Вартість за вивіз сміття (тип "малий фургон")
      largeTruck: 200, // Вартість за вивіз сміття (тип "великий вантажівка")
      // Додайте інші види робіт для вивозу сміття
    }
  };
  
  const categorySelect = document.getElementById('category');
  const areaInput = document.getElementById('area');
  const worksList = document.getElementById('worksList');
  const specificWorks = document.getElementById('specificWorks');
  const totalCost = document.getElementById('totalCost');
  
  categorySelect.addEventListener('change', showWorks);
  
//   function showWorks() {
//     worksList.innerHTML = '';
//     const selectedCategory = categorySelect.value;
//     const categoryWorks = works[selectedCategory];
//     for (const work in categoryWorks) {
//       const workOption = document.createElement('input');
//       workOption.type = 'checkbox';
//       workOption.id = work;
//       workOption.value = categoryWorks[work];
//       const label = document.createElement('label');
//       label.htmlFor = work;
//       label.appendChild(document.createTextNode(work));
//       worksList.appendChild(workOption);
//       worksList.appendChild(label);
//       worksList.appendChild(document.createElement('br'));
//     }
//     specificWorks.style.display = 'block';
//   }
//2
// function showWorks() {
//     worksList.innerHTML = '';
//     const selectedCategory = categorySelect.value;
//     const categoryWorks = works[selectedCategory];
//     for (const work in categoryWorks) {
//       const workOption = document.createElement('div');
  
//       const workCheckbox = document.createElement('input');
//       workCheckbox.type = 'checkbox';
//       workCheckbox.id = work;
//       workCheckbox.value = categoryWorks[work];
  
//       const label = document.createElement('label');
//       label.htmlFor = work;
//       label.appendChild(document.createTextNode(work));
  
//       const price = document.createElement('span');
//       price.appendChild(document.createTextNode(` (${categoryWorks[work]} грн за м²)`));
  
//       workOption.appendChild(workCheckbox);
//       workOption.appendChild(label);
//       workOption.appendChild(price);
  
//       worksList.appendChild(workOption);
//     }
//     specificWorks.style.display = 'block';
//   }
//3
function showWorks() {
  worksList.innerHTML = '';
  const selectedCategory = categorySelect.value;
  const categoryWorks = works[selectedCategory];
  for (const work in categoryWorks) {
    const workOption = document.createElement('div');

    const workCheckbox = document.createElement('input');
    workCheckbox.type = 'checkbox';
    workCheckbox.id = work;
    workCheckbox.value = categoryWorks[work];

    const label = document.createElement('label');
    label.htmlFor = work;
    label.appendChild(document.createTextNode(work));

    const price = document.createElement('span');
    price.appendChild(document.createTextNode(` (${categoryWorks[work]} грн за м²)`));

    workOption.appendChild(workCheckbox);
    workOption.appendChild(label);
    workOption.appendChild(price);

    worksList.appendChild(workOption);
  }

  // const floorInput = document.createElement('input');
  // floorInput.type = 'number';
  // floorInput.id = 'floor';
  // floorInput.placeholder = 'Поверхи';
  // worksList.appendChild(floorInput);

  // const elevatorInput = document.createElement('input');
  // elevatorInput.type = 'checkbox';
  // elevatorInput.id = 'elevator';
  // const elevatorLabel = document.createElement('label');
  // elevatorLabel.htmlFor = 'elevator';
  // elevatorLabel.appendChild(document.createTextNode('Наявність ліфта (+5 грн за поверх)'));
  // worksList.appendChild(elevatorInput);
  // worksList.appendChild(elevatorLabel);

  specificWorks.style.display = 'block';
}


  
  // function calculateCost() {
  //   const selectedCategory = categorySelect.value;
  //   const selectedWorks = works[selectedCategory];
  //   let cost = 0;
  //   for (const work in selectedWorks) {
  //     const workCheckbox = document.getElementById(work);
  //     if (workCheckbox.checked) {
  //       const areaCost = selectedWorks[work] * parseFloat(areaInput.value);
  //       cost += areaCost;
  //     }
  //   }
  //   totalCost.textContent = `Підсумкова вартість робіт: ${cost} грн`;
  // }
  //2
//   function calculateCost() {
//   const selectedCategory = categorySelect.value;
//   const selectedWorks = works[selectedCategory];
//   let cost = 0;
//   for (const work in selectedWorks) {
//     const workCheckbox = document.getElementById(work);
//     if (workCheckbox.checked) {
//       const areaCost = selectedWorks[work] * parseFloat(areaInput.value);
//       cost += areaCost;
//     }
//   }

//   const floor = parseInt(document.getElementById('floor').value) || 0;
//   const elevator = document.getElementById('elevator').checked;

//   cost += floor * 15; // Додаємо вартість за поверхи
//   if (elevator) {
//     cost += floor * 5; // Якщо є ліфт, додаємо вартість за ліфт
//   }

//   totalCost.textContent = `Підсумкова вартість робіт: ${cost} грн`;
// }
//3
function calculateCost() {
  const selectedCategory = categorySelect.value;
  const selectedWorks = works[selectedCategory];
  let cost = 0;
  for (const work in selectedWorks) {
    const workCheckbox = document.getElementById(work);
    if (workCheckbox.checked) {
      const areaCost = selectedWorks[work] * parseFloat(areaInput.value);
      cost += areaCost;
    }
  }

  const floor = parseInt(document.getElementById('floor').value) || 0;
  const elevator = document.getElementById('elevator').checked;

  if (elevator) {
    cost += floor * 5; // Якщо є ліфт, додаємо 5 грн за кожен поверх
  } else {
    cost += floor * 15; // Якщо немає ліфта, додаємо 15 грн за кожен поверх
  }

  totalCost.textContent = `Підсумкова вартість робіт: ${cost} грн`;
}


  