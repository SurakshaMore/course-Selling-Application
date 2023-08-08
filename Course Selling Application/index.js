const courseAvailable = [
  "Python",
  "Cloud Computing",
  "Web Development",
  "JavaScript",
  "Data Science",
  "Amazon AWS",
  "Mobile App Development",
  "Machine Learning and Artificial Intelligence",
  "Cybersecurity",
];

// search course

function searchCourse() {
  const searchItem = document
    .getElementById("courseSearch")
    .value.toLowerCase();
  const courseCards = document.querySelectorAll(".card");

  courseCards.forEach((card) => {
    const courseTitle = card
      .querySelector(".card-title")
      .innerText.toLowerCase();

    if (searchItem === "") {
      card.style.display = "block";
    } else if (courseTitle.includes(searchItem)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// HEADER

let headerEl = document.getElementById('headerContent')

fetch('header.html')
  .then(response => response.text())
  .then(headerContent => {
    headerEl.innerHTML = headerContent;
});


// BODY

let bodyEl = document.getElementById('bodyContent');

fetch('body.html')
  .then(response => response.text())
  .then(bodyContent => {
    bodyEl.innerHTML = bodyContent;
});

// FOOTER

let footerEl = document.getElementById('footerContent');

fetch('footer.html')
  .then(response => response.text())
  .then(footerContent => {
    footerEl.innerHTML = footerContent;
});

