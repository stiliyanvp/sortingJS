"use strict";

//Declares the Dictionary, which contains the items (books)
var items = [
  {
    all: "all",
    genre: "Biography",
    title: `"Bossypants"`,
    author: "Tina Fey",
  },
  {
    all: "all",
    genre: "Biography",
    title: `"Becoming"`,
    author: "Michelle Obama",
  },
  {
    all: "all",
    genre: "Biography",
    title: `"Steve Jobs"`,
    author: "Walter Isaccson",
  },
  {
    all: "all",
    genre: "Fiction",
    title: `"Tweet Cute"`,
    author: "Emma Lord",
  },
  {
    all: "all",
    genre: "Fiction",
    title: `"Flipped"`,
    author: "Wendelin Van Drannen",
  },
  {
    all: "all",
    genre: "Fiction",
    title: `"Turtles All The Way Down"`,
    author: "John Green",
  },
  {
    all: "all",
    genre: "Poetry",
    title: `"Milk And Honey"`,
    author: "Rupi Kaur",
  },
  {
    all: "all",
    genre: "Poetry",
    title: `"Deeper Than The Ocean"`,
    author: "Emma Rose",
  },
  {
    all: "all",
    genre: "Poetry",
    title: `"Pillow Thoughts"`,
    author: "Courtney Peppernell",
  },
];

// Declares $ as a function, which returns the Id of the element, specified after $ symbol
const $ = function (elem) {
  return document.getElementById(elem);
};

//Sorts the elements by title in alphabetical order (in ascending order)
const titlesort = function () {
  items.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });
  show(target);
};

//Sorts the elements by author in alphabetical order (in ascending order)
const authorsort = function () {
  items.sort((a, b) => {
    if (a.author > b.author) {
      return 1;
    } else {
      return -1;
    }
  });
  show(target);
};

/* Declares function, which creates a table with first column - 
author and second column - title. The different rows are the
different items from the Dictionary */
const show = function (id) {
  $("display").innerHTML = "";
  for (let book of items) {
    if (id != "All") if (id != book.genre) continue;
    let r = document.createElement("tr");
    let d = document.createElement("td");
    let t = document.createTextNode(`${book.author}`);
    d.appendChild(t);
    r.appendChild(d);
    d = document.createElement("td");
    let i = document.createElement("i");
    t = document.createTextNode(`${book.title}`);
    i.appendChild(t);
    d.appendChild(i);
    r.appendChild(d);
    $("display").appendChild(r);
  }
};

// Displays all entries from the dictionary, without sorting them
const all = function (e) {
  target = e.target.id;
  show(target);
};

// Declares all buttons that will be used, by adding EventListeners - action on click
function allbtn() {
  $("All").addEventListener("click", all);
  $("Fiction").addEventListener("click", all);
  $("Biography").addEventListener("click", all);
  $("Poetry").addEventListener("click", all);
  $("auth").addEventListener("click", authorsort);
  $("title").addEventListener("click", titlesort);
}

var target = "All";
show(target);
allbtn();
