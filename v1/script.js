const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#93c5fd" }, // lighter blue
  { name: "science", color: "#86efac" }, // lighter green
  { name: "finance", color: "#fca5a5" }, // lighter red
  { name: "society", color: "#fde047" }, // lighter yellow
  { name: "entertainment", color: "#f9a8d4" }, // lighter pink
  { name: "health", color: "#5eead4" }, // lighter teal
  { name: "history", color: "#fdba74" }, // lighter orange
  { name: "news", color: "#c4b5fd" }, // lighter purple
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";
// createFactsList(initialFacts);

// Load data from Supabase and render it
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://wsfvsascwrtegxyzsdqk.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzZnZzYXNjd3J0ZWd4eXpzZHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNTM2NjAsImV4cCI6MjA5MDgyOTY2MH0.peVdLaXwzOYEy1L8ggd1uBa2mbq8zohJEcJdBCVYRLE",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzZnZzYXNjd3J0ZWd4eXpzZHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNTM2NjAsImV4cCI6MjA5MDgyOTY2MH0.peVdLaXwzOYEy1L8ggd1uBa2mbq8zohJEcJdBCVYRLE",
      },
    },
  );
  const data = await res.json();
  // const filteredData = data.filter((fact) => fact.category === "technology");
  console.log(data);
  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `
  <li class="fact">${fact.text}
    <p>${fact.text}
    <a class="source" href="${fact.source}" target="_blank">(Source)</a>
  </p>
  <span class="tag" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === fact.category)?.color
  }">${fact.category}</span></li>`,
  );
  console.log(htmlArr);
  const html = htmlArr.join("");

  factsList.insertAdjacentHTML("afterbegin", html);
}

// factsList.insertAdjacentHTML("afterbegin", "<li>Chrishan</li>");
// factsList.insertAdjacentHTML("afterbegin", "<li>Peiris</li>");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));

console.log([7, 64, 6, -23, 11].find((el) => el > 10));

/*
let votesIntersting = 23;
let votesMindblowing = 5;
const text = "Lisbon is the capital of Portugal";

votesIntersting = votesIntersting + 1;
votesIntersting++;
console.log(votesIntersting);

let totalUpvotes = votesIntersting + votesMindblowing;
console.log(totalUpvotes);

let votesFalse = 4;
const isCorrect = votesIntersting < votesFalse;
console.log(isCorrect);

parseInt("24.533ccc");

*/

/*
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less or equal to ${currentYear}`;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2037));

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or 
    equal to ${new Date().getFullYear()}`;

console.log(calcFactAge2(2015));
console.log(calcFactAge2(2037));
*/

/*
let votesIntersting = 20;
let votesMindblowing = 5;
console.log(votesIntersting === votesMindblowing);

if (votesIntersting === votesMindblowing) {
  alert("This fact is equally interesting and mindblowing!");
} else if (votesIntersting > votesMindblowing) {
  console.log("Intersting fact!");
} else if (votesMindblowing < votesIntersting) {
  console.log("Mindblowing fact!");
}

// falsy values: 0, '', null, undefined
// truthy value: everything else..

if (votesMindblowing) {
  console.log("Mindblowing fact!");
} else {
  console.log("No mindblowing votes yet");
}

let votesFalse = 77;
const totalUpvotes = votesIntersting + votesMindblowing;

const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources...";

// alert(message);

const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact is "${text}". It is ${calcFactAge(2015)} years old. 
It is probably ${totalUpvotes > votesFalse ? "correct" : "not true"}`;

console.log(str);
*/

/*
const fact = ["Lisbon is the capital of Portual", 2015, true];
console.log(fact);
console.log(fact[1]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact;
console.log(text);
console.log(createdIn);

//spread operator
const newFact = [...fact, "society"];
console.log(newFact);

const factObj = {
  text: "Lisbon is the capital of Portual",
  categoty: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact "${this.text}" is from the category ${this.categoty.toUpperCase()}`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { categoty, isCorrect } = factObj;
console.log(categoty);
console.log(factObj.createSummary());

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 2;
// });

const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);



const allCatgegories = CATEGORIES.map((el) => el.color);
console.log(allCatgegories);



function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year. Year needs to be less or equal to ${currentYear}`;
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);

console.log(factAges.join("-"));
*/
