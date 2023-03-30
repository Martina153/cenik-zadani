
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

const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'ja', 'misa']

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

//