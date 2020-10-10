// Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
  console.log(paragraphs[i]);
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.style.backgroundColor = "yellow";
resultsContainer.innerHTML = `<p>New paragraph</p>`;

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function createList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

createList(cats);

// Question 8

function createCats(cats) {
  let catsHtml = "";

  for (let i = 0; i < cats.length; i++) {
    let catAge = "Age unknown";

    if (cats[i].age !== undefined) {
      catAge = cats[i].age;
    }

    catsHtml =
      catsHtml + "<h5>" + cats[i].name + "</h5>" + "<p>" + catAge + "</p>";
  }

  const finalHtml = "<div>" + catsHtml + "</div>";

  return finalHtml;
}

const newHtml = createCats(cats);

const container = document.querySelector(".cat-container");
container.innerHTML = newHtml;
