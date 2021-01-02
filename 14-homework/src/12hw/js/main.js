const buttons = document.querySelector('.buttons');
const results = document.querySelector('.results');

async function getData(value) {
  const res = await fetch(`https://swapi.dev/api/${value}/`);
  const data = await res.json();
  console.log(data);
  console.log(data.next);
  displayResults(data, value);
}

function displayResults(data, value) {
  let output = '';
  if (value === 'people') {
    data.results.forEach((item) => {
      output += `
            <div class='card'>
                <h3 class='card-title'>${item.name}</h3>
                <p>Birth Year: ${item.birth_year}</p>
                <p>Gender: ${item.gender}</p>
            </div>`;
    });
  } else if (value === 'planets') {
    data.results.forEach((item) => {
      output += `
        <div class='card'>
            <h3 class='card-title'>${item.name}</h3>
        </div>`;
    });
  }
  results.innerHTML = output;
}

buttons.addEventListener('click', (e) => {
  console.log(getData(e.target.textContent.trim().toLowerCase()));
});
