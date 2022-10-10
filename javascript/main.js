const input = document.querySelector(".search__input");
const results = document.querySelector("#results");

console.log("hi")

const drawResponseList = (data) => {
  results.innerHTML = "";
  data.words.forEach((word) => {
    results.insertAdjacentHTML("beforeend", `<li>${word}</li>`);
  });
};

const fetchData = (query) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${query.target.value}`)
    .then(response => response.json())
    .then((data) => drawResponseList(data));
};


input.addEventListener("keyup", fetchData);
