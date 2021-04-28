"use strict";

//Selecting elements

const data = document.querySelector(".new-data");
const avgHtml = document.querySelector(".avg-html");
const avgCss = document.querySelector(".avg-css");
const avgJs = document.querySelector(".avg-js");
const html = document.querySelector(".html");
const head = document.querySelector(".head-data");
const btn = document.querySelector(".btn");

const subBtn = document.querySelector(".sb-btn");
const subInpt = document.getElementById("sbj_inp");

const name_inp = document.getElementById("name_inp");
const surname = document.getElementById("surn_inp");
const css_inp = document.getElementById("css_inp");
const html_inp = document.getElementById("html");
const js = document.getElementById("js");

///USERS.
const users = [
  {
    name: "Ricky",
    surname: "Martin",
    points: [83, 75, 96, 55],
  },

  {
    name: "David",
    surname: "Benioff",
    points: [74, 87, 69],
  },

  {
    name: "George",
    surname: "Martin",
    points: [87, 93, 91],
  },

  {
    name: "Daniel",
    surname: "Weiss",
    points: [56, 83, 75],
  },

  {
    name: "Walter",
    surname: "White",
    points: [52, 68, 86],
  },

  {
    name: "Jesse",
    surname: "Pinkman",
    points: [67, 51, 70],
  },
];

const subjects = ["Html Point", "CSS Point", "Javascript Point"];

class fullTable {
  users = [];
  subjects = [];
  constructor(user, subjects) {
    this.user = user;
    this.subjects = subjects;
    this.StudentEventListener();
    this.subEventListener();
    this.displayData();
    this.headField();
  }

  headField() {
    //head field.
    let sub = "";
    for (let i = 0; i < this.subjects.length; i++) {
      sub += `<td>${this.subjects[i]}</td>`;
    }
    head.innerHTML += sub;
  }

  displayData() {
    //display datas..
    console.log(users);
    users.forEach(function (user, index) {
      data.innerHTML = "";

      const html = `<tr class="new-data">
      <td class="name">${user.name}</td>
      <td class="surname">${user.surname}</td>
      <td class="html point__${
        user.points[0] >= htmlAverage ? "high" : "low"
      }">${user.points[0]}</td>
      <td class="css point__${user.points[1] >= cssAverage ? "high" : "low"}">${
        user.points[1]
      }</td>
      <td class="javascript point__${
        user.points[2] >= javascriptAverage ? "high" : "low"
      }">${user.points[2]}</td>
    </tr>`;

      data.insertAdjacentHTML("beforebegin", html);
    });
  }

  StudentEventListener() {
    //event listener.

    btn.addEventListener("click", function () {
      users.push({
        name: name_inp.value,
        surname: surn_inp.value,
        points: [html_inp.value, css_inp.value, js.value],
      });

      const htmlScores = html_inp.value >= htmlAverage ? "high" : "low";
      const cssScores = css_inp.value >= cssAverage ? "high" : "low";
      const jsScores = js.value >= javascriptAverage ? "high" : "low";

      const html = `<tr class="new-data">
      <td class="name">${name_inp.value}</td>
      <td class="surname">${surn_inp.value}</td>
      <td class="html point__${htmlScores}">${html_inp.value}</td>
      <td class="css point__${cssScores}">${css_inp.value}</td>
      <td class="javascript point__${jsScores}">${js.value}</td>
    </tr>`;

      data.insertAdjacentHTML("beforebegin", html);

      //average update.

      //html
      avgHtml.textContent = (
        (htmlAverage * (users.length - 1) + Number(html_inp.value)) /
        users.length
      ).toFixed(2);
      htmlAverage =
        (htmlAverage * (users.length - 1) + Number(html_inp.value)) /
        users.length;

      //css.
      avgCss.textContent = (
        (cssAverage * (users.length - 1) + Number(css_inp.value)) /
        users.length
      ).toFixed(2);
      cssAverage =
        (cssAverage * (users.length - 1) + Number(css_inp.value)) /
        users.length;

      //js
      avgJs.textContent = (
        (javascriptAverage * (users.length - 1) + Number(js.value)) /
        users.length
      ).toFixed(2);
      javascriptAverage =
        (javascriptAverage * (users.length - 1) + Number(js.value)) /
        users.length;

      //input clearing..
      name_inp.value = "";
      surname.value = "";
      css_inp.value = "";
      html_inp.value = "";
      js.value = "";
    });
  }

  subEventListener() {
    subBtn.addEventListener("click", function () {
      subjects.push(subInpt.value);

      let sub = "";
      sub += `<td>${subInpt.value}</td>`;
      head.innerHTML += sub;

      subInpt.value = "";
    });
  }
}

let htmlAverage =
  users.map((user) => user.points[0]).reduce((acc, point) => acc + point, 0) /
  users.length;

let cssAverage =
  users.map((user) => user.points[1]).reduce((acc, point) => acc + point, 0) /
  users.length;

let javascriptAverage =
  users
    .map((user) => user.points[2])
    .reduce((acc, point) => Math.floor(acc + point, 0)) / users.length;

///

////

avgHtml.textContent = htmlAverage.toFixed(2);
avgCss.textContent = cssAverage.toFixed(2);
avgJs.textContent = javascriptAverage.toFixed(2);

/////////////////
new fullTable(users, subjects);
