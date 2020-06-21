window.addEventListener("load", start);

let inputFrequency = null;
let inputRange = null;
let divContent = null;

function start() {
  inputFrequency = document.querySelector("#inputFrequency");
  inputRange = document.querySelector("#inputRange");
  divContent = document.querySelector("#divContent");

  inputRange.addEventListener("input", handleRangeChange);
}

function handleRangeChange(event) {
  var frequencyValue = event.target.value;
  inputFrequency.value = frequencyValue;

  renderPodcast(frequencyValue);
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
