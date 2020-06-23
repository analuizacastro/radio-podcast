window.addEventListener("load", start);

let inputFrequency = null;
let inputRange = null;
let divContent = null;
let i = 0;

function start() {
  inputFrequency = document.querySelector("#inputFrequency");
  inputRange = document.querySelector("#inputRange");
  divContent = document.querySelector("#divContent");
  buttonNext = document.querySelector("#buttonNext");
  buttonBack = document.querySelector("#buttonBack");

  inputRange.addEventListener("input", handleRangeChange);
  buttonNext.addEventListener("click", handleButtonNext);
}

function handleRangeChange(event) {
  var frequencyValue = event.target.value;
  inputFrequency.value = frequencyValue;

  renderPodcast(frequencyValue);
}

function handleButtonNext() {
  let input = inputFrequency.value;
  let test2 = realPodcasts[i].id - input;
  if (i === realPodcasts.length - 1) {
    i = 0;
  }
  if (test2 <= 0) {
    i = i + 1;
    handleButtonNext();
  } else {
    inputFrequency.value = realPodcasts[i].id;
    inputRange.value = realPodcasts[i].id;
    renderPodcast(input);
  }
}

function renderPodcast(frequencyValue) {
  const foundPodcast = realPodcasts.find(function (podcast) {
    return frequencyValue === podcast.id;
  });
  if (!foundPodcast) {
    divContent.innerHTML = `<p>No podcast found on this frequency.</p>
    <img class="podcast-notfound" src='../img/undraw_Taken_if77.svg' />
    `;
  } else {
    divContent.innerHTML = `
      <img src='../img/${foundPodcast.img}' class="podcast-img"
      />
      <h1>${foundPodcast.title}</h1>
      <p>${foundPodcast.description}</p>
    `;
  }
}
