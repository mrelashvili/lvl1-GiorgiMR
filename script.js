'use strict';

///USERS.

const user1 = {
  name: 'Ricky',
  surname: 'Martin',
  points: [83, 75, 96],
};

const user2 = {
  name: 'David',
  surname: 'Benioff',
  points: [74, 87, 69],
};

const user3 = {
  name: 'George',
  surname: 'Martin',
  points: [87, 93, 91],
};

const user4 = {
  name: 'Daniel',
  surname: 'Weiss',
  points: [56, 83, 75],
};

const user5 = {
  name: 'Walter',
  surname: 'White',
  points: [52, 68, 86],
};

const user6 = {
  name: 'Jesse',
  surname: 'Pinkman',
  points: [67, 51, 70],
};

///////// for other users.

const user7 = {
  name: 'Tyrion',
  surname: 'Lanister',
  points: [68, 54, 85],
};

const user8 = {
  name: 'Steven',
  surname: 'Gerrard',
  points: [87, 93, 71],
};

//Selecting elements

const data = document.querySelector('.new-data');
const avgHtml = document.querySelector('.avg-html');
const avgCss = document.querySelector('.avg-css');
const avgJs = document.querySelector('.avg-js');
const html = document.querySelector('.html');

const users = [user1, user2, user3, user4, user5, user6];

///FOR AVERAGE.
// const average = user => {
//   let sum = 0;

//   for (let i = 0; i < users.length; i++) {
//     sum += `user${i}.points[0]`;
//     console.log(sum);
//   }
//   return sum / 5;
// };

//average points..

const htmlAverage =
  users.flatMap(user => user.points[0]).reduce((acc, point) => acc + point, 0) /
  users.length;

const cssAverage =
  users.flatMap(user => user.points[1]).reduce((acc, point) => acc + point, 0) /
  users.length;

const javascriptAverage =
  users
    .flatMap(user => user.points[2])
    .reduce((acc, point) => Math.floor(acc + point, 0)) / users.length;

//data.

users.forEach(function (user, index) {
  data.innerHTML = '';

  const htmlScores = user.points[0] >= htmlAverage ? 'high' : 'low';
  const cssScores = user.points[1] >= cssAverage ? 'high' : 'low';
  const jsScores = user.points[2] >= javascriptAverage ? 'high' : 'low';

  const html = `<tr class="new-data">
      <td class="name">${user.name}</td>
      <td class="surname">${user.surname}</td>
      <td class="html point__${htmlScores}">${user.points[0]}</td>
      <td class="css point__${cssScores}">${user.points[1]}</td>
      <td class="javascript point__${jsScores}">${user.points[2]}</td>
    </tr>`;

  data.insertAdjacentHTML('beforebegin', html);
});

avgHtml.textContent = htmlAverage.toFixed(2);
avgCss.textContent = cssAverage.toFixed(2);
avgJs.textContent = javascriptAverage.toFixed(2);
