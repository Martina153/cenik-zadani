
//Vypište do konzole text První WHILE cyklus. Pomocí cyklu WHILE vypište všecha čísla od jedné až do sta.
/*let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}*/

//Vypište do konzole text Druhý WHILE cyklus. Pomocí cyklu WHILE vypište všechna sudá čísla od jedné až do sta
/*let i = 1;
while (i <= 100) {
  if (i%2===0){console.log(i);
    } 
  i++
}*/

//Vypište do konzole text Třetí WHILE cyklus. Pomocí cyklu WHILE vypište všechna sudá čísla pozpátku od sta až k nule.
/*let i = 100;
while (i >= 0) {
  if (i%2===0){console.log(i);
    } 
  i--
}

//
for (let i=0; i <= 100; i++) {
  console.log(i)
}

for (let i = 100; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}*/

/*const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'ja', 'misa']

for (let i = 0; i < users.length; i++) {
  if(users[i].length <= 4)
  console.log(users[i]+ "@gmail.com")  
}

const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300]

//Napište cyklus FOR, který spočítá výsledný zůstatek na účtu za předpokladu, 
//že na účtu byla na začátku nula.
let balance = 0
for (let i = 0; i<amounts.length; i++) {
  balance+=amounts[i]
}

console.log("Balance na ucte je" + balance)

//Napište cyklus WHILE, který zjistí číslo pohybu, 
//ve kterém se účet dostal poprvé do mínusu. Vypište jak číslo pohybu, tak výši záporného zůstatku.
let balance2=0
let movement=0
while (balance2>=0 && movement<amounts.length) {
  balance2+=amounts[movement]
  movement++}

  if(balance2<0) {
    console.log(`Účet se dostal poprvé do mínusu v pohybu číslo ${movement}, s výši záporného zůstatku ${balance2}.`)
  } else {
    console.log('Na účtu nebyl dosažen záporný zůstatek.');}

//Napište cyklus, který projde celé toto pole a všechny položky spojí 
//dohromady do jednoho velkého řetězce jako níže. A výsledek vypište do konzole.

const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice']
const result = list.join(',')
console.log(result)
//Upravte váš program tak, aby výsledný řetězec obsahoval HTML značky.
//'<li>mouka</li><li>máslo</li><li>cukr</li><li>jablka</li><li>skořice</li>'

const list2 = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice'];
let items = '';

for (let item of list2) {
  items += `<li>${item}</li>`;
}

console.log(items);

//Napište cyklus WHILE, 
//který do konzole postupně vypíše všechny časové údaje v rámci jednoho dne od 0:00 až po 23:59.
let hour = 0; 
while (hour < 24) {
  let minute = 0;
  while (minute < 60) {
    console.log(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
    minute++;
  }
  hour++;
}

//Napište funkci roll, která simuluje hod kostkou.
// Vrátí tedy náhodné číslo od 1 do 6 tak, že všechna čísla mají stejnou pravděpodobnost.


function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollUntilSix() {
  let attempts = 0;
  let result;
  
 while (result !== 6) {
  result = roll();
  attempts++;
 }
  
  console.log(`Šestka padla na ${attempts}. pokus.`);
}*/

const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
]
/*
//Vypište na výstup všechna čísla.
for (i in numbers) {
console.log(numbers[i])}
//Vypište na výstup druhé mocniny všech čísel.

for (i in numbers) {
  const square = Math.pow(numbers[i], 2);
  console.log(square);
}

//Vypište na výstup pouze záporná čísla.

for (i in numbers) {
  if (numbers[i]<0) {
    console.log(numbers[i])
  }
}

//Vypište na výstup absolutní hodnotu všech čísel.
for (i in numbers) {
  const abs = Math.abs(numbers[i]);
  console.log(abs);
}

//Vypište na výstup pouze sudá čísla.
for (i in numbers) {
  if (numbers[i]%2==0) {
    console.log(numbers[i])
  }
}

//Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.

for (i in numbers) {
  if (numbers[i]%2!==0) {
    console.log(numbers[i])
  }
}

//Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.

for (i in numbers) {
  const distance = Math.abs(numbers[i] - 5);
  console.log(`Vzdálenost čísla ${numbers[i]} od čísla 5 je ${distance}`);
}

//Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.

for (i in numbers) {
  const distance = Math.pow(Math.abs(numbers[i] - 5),2)
  console.log(distance)}

//Spočítejte, kolik je v seznamu záporných čísel.
let count =0
for (i in numbers) {
  if (numbers[i]<0) {
    count++
  }
}
console.log(count)*/

//Spočítejte součet všech čísel v poli.
/*let sum=0
for (i in numbers) {
  sum+=numbers[i]
}
console.log(sum)*/

//Spočítejte průměr všech čísel v poli.
let sum = 0

for (let number of numbers) {
  sum += number
}
const average = sum / numbers.length
console.log(average)

//Spočítejte součet všech kladných čísel v poli.
let vysledok=0
for (i in numbers) {
  if(numbers[i]>0) {
    vysledok+=numbers[i]
  }
}
console.log(vysledok)