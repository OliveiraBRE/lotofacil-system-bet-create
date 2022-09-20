const fs = require('fs');

const getNumber = () => {
  return Math.floor(Math.random() * (26 - 1) + 1);
};

const isValidNumber = (arrayNumber, number) => {

  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] === number) {
      return false;
    }
  };

  return number;
}


const bets = [];

for (let extIndex = 0; extIndex < 50; extIndex++) {
  const newBet = [];
  let index = 0;

  while (index < 15) {
    const number = isValidNumber(newBet, getNumber());

    if (number) {
      newBet.push(number);
      index++;
    }
  }

  newBet.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  bets.push(JSON.stringify(newBet));
};

fs.readFile('aposta.txt', 'utf-8', (err, data) => {
  if (err) return console.error(err);

  console.log(data);

  fs.writeFile('aposta.txt', `${data}\n\n${JSON.stringify(bets)}`, 'utf-8', err => {
    if (err) return console.error(err);
  });
});